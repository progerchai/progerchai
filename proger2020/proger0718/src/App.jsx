import React, { Component } from "react";
import ReactMarkdown from "react-markdown/with-html";
import MarkndownFile from "./README.md";
import CodeBlock from "./codeBlock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }
  componentWillMount() {
    fetch(MarkndownFile)
      .then((res) => res.text())
      .then((text) => this.setState({ markdown: text }));
  }
  render() {
    let { markdown } = this.state;
    return (
      <div>
        <ReactMarkdown
          className="markdown-body"
          source={markdown}
          escapeHtml={false}
          renderers={{
            code: CodeBlock,
            // heading: HeadingBlock,
          }}
        />
      </div>
    );
  }
}

export default App;
