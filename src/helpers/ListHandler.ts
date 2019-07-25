import { Editor, } from 'slate-react';

import { TYPE as LIST_ITEM_TYPE } from '../components/blocks/list-item';
import EditorHandler from './EditorHandler';
import { Node, Block } from 'slate';

const isActive = (editor: Editor | undefined, type: string) => {
  if (!editor || editor.value.blocks.size <= 0) { return false; }

  const { value } = editor;
  const parent = value.document.getParent(value.blocks.first().key);

  return EditorHandler.hasBlock(value, LIST_ITEM_TYPE) && !!parent && (<Block>parent).type === type;
}

const onToggleButton = (editor: Editor | undefined, type: string) => {
  if (!editor) { return; }

  const isActive = EditorHandler.hasBlock(editor.value, LIST_ITEM_TYPE);

  if (isActive) {
    const { value } = editor;
    const isSameBlockType = value.blocks.some(block => {
      if (!block) return false;
      return !!value.document.getClosest(block.key, parent => (<Block>parent).type === type)
    });

    if (isSameBlockType) {
      editor.unwrapBlock(type).setBlocks(EditorHandler.DEFAULT_NODE);
    } else {
      editor
        .unwrapBlock(type === 'bullet-list' ? 'ordered-list' : 'bullet-list')
        .wrapBlock(type);
    }
  } else {
    editor.setBlocks(LIST_ITEM_TYPE).wrapBlock(type);
  }
}

export default {
  onToggleButton,
  isActive
}
