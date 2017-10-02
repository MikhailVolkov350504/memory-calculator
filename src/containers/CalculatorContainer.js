import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onOperandChange, onButtonClick } from '../actions';

import OperandInput from '../components/OperandInput';
import Button from '../components/OperationButton';
import Result from '../components/Result';
import SavedResults from '../components/SavedResults';

import '../styles/App.css';
import '../styles/Button.css';
import '../styles/Input.css';
import '../styles/Table.css';

class Calculator extends Component {
  render() {
    const { calculator, actions } = this.props;
    return (
        <div className="app">
            <div className="value-container">
                <OperandInput onChange={(e) => actions.onOperandChange(e.target.value, 1)} />
                <OperandInput onChange={(e) => actions.onOperandChange(e.target.value, 2)} />
            </div>
            <div className="buttons-container">
                <Button type="plus" onClick={() => actions.onButtonClick('plus')} />
                <Button type="minus" onClick={() => actions.onButtonClick('minus')} />
                <Button type="multiply" onClick={() => actions.onButtonClick('multiply')} />
                <Button type="divide" onClick={() => actions.onButtonClick('divide')} />
                <Button type="remainder" onClick={() => actions.onButtonClick('remainder')} />
                <Button type="highest-prime" onClick={() => actions.onButtonClick('highest-prime')} />
            </div>
            <Result result={ calculator.result } />
            <SavedResults className="saved-result" savedResults={ calculator.savedInfo } />
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
            onOperandChange: (value, id) => {
                dispatch(onOperandChange(value, id));
            },
            onButtonClick: (type) => {
                dispatch(onButtonClick(type));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);