import React, {Component} from "react";
import PropTypes from "prop-types";
import CodeExample from "./CodeExample";

export class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {showCode: false};
  }

  toggleCode = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {showCode: !prevState.showCode};
    });
  };

  render() {
    const {showCode} = this.state;
    const {code, description, name} = this.props.example;

    //Must use CommonJS require to dynamically require because ES modules must be statically analyzable.
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;

    return (
      <div className="example">
        {description && <h4>{description}</h4>}
        <ExampleComponent />
        <p>
          <a href="#" onClick={this.toggleCode}>
            {showCode ? "Hide" : "Show"} code
          </a>
        </p>
        {showCode && <CodeExample>{code}</CodeExample>}
      </div>
    );
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
};

export default Example;
