import React from 'react';
import { RenderMarkProps } from 'slate-react';

import MarkButton, { MarkButtonProps } from '../../ui/MarkButton';
import ShortcutManager from '../../../helpers/ShortcutManager';
import Icon from './icon.svg';

export const TYPE = 'italic';

const Button: React.FunctionComponent<MarkButtonProps> = (props) => (
  <MarkButton markType={TYPE} {...props}>
    <Icon />
  </MarkButton>
)

const Mark: React.FunctionComponent<RenderMarkProps> = (props) => (
  <em {...props} />
)

const Plugin = [
  ShortcutManager('i', editor => editor.toggleMark(TYPE)),
]

export default {
  TYPE,
  Button,
  Mark,
  Plugin
};
