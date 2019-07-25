import React from 'react';
import AutoReplace from 'slate-auto-replace';
import { RenderBlockProps, Editor } from 'slate-react';

import BlockButton, { BlockButtonProps } from '../../ui/BlockButton';
import EditorHandler from '../../../helpers/EditorHandler';
import Icon from './icon.svg';

export const TYPE = 'blockquote';

const Button: React.FunctionComponent<BlockButtonProps> = (props) => (
  <BlockButton blockType={TYPE} {...props}>
    <Icon />
  </BlockButton>
)

const Block: React.FunctionComponent<RenderBlockProps> = ({ isSelected, isFocused, ...props }) => (
  <blockquote {...props} />
)

const Plugin = [
  AutoReplace({
    trigger: 'space', before: /^([\>])$/, change: (editor: Editor) => editor.setBlocks({ type: TYPE }),
  }),
  {
    onKeyDown(event: KeyboardEvent, editor: Editor, next: () => void) {
      if (!EditorHandler.hasBlock(editor.value, TYPE)) {
        return next();
      }

      if (event.key === 'Enter' && EditorHandler.isEmpty(editor.value)) {
        event.preventDefault();
        return editor.setBlocks(EditorHandler.DEFAULT_NODE);
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
