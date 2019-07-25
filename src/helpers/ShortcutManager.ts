import { Editor } from 'slate';
import { Plugin } from 'slate-react';

const ShortcutManager = (hotkey: string, callback: (editor: Editor) => void) => ({
  onKeyDown(event: KeyboardEvent, editor: Editor, next: () => void) {
    if (!(event.metaKey || event.ctrlKey) || event.key !== hotkey) {
      return next();
    }

    event.preventDefault();
    callback(editor);
  },
}) as Plugin;

export default ShortcutManager;
