const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const rootDir = path.join(__dirname, '..');
const phosphorPath = require.resolve('phosphor-react-native/src/index');

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

  fs.writeFileSync(
    path.join(rootDir, 'src', 'index.ts'),
    indexContent,
    'utf-8'
  );

  execSync('biome check --write src');
});
