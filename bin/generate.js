const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const rootDir = path.join(__dirname, '..');
const phosphorPath = require.resolve('phosphor-react-native/src/index');

const distDir = path.join(rootDir, 'dist');
const typesDir = path.join(rootDir, 'types');
const srcDir = path.join(rootDir, 'src');
const iconsDir = path.join(srcDir, 'icons');
const typesIconsDir = path.join(typesDir, 'icons');
const distIconsDir = path.join(distDir, 'icons');

// Ensure all required directories exist
[distDir, typesDir, iconsDir, typesIconsDir, distIconsDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const RESERVED_NAMES = {
  Function: 'FunctionIcon',
  Infinity: 'InfinityIcon',
  Number: 'NumberIcon',
  String: 'StringIcon',
  Boolean: 'BooleanIcon',
  Symbol: 'SymbolIcon',
  Object: 'ObjectIcon',
  Math: 'MathIcon',
  Date: 'DateIcon',
  Error: 'ErrorIcon',
  Map: 'MapIcon',
  Set: 'SetIcon',
};

fs.readFile(phosphorPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading phosphor-react-native index:', err);
    return;
  }

  const exportMatches = data.match(/export { default as \w+ }/g);
  if (!exportMatches) {
    console.error('No exports found');
    return;
  }

  // Create individual files for each icon
  const iconExports = [];
  const iconReExports = [];

  exportMatches.forEach((exp) => {
    const originalName = exp.match(/as (\w+)/)[1];
    const iconName = RESERVED_NAMES[originalName] || originalName;

    // Create individual icon file
    const iconFileContent = `import { themed } from '@tamagui/helpers-icon';
import { ${originalName} as _${originalName} } from 'phosphor-react-native';

export const ${iconName} = themed(_${originalName});
`;
    fs.writeFileSync(
      path.join(iconsDir, `${iconName}.ts`),
      iconFileContent,
      'utf-8'
    );

    // Create type definition file for each icon
    const iconDtsContent = `import type { IconProps } from '@tamagui/helpers-icon';

export const ${iconName}: (props: IconProps) => JSX.Element;
`;
    fs.writeFileSync(
      path.join(typesDir, 'icons', `${iconName}.d.ts`),
      iconDtsContent,
      'utf-8'
    );

    // Create CJS file for each icon
    const iconCjsContent = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const helpers_icon_1 = require("@tamagui/helpers-icon");
const phosphor_react_native_${originalName} = require("phosphor-react-native").${originalName};
exports.${iconName} = helpers_icon_1.themed(phosphor_react_native_${originalName});
`;
    fs.writeFileSync(
      path.join(distDir, 'icons', `${iconName}.cjs`),
      iconCjsContent,
      'utf-8'
    );

    // Create ESM file for each icon
    const iconEsmContent = `import { themed } from '@tamagui/helpers-icon';
import { ${originalName} as _${originalName} } from 'phosphor-react-native';

export const ${iconName} = themed(_${originalName});
`;
    fs.writeFileSync(
      path.join(distDir, 'icons', `${iconName}.mjs`),
      iconEsmContent,
      'utf-8'
    );

    // Prepare exports for main index file
    iconExports.push(`import { ${originalName} as _${originalName} } from 'phosphor-react-native';
export const ${iconName} = themed(_${originalName});`);

    // Prepare re-exports for main index file
    iconReExports.push(`export { ${iconName} } from './icons/${iconName}';`);
  });

  // Create type definition file
  const typeExports = exportMatches.map((exp) => {
    const originalName = exp.match(/as (\w+)/)[1];
    const iconName = RESERVED_NAMES[originalName] || originalName;

    return `export const ${iconName}: (props: IconProps) => JSX.Element;`;
  });

  const dtsContent = `import type { IconProps } from '@tamagui/helpers-icon'

${typeExports.join('\n')}
`;

  // Create type definition re-export file
  const indexContent = `${exportMatches
    .map((exp) => {
      const originalName = exp.match(/as (\w+)/)[1];
      const iconName = RESERVED_NAMES[originalName] || originalName;
      return `export { ${iconName} } from './icons/${iconName}';`;
    })
    .join('\n')}
`;

  // Create CJS main file
  const cjsContent = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

${exportMatches
  .map((exp) => {
    const originalName = exp.match(/as (\w+)/)[1];
    const iconName = RESERVED_NAMES[originalName] || originalName;
    return `exports.${iconName} = require("./icons/${iconName}").${iconName};`;
  })
  .join('\n')}
`;

  // Create ESM main file
  const esmContent = `${exportMatches
    .map((exp) => {
      const originalName = exp.match(/as (\w+)/)[1];
      const iconName = RESERVED_NAMES[originalName] || originalName;
      return `export { ${iconName} } from "./icons/${iconName}";`;
    })
    .join('\n')}
`;

  fs.writeFileSync(path.join(srcDir, 'index.ts'), indexContent, 'utf-8');
  fs.writeFileSync(path.join(typesDir, 'index.d.ts'), dtsContent, 'utf-8');

  fs.writeFileSync(path.join(distDir, 'index.cjs'), cjsContent, 'utf-8');
  fs.writeFileSync(path.join(distDir, 'index.mjs'), esmContent, 'utf-8');

  console.log(
    'Generation complete. Please merge the exports field from package.json.generated into your package.json'
  );

  try {
    execSync('biome check --write src dist types');
  } catch (error) {
    console.error('Error formatting code:', error);
  }
});
