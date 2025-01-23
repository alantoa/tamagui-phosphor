const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const rootDir = path.join(__dirname, '..');
const phosphorPath = require.resolve('phosphor-react-native/src/index');

const distDir = path.join(rootDir, 'dist');
const typesDir = path.join(rootDir, 'types');
[distDir, typesDir].forEach((dir) => {
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

  const iconExports = exportMatches.map((exp) => {
    const originalName = exp.match(/as (\w+)/)[1];
    const iconName = RESERVED_NAMES[originalName] || originalName;

    return `import { ${originalName} as _${originalName} } from 'phosphor-react-native';
export const ${iconName} = themed(_${originalName});`;
  });

  const indexContent = `import { themed } from '@tamagui/helpers-icon'

${iconExports.join('\n')}
`;

  const typeExports = exportMatches.map((exp) => {
    const originalName = exp.match(/as (\w+)/)[1];
    const iconName = RESERVED_NAMES[originalName] || originalName;

    return `export const ${iconName}: (props: IconProps) => JSX.Element;`;
  });

  const dtsContent = `import type { IconProps } from '@tamagui/helpers-icon'

${typeExports.join('\n')}
`;

  const cjsContent = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const helpers_icon_1 = require("@tamagui/helpers-icon");
${exportMatches
  .map((exp) => {
    const originalName = exp.match(/as (\w+)/)[1];
    const iconName = RESERVED_NAMES[originalName] || originalName;
    return `const phosphor_react_native_${originalName} = require("phosphor-react-native").${originalName};
exports.${iconName} = helpers_icon_1.themed(phosphor_react_native_${originalName});`;
  })
  .join('\n')}
`;

  const esmContent = `import { themed } from '@tamagui/helpers-icon';
${exportMatches
  .map((exp) => {
    const originalName = exp.match(/as (\w+)/)[1];
    const iconName = RESERVED_NAMES[originalName] || originalName;
    return `import { ${originalName} as _${originalName} } from 'phosphor-react-native';
export const ${iconName} = themed(_${originalName});`;
  })
  .join('\n')}
`;

  fs.writeFileSync(
    path.join(rootDir, 'src', 'index.ts'),
    indexContent,
    'utf-8'
  );
  fs.writeFileSync(path.join(typesDir, 'index.d.ts'), dtsContent, 'utf-8');
  fs.writeFileSync(path.join(distDir, 'index.cjs'), cjsContent, 'utf-8');
  fs.writeFileSync(path.join(distDir, 'index.mjs'), esmContent, 'utf-8');

  execSync('biome check --write src dist types');
});
