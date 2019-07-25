import React from 'react';
import { RenderBlockProps } from 'slate-react';

export const TYPE = 'blockquote';
const Button = undefined

const Block: React.FunctionComponent<RenderBlockProps> = ({ isSelected, isFocused, ...props }) => (
  <p {...props} />
)

export default {
  TYPE,
  Button,
  Block,
  Plugin: []
};
