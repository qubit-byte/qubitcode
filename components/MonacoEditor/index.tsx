import { Component } from 'react';
import Editor from '@monaco-editor/react';

class MonacoEditor extends Component {
  render() {
    return (
      <div
        style={{
          flex: 1,
        }}
      >
        <Editor
          height={'100%'}
          width={'100vw'}
          theme={'dark'}
          language={'typescript'}
          loading={'Loading...'}
          editorDidMount={(_: any, editor: any) => {
            editor.onDidChangeModelContent((content: any) => {
              console.log(content);
            });
          }}
        />
      </div>
    );
  }
}

export default MonacoEditor;
