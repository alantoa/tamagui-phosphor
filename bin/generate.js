const fs = require('node:fs');
const glob = require('glob');
import camelcase from 'camelcase';
const uppercamelcase = require('uppercamelcase');
const path = require('node:path');
const cheerio = require('cheerio');

const rootDir = path.join(__dirname, '..');
const phosphorSvgsDir = path.join(rootDir, 'svgs');

const outDir = path.join(rootDir, 'src/icons');
const icons = glob.sync(`${phosphorSvgsDir}/*/**.svg`);

fs.mkdir(outDir, () => {});

let iconExports = [];

icons.forEach((i) => {
  const svg = fs.readFileSync(i, 'utf-8');
  const id = path.basename(i, '.svg');
  const $ = cheerio.load(svg, {
    xmlMode: true,
  });
  const fileName = path.basename(i).replace('.svg', '.tsx');
  const location = path.join(outDir, fileName);

  // Because CSS does not exist on Native platforms
  // We need to duplicate the styles applied to the
  // SVG to its children
  const svgAttribs = $('svg')[0].attribs;
  delete svgAttribs['xmlns'];
  const attribsOfInterest = {};
  Object.keys(svgAttribs).forEach((key) => {
    if (
      ![
        'height',
        'width',
        'viewBox',
        'fill',
        'stroke-width',
        'stroke-linecap',
        'stroke-linejoin',
      ].includes(key)
    ) {
      attribsOfInterest[key] = svgAttribs[key];
    }
  });

  $('*').each((index, el) => {
    Object.keys(el.attribs).forEach((x) => {
      if (x.includes('-')) {
        $(el).attr(camelcase(x), el.attribs[x]).removeAttr(x);
      }
      if (x === 'stroke') {
        $(el).attr(x, 'currentColor');
      }
    });

    // For every element that is NOT svg ...
    if (el.name !== 'svg') {
      Object.keys(attribsOfInterest).forEach((key) => {
        $(el).attr(camelcase(key), attribsOfInterest[key]);
      });
    }

    if (el.name === 'svg') {
      $(el).attr('width', 'size');
      $(el).attr('height', 'size');
      $(el).attr('fill', 'currentColor');
      $(el).attr('otherProps', '...');
    }
  });

  const cname = uppercamelcase(id);

  const out = `
  import React, { memo } from 'react'
  import PropTypes from 'prop-types'
  import type { NamedExoticComponent } from 'react'
  import type { IconProps } from '@tamagui/helpers-icon'
  import {
    Svg,
    Circle as _Circle,
    Ellipse as SvgEllipse,
    G,
    LinearGradient,
    RadialGradient, 
    Line,
    Path as SvgPath,
    Polygon as SvgPolygon,
    Polyline as SvgPolyline,
    Rect as SvgRect,
    Symbol as SvgSymbol,
    Text as _Text,
    Use,
    Defs,
    Stop as SvgStop
  } from 'react-native-svg'
  import { themed } from '@tamagui/helpers-icon'

  const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props
    return (
      ${$('svg')
        .toString()
        .replace(/ class=\"[^\"]+\"/g, '')
        .replace(/ version=\"[^\"]+\"/g, '')
        .replace(new RegExp('stroke="currentColor"', 'g'), 'stroke={color}')
        .replace('width="24"', 'width={size}')
        .replace('height="24"', 'height={size}')
        .replace('otherProps="..."', '{...otherProps}')
        .replace('width="size"', 'width={size}')
        .replace('height="size"', 'height={size}')
        .replace('<svg', '<Svg')
        .replace('</svg', '</Svg')
        .replace(new RegExp('<circle', 'g'), '<_Circle')
        .replace(new RegExp('</circle', 'g'), '</_Circle')
        .replace(new RegExp('<ellipse', 'g'), '<SvgEllipse')
        .replace(new RegExp('</ellipse', 'g'), '</SvgEllipse')
        .replace(new RegExp('<g', 'g'), '<G')
        .replace(new RegExp('</g', 'g'), '</G')
        .replace(new RegExp('<linear-gradient', 'g'), '<LinearGradient')
        .replace(new RegExp('</linear-gradient', 'g'), '</LinearGradient')
        .replace(new RegExp('<radial-gradient', 'g'), '<RadialGradient')
        .replace(new RegExp('</radial-gradient', 'g'), '</RadialGradient')
        .replace(new RegExp('<path', 'g'), '<SvgPath')
        .replace(new RegExp('</path', 'g'), '</SvgPath')
        .replace(new RegExp('<line', 'g'), '<Line')
        .replace(new RegExp('</line', 'g'), '</Line')
        .replace(new RegExp('<polygon', 'g'), '<SvgPolygon')
        .replace(new RegExp('</polygon', 'g'), '</SvgPolygon')
        .replace(new RegExp('<polyline', 'g'), '<SvgPolyline')
        .replace(new RegExp('</polyline', 'g'), '</SvgPolyline')
        .replace(new RegExp('<rect', 'g'), '<SvgRect')
        .replace(new RegExp('</rect', 'g'), '</SvgRect')
        .replace(new RegExp('<symbol', 'g'), '<SvgSymbol')
        .replace(new RegExp('</symbol', 'g'), '</SvgSymbol')
        .replace(new RegExp('<text', 'g'), '<_Text')
        .replace(new RegExp('</text', 'g'), '</_Text')
        .replace(new RegExp('<use', 'g'), '<Use')
        .replace(new RegExp('</use', 'g'), '</Use')
        .replace(new RegExp('<defs', 'g'), '<Defs')
        .replace(new RegExp('</defs', 'g'), '</Defs')
        .replace(new RegExp('<stop', 'g'), '<SvgStop')
        .replace(new RegExp('</stop', 'g'), '</SvgStop')
        .replace(new RegExp('px', 'g'), '')}
    )
  }

  Icon.displayName = '${cname}'

  export const ${cname}: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
`;

  fs.writeFileSync(location, out, 'utf-8');

  iconExports.push(`export { ${cname} } from './icons/${id}'`);
});

setTimeout(() => {
  fs.writeFileSync(
    path.join(rootDir, 'src', 'index.ts'),
    iconExports.join('\n'),
    'utf-8'
  );

  // run biome:
  require('child_process').execSync(`biome check --write src`);
}, 1000);
