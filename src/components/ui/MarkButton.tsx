import React from 'react';
import { Editor } from 'slate-react';

import ToolbarButton from './ToolbarButton';

export interface MarkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  editor?: Editor,
  onToggleMark?: (event: React.MouseEvent | React.TouchEvent, type: string) => void,
}

interface InternalMarkButtonProps extends MarkButtonProps {
  markType: string,
}

const MarkButton: React.FunctionComponent<InternalMarkButtonProps> = ({
  editor, markType, onToggleMark, ...props
}) => {
  const isActive = editor &&
    editor.value &&
    editor.value.activeMarks &&
    editor.value.activeMarks.some(mark => (!!mark && mark.type === markType));

  const onPress = (event: React.MouseEvent | React.TouchEvent) => {
    if (onToggleMark && markType) {
      onToggleMark(event, markType);
    }
  }

  return (
    <ToolbarButton
      aria-pressed={isActive}
      onMouseDown={onPress}
      onTouchStart={onPress}
      title={markType}
      className={props.className}
      children={props.children}
    />
  );
};

export default MarkButton;
