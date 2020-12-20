import React, {Component} from "react";
import PropTypes from "prop-types";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

export class CodeExample extends Component {
  componentDidMount() {
    hljs.registerLanguage("javascript", javascript);
    hljs.highlightBlock(this.element);
  }

  render() {
    return (
      <pre
        ref={ref => {
          this.element = ref;
        }}
      >
        <code>{this.props.children}</code>
      </pre>
    );
  }
}

CodeExample.propType = {
  children: PropTypes.string.isRequired
};

export default CodeExample;
