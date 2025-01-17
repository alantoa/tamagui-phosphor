import { build } from 'bun';
import * as esbuild from 'esbuild';
import { mkdir } from 'node:fs/promises';

async function ensureDir(dir: string) {
  try {
    await mkdir(dir, { recursive: true });
  } catch (e) {
    // Directory already exists
  }
}

async function runBuild() {
  console.log('Starting build process...');

  // Ensure output directories exist
  await ensureDir('./lib/commonjs');
  await ensureDir('./lib/module');
  await ensureDir('./lib/types');

  const external = [
    'react',
    'react-native',
    '@tamagui/helpers-icon',
    'phosphor-react-native',
  ];

  // Build ESM version with Bun
  console.log('Building ESM version...');
  await build({
    entrypoints: ['./src/index.ts'],
    outdir: './lib/module',
    target: 'node',
    format: 'esm',
    external,
  });

  // Build CommonJS version with esbuild
  console.log('Building CommonJS version...');
  await esbuild.build({
    entryPoints: ['./src/index.ts'],
    outdir: './lib/commonjs',
    bundle: true,
    platform: 'node',
    format: 'cjs',
    external,
  });

  console.log('Build completed successfully!');
}

runBuild().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
