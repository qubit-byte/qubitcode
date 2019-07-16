import React from 'react';
import { Resizable as Re } from 're-resizable';

function Resizable(props: { children: React.ReactChild }) {
  return <Re defaultSize={{ width: 100, height: '100%' }}>{props.children}</Re>;
}

export default Resizable;
