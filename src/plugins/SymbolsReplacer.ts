import AutoReplace from 'slate-auto-replace';
import { Editor } from 'slate-react';

const Plugin = [
  AutoReplace({
    trigger: 'space', before: /->/, change: (editor: Editor) => { editor.moveAnchorBackward(2).insertText('→ ') },
  }),
  AutoReplace({
    trigger: 'space', before: /<-/, change: (editor: Editor) => { editor.moveAnchorBackward(2).insertText('← ') },
  }),
  AutoReplace({
    trigger: 'space', before: />=/, change: (editor: Editor) => { editor.moveAnchorBackward(2).insertText('≥ ') },
  }),
  AutoReplace({
    trigger: 'space', before: /<=/, change: (editor: Editor) => { editor.moveAnchorBackward(2).insertText('≤ ') },
  }),
  AutoReplace({
    trigger: 'space', before: /!=/, change: (editor: Editor) => { editor.moveAnchorBackward(2).insertText('≠ ') },
  }),
  AutoReplace({
    trigger: 'space', before: /~=/, change: (editor: Editor) => { editor.moveAnchorBackward(2).insertText('≈ ') },
  }),
]

export default {
  Plugin
}
