import React from 'react';
import styled from 'styled-components';
import { Editor } from 'slate-react';

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  editor?: Editor,
  onToggleBlock?: () => void,
  onToggleMark?: () => void
}

const Separator: React.FunctionComponent<SeparatorProps> = (props) => (
  <SeparatorElement className={props.className} style={props.style} />
)

const SeparatorElement = styled.div`
  width: 12px;
`;

export default Separator;