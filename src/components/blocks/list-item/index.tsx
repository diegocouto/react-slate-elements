import React from 'react';
import AutoReplace from 'slate-auto-replace';
import { RenderBlockProps, Editor } from 'slate-react';

import { TYPE as BULLET_LIST_TYPE } from '../bullet-list';
import { TYPE as ORDERED_LIST_TYPE } from '../ordered-list';
import EditorHandler from '../../../helpers/EditorHandler';

export const TYPE = 'list-item';
const Button = undefined;

const Block: React.FunctionComponent<RenderBlockProps> = ({ isSelected, isFocused, ...props }) => (
  <li {...props} />
)

const Plugin = [
  AutoReplace({
    trigger: 'space', before: /^(>)$/, change: (editor: Editor) => editor.setBlocks({ type: TYPE }),
  }),
  {
    onKeyDown(event: KeyboardEvent, editor: Editor, next: () => void) {
      if (!EditorHandler.hasBlock(editor.value, TYPE)) {
        return next();
      }

      if (event.key === 'Enter' && EditorHandler.isEmpty(editor.value)) {
        event.preventDefault();
        return editor
          .unwrapBlock(BULLET_LIST_TYPE)
          .unwrapBlock(ORDERED_LIST_TYPE)
          .setBlocks(EditorHandler.DEFAULT_NODE);
      }

      return next();
    },
  }
]

export default {
  TYPE,
  Button,
  Block,
  Plugin
};
