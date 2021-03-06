import { useState } from 'react';
import calculate from '../logic/calculate.js';
import './calculator-obj.css';
import buttons from './btns.js';

const Calculator = () => {
  const [prevState, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const display = () => calculate(prevState, e.target.innerHTML);
    setState(display);
  };

  let result;
  const { total, next, operation } = prevState;
  if (next === null && operation === null && total === null) {
    result = 0;
  }

  if (next !== null && total === null) {
    result = next;
  }

  if (next === null && operation !== null && total !== null) {
    result = total + operation;
  }

  if (next !== null && operation !== null && total !== null) {
    result = total + operation + next;
  }

  if (next === null && operation === null && total !== null) {
    result = total;
  }

  return (
    <>
      <div className="calculatorCont">
        <h1 className="TitleCal">Let us do some math!</h1>
        <div className="Calculator">
          <span className="Display">{result}</span>
          <section className="Keypad">
            {buttons.map((button) => (
              <button
                type="button"
                onClick={handleClick}
                key={button.id}
                className={`Button ${button.name} ${button.color}`}
                value={button.symbol}
              >
                {button.symbol}
              </button>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Calculator;
