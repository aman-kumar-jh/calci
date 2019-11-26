import { expression, clearAll, result, backspace } from "../store/result.js";
import React, { Component } from "react";
import { connect } from "react-redux";

class KeyPadComponent extends Component {
  render() {
    return (
      <div className="button">
        <button name="(" onClick={e => this.props.equation(e.target.name)}>
          (
        </button>
        <button name="CE" onClick={e => this.props.backspace(e.target.name)}>
          CE
        </button>
        <button name=")" onClick={e => this.props.equation(e.target.name)}>
          )
        </button>
        <button name="C" onClick={e => this.props.clearAll(e.target.name)}>
          C
        </button>
        <br />

        <button name="1" onClick={e => this.props.equation(e.target.name)}>
          1
        </button>
        <button name="2" onClick={e => this.props.equation(e.target.name)}>
          2
        </button>
        <button name="3" onClick={e => this.props.equation(e.target.name)}>
          3
        </button>
        <button name="+" onClick={e => this.props.equation(e.target.name)}>
          +
        </button>
        <br />

        <button name="4" onClick={e => this.props.equation(e.target.name)}>
          4
        </button>
        <button name="5" onClick={e => this.props.equation(e.target.name)}>
          5
        </button>
        <button name="6" onClick={e => this.props.equation(e.target.name)}>
          6
        </button>
        <button name="-" onClick={e => this.props.equation(e.target.name)}>
          -
        </button>
        <br />

        <button name="7" onClick={e => this.props.equation(e.target.name)}>
          7
        </button>
        <button name="8" onClick={e => this.props.equation(e.target.name)}>
          8
        </button>
        <button name="9" onClick={e => this.props.equation(e.target.name)}>
          9
        </button>
        <button name="*" onClick={e => this.props.equation(e.target.name)}>
          x
        </button>
        <br />

        <button name="." onClick={e => this.props.equation(e.target.name)}>
          .
        </button>
        <button name="0" onClick={e => this.props.equation(e.target.name)}>
          0
        </button>
        <button name="=" onClick={e => this.props.result(e.target.name)}>
          =
        </button>
        <button name="/" onClick={e => this.props.equation(e.target.name)}>
          /
        </button>
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expres: state.expres,
    result: state.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    equation: num => {
      dispatch(expression(num));
    },
    clearAll: num => {
      dispatch(clearAll(num));
    },
    result: () => {
      dispatch(result());
    },
    backspace: () => {
      dispatch(backspace());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyPadComponent);
