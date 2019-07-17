import { Component } from 'react';
import Editor from '@monaco-editor/react';
import { Loader } from 'rsuite';
import 'rsuite/dist/styles/rsuite.min.css';

class MonacoEditor extends Component {
  render() {
    return (
      <div
        style={{
          flex: 1,
          display: 'flex',
        }}
        id="shit"
      >
        <Editor
          height={'100%'}
          width={'100%'}
          theme={'dark'}
          language={'typescript'}
          loading={
            <div>
              <Loader size="md" />
            </div>
          }
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
