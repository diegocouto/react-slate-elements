# React Slate Elements

`react-slate-elements` is a set of React components to make your life easier when building your own rich text editor using Slate. Check it out:

![demo](https://user-images.githubusercontent.com/1069623/61877723-4a1c4580-aef8-11e9-9fa2-a1e095de4470.png)

**[View demo](https://diegocouto.github.com/react-slate-elements)** 👈

## Getting started

Install it as any other package:

    yarn add react-slate-elements

Now let's see how to put it into action:

```javascript
import React, { useState, useCallback } from 'react';
import { Value } from 'slate';
import { Editor } from 'slate-react';
import { EditorSchema, EditorToolbar, Bold } from 'react-slate-elements';

const plugins = [
  Bold.Plugin,
]

const App = () => {
  const [value, setValue] = useState(Value.fromJS(initialValue));
  const [editor, setEditorRef] = useState(null);

  const onChangeValue = ({ value }) => setValue(value);
  const onRenderEditor = useCallback(ref => setEditorRef(ref), []);

  const renderMark = (props, editor, next) => {
    switch (props.mark.type) {
      case Bold.TYPE:
        return Bold.Mark(props);
      default:
        return next();
    }
  }

  return (
    <div style={{ margin: 20 }}>
      <EditorToolbar editor={editor}>
        <Bold.Button />
      </EditorToolbar>

      <Editor
        ref={onRenderEditor}
        schema={EditorSchema}
        value={value}
        onChange={onChangeValue}
        renderMark={renderMark}
        plugins={plugins}
      />
    </div>
  );
}

const initialValue = {
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
};

export default App;
```

Although it's an arguably quite simple example, all the main concepts are present here and you'll be able to easily extend it to fulfill all your requirements.

In order to allow a bold mark to be used we've:

1. Added a condition to verify if it should be applied or not on Slate's `renderMark` function. We check if the current node has the `Bold.TYPE` and, if positive, we render the mark accordingly through `Bold.Mark(props)`;
2. Included the `<Bold.Button />` inside our `<EditorToolbar editor={editor}>`, so we'll have a button to toggle this mark;
3. Added the `Bold.Plugin` into our editors' plugin array. Because of this, we can press `Cmd+b` to toggle our bold mark without having to press the toolbar button.

For a complete example, you can [check the code used on the demonstration](https://github.com/diegocouto/react-slate-elements/blob/master/examples/src/App.tsx) page.

## Available Components

**UI**

- [x] [EditorToolbar](https://github.com/diegocouto/react-slate-elements/blob/master/src/components/ui/EditorToolbar.tsx)
- [x] [Separator](https://github.com/diegocouto/react-slate-elements/blob/master/src/components/ui/Separator.tsx)

**Mark**

- [x] [Bold](https://github.com/diegocouto/react-slate-elements/blob/master/src/components/marks/bold/index.tsx)
- [x] [Code](https://github.com/diegocouto/react-slate-elements/blob/master/src/components/marks/code/index.tsx)
- [x] [Italic](https://github.com/diegocouto/react-slate-elements/blob/master/src/components/marks/italic/index.tsx)
- [x] [Underline](https://github.com/diegocouto/react-slate-elements/blob/master/src/components/marks/underline/index.tsx)

**Blocks**

- [x] [Blockquote](https://github.com/diegocouto/react-slate-elements/blob/master/src/components/blocks/blockquote/index.tsx)
- [x] [BulletList](https://github.com/diegocouto/react-slate-elements/blob/master/src/components/blocks/bullet-list/index.tsx)
- [x] [OrderedList](https://github.com/diegocouto/react-slate-elements/blob/master/src/components/blocks/ordered-list/index.tsx)
- [x] [ListItem](https://github.com/diegocouto/react-slate-elements/blob/master/src/components/blocks/list-item/index.tsx)
- [x] [Paragraph](https://github.com/diegocouto/react-slate-elements/blob/master/src/components/blocks/paragraph/index.tsx)

**Helpers**

- [x] [EditorSchema](https://github.com/diegocouto/react-slate-elements/blob/master/src/helpers/EditorSchema.ts)

## Big thanks 👏

All icons used here are part of the [MaterialDesign project](https://github.com/Templarian/MaterialDesign).

