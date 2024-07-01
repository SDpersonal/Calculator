import React, { useEffect, useState } from 'react';
import '../style/Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
// console.log(input);

const [err,setErr] = useState(true)

  const handleClick = (e) => {
    const value = e.target ? e.target.value : e;
    const filterInput = (input) => {
      return input.replace(/(^|[^\d.])0+(\d+)/g, '$1$2').replace(/÷/g, '/').replace(/×/g, '*');
    };

    switch (value) {
      case 'AC':
        setInput('0');

        if (input === 'Error' ) {
          setErr(true)
        }
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


//keyboard Function
  
  const handleKeyPress = (event) => {
    const keyMap = {
      '0': '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '.': '.',
      '/': '÷',
      '*': '×',
      '-': '-',
      '+': '+',
      'Enter': '=',
      'Backspace': 'DEL',
      'Escape': 'AC',
      '%': '%'
    };

    if (input === 'Error') {
      const value = keyMap[event.key];
      // console.log(value);
      if (value === 'AC') {
        handleClick(value);
      }
    }else{
      const value = keyMap[event.key];
      // console.log(value);
      if (value) {
        handleClick(value);
      }
    }
   
  };

    useEffect(() => {
    if (input === '') {
      setInput('0');
    }

    if (input === 'Error' ) {
      setErr(false)
    }

    const inputElement = document.querySelector('input');

    if (input.length > 12) {
      inputElement.classList.add('long-input');
    }else{
      inputElement.classList.remove('long-input');
    }

    if (input.length > 15) {
      inputElement.classList.add('long-inputs');
    }else{
      inputElement.classList.remove('long-inputs');
    }

    if (input.length > 22) {
      setInput('Error')
    }
   
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  return (
    <div>
      <div className="controls">
        <a href="https://github.com/SDpersonal/Analog_clock_react" target="blank">
          <img src="assets/img/Github.png" alt="icon" height="40px" />
          &nbsp;CoderXSubham
        </a>
        {/* <a href="" target="_blank"><img src="./assets//instagram.png" alt="icon" height="40px"/>&nbsp;/CoderXSubham</a>  */}
      </div>
      <h5 className='rem'>You can access it from keyboard</h5>
      <div className='cal_body'>
       
        <input type='text' placeholder={input} readOnly/>
        <p className='text'>22-Digit Calculator</p>
        <div>
       
          <button className="btn" onClick={handleClick} value='AC'>AC</button>
          <button className="btn" onClick={handleClick} value='DEL' disabled={!err}>DEL</button>
          <button className="btn" onClick={handleClick} value='%' disabled={!err}>%</button>
          <button className="btn" onClick={handleClick} value='÷' disabled={!err}>&#247;</button>
        </div>

        <div>
          <button className="btn" onClick={handleClick} value='7' disabled={!err}>7</button>
          <button className="btn" onClick={handleClick} value='8' disabled={!err}>8</button>
          <button className="btn" onClick={handleClick} value='9' disabled={!err}>9</button>
          <button className="btn" onClick={handleClick} value='&#215;' disabled={!err}>&#215;</button>
        </div>

        <div>
          <button className="btn" onClick={handleClick} value='4' disabled={!err}>4</button>
          <button className="btn" onClick={handleClick} value='5' disabled={!err}>5</button>
          <button className="btn" onClick={handleClick} value='6' disabled={!err}>6</button>
          <button className="btn" onClick={handleClick} value='-' disabled={!err}>&#8722;</button>
        </div>

        <div>
          <button className="btn" onClick={handleClick} value='1' disabled={!err}>1</button>
          <button className="btn" onClick={handleClick} value='2' disabled={!err}>2</button>
          <button className="btn" onClick={handleClick} value='3' disabled={!err}>3</button>
          <button className="btn" onClick={handleClick} value='+' disabled={!err}>&#43;</button>
        </div>

        <div>
          <button className="btn" onClick={handleClick} value='00' disabled={!err}>00</button>
          <button className="btn" onClick={handleClick} value='0' disabled={!err}>0</button>
          <button className="btn" onClick={handleClick} value='.' disabled={!err}>&#8729;</button>
          <button className="btn" onClick={handleClick} value='=' disabled={!err}>&#61;</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
