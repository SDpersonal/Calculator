import React, { useEffect, useState } from 'react';
import '../style/Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
console.log(input);
  useEffect(() => {
    if (input === '') {
      setInput('0');
    }
  }, [input]);

  const handleClick = (e) => {
    const value = e.target.value;
    const filterInput = (input) => {
      return input.replace(/(^|[^\d.])0+(\d+)/g, '$1$2').replace(/÷/g, '/').replace(/×/g, '*');
    };

    switch (value) {
      case 'AC':
        setInput('0');
        break;
      case 'DEL':
        setInput((prevInput) => (prevInput.length > 0 ? prevInput.slice(0, -1) : '0'));
        break;
      case '=':
        try {
          const FilterValue = filterInput(input);
          setInput(eval(FilterValue).toString());
        } catch {
          setInput('Error');
        }
        break;
      default:
        if (input.length > 0) {
          setInput((prevInput) => (prevInput === '0' ? value : prevInput + value));
        } else {
          setInput(value);
        }
        break;
    }
  };

  return (
    <div>
      <div className="controls">
        <a href="https://github.com/SDpersonal/Analog_clock_react" target="blank">
          <img src="assets/img/Github.png" alt="icon" height="40px" />
          &nbsp;CoderXSubham
        </a>
        {/* <a href="" target="_blank"><img src="./assets//instagram.png" alt="icon" height="40px"/>&nbsp;/CoderXSubham</a>  */}
      </div>
      <div className='cal_body'>
        {}
        <input type='text' placeholder={input} readOnly/>

        <div>
          <button className="btn" onClick={handleClick} value='AC'>AC</button>
          <button className="btn" onClick={handleClick} value='DEL'>DEL</button>
          <button className="btn" onClick={handleClick} value='%'>%</button>
          <button className="btn" style={{ fontSize: '32px' }} onClick={handleClick} value='÷'>&#247;</button>
        </div>

        <div>
          <button className="btn" onClick={handleClick} value='7'>7</button>
          <button className="btn" onClick={handleClick} value='8'>8</button>
          <button className="btn" onClick={handleClick} value='9'>9</button>
          <button className="btn" style={{ fontSize: '32px' }} onClick={handleClick} value='&#215;'>&#215;</button>
        </div>

        <div>
          <button className="btn" onClick={handleClick} value='4'>4</button>
          <button className="btn" onClick={handleClick} value='5'>5</button>
          <button className="btn" onClick={handleClick} value='6'>6</button>
          <button className="btn" style={{ fontSize: '32px' }} onClick={handleClick} value='-'>&#8722;</button>
        </div>

        <div>
          <button className="btn" onClick={handleClick} value='1'>1</button>
          <button className="btn" onClick={handleClick} value='2'>2</button>
          <button className="btn" onClick={handleClick} value='3'>3</button>
          <button className="btn" style={{ fontSize: '32px' }} onClick={handleClick} value='+'>&#43;</button>
        </div>

        <div>
          <button className="btn" onClick={handleClick} value='00'>00</button>
          <button className="btn" onClick={handleClick} value='0'>0</button>
          <button className="btn" style={{ fontSize: '32px' }} onClick={handleClick} value='.'>&#8729;</button>
          <button className="btn" style={{ fontSize: '32px' }} onClick={handleClick} value='='>&#61;</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
