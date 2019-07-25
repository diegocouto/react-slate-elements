import { Value } from 'slate'

const DEFAULT_NODE = 'paragraph';

const hasBlock = (value: Value, type: string) => (
  value.blocks.some(node => !!node && node.type === type)
);

const isEmpty = (value: Value) => (
  value.blocks.some(node => !!node && node.text === '')
);

export default {
  DEFAULT_NODE,
  hasBlock,
  isEmpty,
}