import React from 'react';
import styled from 'styled-components';

const Testing = () => React.createElement(Text, null, "That's dope");

const Text = styled.p.withConfig({
  displayName: "src__Text",
  componentId: "sc-3un2wq-0"
})(["background:rgba(0,0,0,0.1);padding:20px;border-radius:0.4rem;"]);
export { Testing };