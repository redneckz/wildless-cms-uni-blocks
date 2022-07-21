import fs from 'fs';

const sortMap = [
  'title',
  'titleSize',
  'align',
  'description',
  'image',
  'breadcrumbs',
  'benefits',
  'items',
  'steps',
  'cards',
  'accordionItems',
  'columnsMode',
  'qr',
  'rowHeaders',
  'columns',
  'isColoredFirstColumn',
  'visibleRowLength',
  'iconVersion',
  'buttons',
  'version',
  'blockVersion',
  'aboveText',
  'icon',
  'text',
  'fileSize',
  'href',
  'target',
  'documents',
  'bgColor',
];

let rawdata = fs.readFileSync('./bundle/blocks.schema.json');
let blocks = JSON.parse(rawdata);

const definitions = Object.entries(blocks.definitions).reduce(
  (result, [definitionKey, definition]) => {
    if (definition.properties) {
      const ordered = Object.keys(definition.properties)
        .sort((a, b) => {
          return sortMap.indexOf(a) - sortMap.indexOf(b);
        })
        .reduce((obj, key) => {
          obj[key] = definition.properties[key];
          return obj;
        }, {});
      result[definitionKey] = Object.assign(definition, { properties: ordered });
    } else {
      result[definitionKey] = definition;
    }
    return result;
  },
  {},
);
let data = JSON.stringify({
  $schema: blocks.$schema,
  definitions,
});
fs.writeFileSync('./bundle/blocks.schema.json', data);
