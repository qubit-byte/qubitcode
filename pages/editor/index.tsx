import React, { Component } from 'react';
import Header from '../../components/Header';
// import dynamic from 'next/dynamic';
// const AceEditor = dynamic(() => import('../../components/AceEditor'), {
//   ssr: false,
// });
import MonacoEditor from '../../components/MonacoEditor';

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
        <div
          style={{
            flex: 1,
            display: 'flex',
            width: '100vw',
            paddingTop: 10,
            backgroundColor: 'rgb(32,33,36)',
          }}
        >
          <MonacoEditor />
        </div>
      </div>
    );
  }
}

export default Editor;
