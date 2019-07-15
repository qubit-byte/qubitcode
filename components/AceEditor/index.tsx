import React, { Component } from 'react';
//@ts-ignore
import brace from 'brace';
import Ace from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/tomorrow_night';
import 'brace/snippets/typescript';
import 'brace/ext/language_tools';

class AceEditor extends Component {
  render() {
    return (
      <Ace
        width={'100%'}
        height="100%"
        mode="json"
        theme="tomorrow_night"
        name="UNIQUE_ID_OF_DIV"
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        enableSnippets={true}
        setOptions={{
          enableSnippets: true,
        }}
        editorProps={{ $blockScrolling: true }}
        onBeforeLoad={(editor: any) => {
          const snippet =
            '# AddNode\n\
snippet addn\n\
	{\n\
		"nodeName": "${1:node_name}",\n\
		"algorithmName": "${2:algo_name}",\n\
		"input": []\n\
	}\n\
';
          editor.define('ace/snippets/json', ['require', 'exports', 'module'], (_: any, t: any) => {
            // eslint-disable-next-line
            (t.snippetText = snippet), (t.scope = 'json');
          });
        }}
      />
    );
  }
}

export default AceEditor;
