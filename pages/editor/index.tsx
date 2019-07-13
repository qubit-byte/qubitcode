import React, { Component } from 'react';
import MonacoEditor from '@monaco-editor/react';
import Header from '../../components/Header';

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
          height: '100vh',
          maxHeight: '100vh',
          flexDirection: 'column',
        }}
      >
        <Header />
        <MonacoEditor
          value="nooooo"
          language={'typescript'}
          theme={'dark'}
          editorDidMount={(_, editor: any) => {
            this.editor = editor;
          }}
        />
      </div>
    );
  }
}

export default Editor;
