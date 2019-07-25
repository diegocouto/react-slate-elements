declare module 'slate-soft-break' {
  interface SoftBreakOptions {
    shift: boolean
  }

  function SoftBreak(options?: SoftBreakOptions): any;
  export = SoftBreak
}