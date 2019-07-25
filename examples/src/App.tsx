import React, { useState, useCallback } from 'react';
import { Editor, OnChangeParam, RenderMarkProps, RenderBlockProps } from 'slate-react';
import { Editor as EditorType, Value } from 'slate';
import SoftBreak from 'slate-soft-break';
import styled from 'styled-components';

import AppHeader from './AppHeader';
import initialValue from './value.json';
import {
  EditorSchema,
  EditorToolbar, Separator,
  Bold, Code, Italic, Underline,
  Blockquote, BulletList, ListItem, OrderedList, Paragraph
} from '../../src/index';

const plugins = [
  SoftBreak({ shift: true }),
  Bold.Plugin,
  Italic.Plugin,
  Underline.Plugin,
  Code.Plugin,
  Blockquote.Plugin,
  BulletList.Plugin,
  OrderedList.Plugin,
  ListItem.Plugin
]

const App = () => {
  const [value, setValue] = useState(Value.fromJSON(initialValue));
  const [editor, setEditorRef] = useState<Editor | null>(null);

  const onChangeValue = ({ value }: OnChangeParam) => setValue(value);
  const onRenderEditor = useCallback(ref => setEditorRef(ref), []);

  const renderBlock = (props: RenderBlockProps, editor: EditorType, next: () => any) => {
    switch (props.node.type) {
      case Blockquote.TYPE:
        return Blockquote.Block(props);
      case BulletList.TYPE:
        return BulletList.Block(props);
      case OrderedList.TYPE:
        return OrderedList.Block(props);
      case ListItem.TYPE:
        return ListItem.Block(props);
      default:
        return Paragraph.Block(props);
    }
  }

  const renderMark = (props: RenderMarkProps, editor: EditorType, next: () => any) => {
    switch (props.mark.type) {
      case Bold.TYPE:
        return Bold.Mark(props);
      case Italic.TYPE:
        return Italic.Mark(props);
      case Underline.TYPE:
        return Underline.Mark(props);
      case Code.TYPE:
        return Code.Mark(props);
      default:
        return next();
    }
  }

  return (
    <Container>
      <AppHeader />

      <EditorContainer>
        <EditorToolbar editor={editor}>
          <Bold.Button />
          <Italic.Button />
          <Underline.Button />
          <Code.Button />

          <Separator />

          <Blockquote.Button />
          <BulletList.Button />
          <OrderedList.Button />
        </EditorToolbar>

        <EditorContent
          ref={onRenderEditor}
          schema={EditorSchema}
          value={value}
          onChange={onChangeValue}
          renderBlock={renderBlock}
          renderMark={renderMark}
          plugins={plugins}
        />
      </EditorContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 760px;
`;

const EditorContainer = styled.div`
  width: 100%;
`;

const EditorContent = styled(Editor)`
  line-height: 1.6rem;
  min-height: 300px;

  blockquote {
    border-left: 5px solid #E9EDF2;
    color: #606482;
    padding: 5px 0 5px 15px;
    margin-left: 0;
  }

  code {
    background: #F9FAFB;
    border-radius: 0.4rem;
    font-size: 0.85rem;
    padding: 6px;
  }

  li {
    margin-bottom: 6px;
  }
`;

export default App;
