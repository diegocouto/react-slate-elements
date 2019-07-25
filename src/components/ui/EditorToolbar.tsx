import React from 'react';
import { Editor } from 'slate-react';
import styled from 'styled-components';

import EditorHandler from '../../helpers/EditorHandler';
import Colors from './styles/Colors';

interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  editor: Editor | null,
  children: React.ReactElement<any>[] | React.ReactElement<any> | undefined,
  onToggleBlock?: (event: React.MouseEvent, type: string) => void,
  onToggleMark?: (event: React.MouseEvent, type: string) => void
}

const EditorToolbar: React.FunctionComponent<ToolbarProps> = ({ editor, ...props }) => {
  if (!editor) {
    return <ToolbarContainer />;
  }

  const onToggleBlock = (event: React.MouseEvent, type: string): void => {
    if (props.onToggleBlock) {
      props.onToggleBlock(event, type);
      return;
    }

    event.preventDefault();

    const isActive = EditorHandler.hasBlock(editor.value, type);
    const nextBlockType = isActive ? EditorHandler.DEFAULT_NODE : type;

    editor.setBlocks(nextBlockType);
  }

  const onToggleMark = (event: React.MouseEvent, type: string): void => {
    if (props.onToggleMark) {
      props.onToggleMark(event, type);
      return;
    }

    event.preventDefault();

    editor.toggleMark(type);
  };

  return (
    <ToolbarContainer className={props.className} style={props.style}>
      {React.Children.map(props.children, child => React.cloneElement(
        child as React.ReactElement<any>, {
          onToggleBlock: onToggleBlock,
          onToggleMark: onToggleMark,
          editor,
        }
      ))}
    </ToolbarContainer>
  );
}

const ToolbarContainer = styled.div`
  border: 2px solid ${Colors.grayLight};
  border-radius: 0.4rem;
  display: flex;
  overflow-x: scroll;
  padding: 10px 7.5px;
  margin-bottom: 15px;
`;

export default EditorToolbar;