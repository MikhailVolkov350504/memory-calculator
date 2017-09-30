import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onFirstOperandChange, onSecondOperandChange, onPlusClick, onMinusClick } from '../actions';

import OperandInput from '../components/OperandInput';
import MinusButton from '../components/MinusButton';
import PlusButton from '../components/PlusButton';
import Result from '../components/Result';
import SavedResults from '../components/SavedResults';

class Calculator extends Component {
  render() {
    const { calculator, actions } = this.props;
    return (
        <div className="app">
            <div className="value-container">
                <OperandInput onChange={(e) => actions.onFirstOperandChange(e.target.value)} />
                <OperandInput onChange={(e) => actions.onSecondOperandChange(e.target.value)} />
            </div>
            <PlusButton onClick={() => actions.onPlusClick()} />
            <MinusButton onClick={() => actions.onMinusClick()} />
            <Result result={ calculator.result } />
            <SavedResults savedResults={ calculator.savedInfo } />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        calculator: state.calculator
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            onFirstOperandChange: (value) => {
                dispatch(onFirstOperandChange(value));
            },
            onSecondOperandChange: (value) => {
                dispatch(onSecondOperandChange(value));
            },
            onPlusClick: () => {
                dispatch(onPlusClick());
            },
            onMinusClick: (e) => {
                dispatch(onMinusClick());
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);