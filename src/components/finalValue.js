import React, { Component } from "react";
import { connect } from "react-redux";
//import { result, expression } from "../store/result.js";

class ResultComponent extends Component {
  render() {
    const { expres, result } = this.props;
    //console.log(expres);
    console.log(result);
    return (
      <div className="result">
        <p>{expres}</p>
        <p>{result}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.result,
    expres: state.expres
  };
};

/*const mapDispatchToProps = dispatch => {
  return {
    equation: num => {
      dispatch(expression(num));
    },
    result: () => {
      dispatch(result());
    }
  };
};*/

export default connect(mapStateToProps)(ResultComponent);

//export default ResultComponent
