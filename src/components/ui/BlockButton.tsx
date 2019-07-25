import React from 'react';
import { Editor } from 'slate-react';

import ToolbarButton from './ToolbarButton';
import EditorHandler from '../../helpers/EditorHandler';

export interface BlockButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  editor?: Editor,
  isActive?: boolean,
  onToggleBlock?: (event: React.MouseEvent | React.TouchEvent, type: string) => void,
}

interface InternalBlockButtonProps extends BlockButtonProps {
  blockType: string,
}

const BlockButton: React.FunctionComponent<InternalBlockButtonProps> = ({
  editor, blockType, onToggleBlock, ...props
}) => {
  const isActive = props.isActive || (editor && EditorHandler.hasBlock(editor.value, blockType));

  const onPress = (event: React.MouseEvent | React.TouchEvent) => {
    if (onToggleBlock && blockType) {
      onToggleBlock(event, blockType);
    }
  }

  return (
    <ToolbarButton
      aria-pressed={isActive}
      onMouseDown={onPress}
      onTouchStart={onPress}
      title={blockType}
      className={props.className}
      children={props.children}
    />
  );
};

export default BlockButton;
