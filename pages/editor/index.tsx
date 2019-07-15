import React, { Component } from 'react';
import Header from '../../components/Header';
import dynamic from 'next/dynamic';
// const AceEditor = dynamic(() => import('../../components/AceEditor'), {
//   ssr: false,
// });
const MonacoEditor = dynamic(() => import('../../components/MonacoEditor'), {
  ssr: false,
});

class Editor extends Component<{}, {}> {
  editor: any;
  constructor(props: any) {
    super(props);
    this.editor = null;
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          maxWidth: '100vw',
          height: '100vh',
        }}
      >
        <Header />
        <MonacoEditor />
      </div>
    );
  }
}

export default Editor;
