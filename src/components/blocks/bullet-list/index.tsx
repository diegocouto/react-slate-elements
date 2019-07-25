import React from 'react';
import AutoReplace from 'slate-auto-replace';
import { RenderBlockProps, Editor } from 'slate-react';

import BlockButton, { BlockButtonProps } from '../../ui/BlockButton';
import ListHandler from '../../../helpers/ListHandler';
import { TYPE as LIST_ITEM_TYPE } from '../list-item';
import Icon from './icon.svg';

export const TYPE = 'bullet-list';

const Button: React.FunctionComponent<BlockButtonProps> = (props) => {
  const onToggle = (event: React.MouseEvent, type: string) => {
    event.preventDefault();
    ListHandler.onToggleButton(props.editor, type);
  }

  const isActive = ListHandler.isActive(props.editor, TYPE);

  return (
    <BlockButton {...props} blockType={TYPE} isActive={isActive} onToggleBlock={onToggle}>
      <Icon />
    </BlockButton>
  )
}

const Block: React.FunctionComponent<RenderBlockProps> = ({ isSelected, isFocused, ...props }) => (
  <ul {...props} />
)

const Plugin = [
  AutoReplace({
    trigger: 'space', before: /^([\* | \-])$/, change: (editor: Editor) => {
      editor.setBlocks(LIST_ITEM_TYPE).wrapBlock(TYPE);
    },
  })
]

export default {
  TYPE,
  Button,
  Block,
  Plugin
};
