declare module 'slate-auto-replace' {
  import { Editor } from 'slate-react';

  interface AutoReplaceOptions {
    trigger: string,
    before: RegExp,
    change: (editor: Editor) => void,
  }

  function AutoReplace(options?: AutoReplaceOptions): any;
  export = AutoReplace
}