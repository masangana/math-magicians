import React, {useRef, useEffect} from 'react';
import './calculator.css';
import { btns, BTN_ACTIONS } from './btnConfig';
import calculate from '../../logic/calculate';

const Calculator = () => {

    const btnsRef = useRef(null)
    const expRef = useRef(null)

    useEffect(()=>{
        const btns = Array.from(btnsRef.current.querySelectorAll('button'));

        btns.forEach(e => e.style.height = e.offsetwidth + 'px')
    },[])

    const btnClick = (item) => {
        console.log(item)
    }

    return (
      <div className='calculator'>
        <div className="calculator__result">
            <div ref={expRef} className="calculator__result__exp">
                999999
            </div>
            <div className="calculator__result__exp"></div>
        </div>
        <div ref={btnsRef} className="calculator__btns">
            {
                btns.map((item, index)=>(
                    <button 
                        key={index} 
                        className={item.class}
                        onClick={() => btnClick(item)}
                    >
                        {item.display}
                    </button>
                ))
            }
        </div>
      </div>
    );
  }
  
  export default Calculator;