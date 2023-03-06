import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;

  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add 1 and 4 to get 5', () => {
    const button4 = container.getByTestId('number4')
    const operatorAdd = container.getByTestId('operator-add')
    const button1 = container.getByTestId('number1')
    const operatorEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')

    fireEvent.click(button4)
    fireEvent.click(operatorAdd)
    fireEvent.click(button1)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should be able to subtract 4 from 7 and get 3', () => {
    const button4 = container.getByTestId('number4')
    const button7 = container.getByTestId('number7')
    const operatorSubtract = container.getByTestId('operator-subtract')
    const operatorEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')

    fireEvent.click(button7)
    fireEvent.click(operatorSubtract)
    fireEvent.click(button4)
    fireEvent.click(operatorEquals)

    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3')
    const operatorMultiply = container.getByTestId('operator-multiply')
    const button5 = container.getByTestId('number5')
    const operatorEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')

    fireEvent.click(button3)
    fireEvent.click(operatorMultiply)
    fireEvent.click(button5)
    fireEvent.click(operatorEquals)

    expect(runningTotal.textContent).toEqual('15')
  })

  // calculator.divide() - divide 21 by 7 and get 3
  it('should be able to divide', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const operatorDivide = container.getByTestId('operator-divide')
    const button7 = container.getByTestId('number7')
    const operatorEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(operatorDivide)
    fireEvent.click(button7)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('3')

  })
// calculator.numberClick() - concatenate multiple number button clicks
it('should concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const button3 = container.getByTestId('number3')
    const runningTotal = container.getByTestId('running-total')

    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(button3)
    expect(runningTotal.textContent).toEqual('213')
})

// calculator.operatorClick() - chain multiple operations together
it('should be able to chain multiple operations together', () => {
  const button4 = container.getByTestId('number4')
  const operatorMultiply = container.getByTestId('operator-multiply')
  const button5 = container.getByTestId('number5')
  const operatorDivide = container.getByTestId('operator-divide')
  const button2 = container.getByTestId('number2')
  const runningTotal = container.getByTestId('running-total')
  const operatorEquals = container.getByTestId('operator-equals')

  fireEvent.click(button4)
  fireEvent.click(operatorMultiply)
  fireEvent.click(button5)
  fireEvent.click(operatorDivide)
  fireEvent.click(button2)
  fireEvent.click(operatorEquals)


  expect(runningTotal.textContent).toEqual('10')
})

// calculator.clearClick() - clear the running total without affecting the calculation
it('should clear the running total without affecting the calculation', () => {
  const button4 = container.getByTestId('number4')
  const button5 = container.getByTestId('number5')
  const clear = container.getByTestId('clear')
  const button2 = container.getByTestId('number2')
  const operatorAdd = container.getByTestId('operator-add')
  const button3 = container.getByTestId('number3')
  const operatorEquals = container.getByTestId('operator-equals')
  const runningTotal = container.getByTestId('running-total')

  fireEvent.click(button4)
  fireEvent.click(button5)
  fireEvent.click(clear)
  fireEvent.click(button2)
  fireEvent.click(operatorAdd)
  fireEvent.click(button3)
  fireEvent.click(operatorEquals)
  expect(runningTotal.textContent).toEqual('5')
})


})
