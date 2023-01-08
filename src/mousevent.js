import React from 'react';
import ReactDOM from 'react-dom/client';

function Mousevent() {
    function handleClick() {
        console.log("i was clicked!")
      }
      function handleOnMouseOver() {
        console.log("MouseOver")
      }
  return (
    
        <div classname='flex justify-centre items-centre'>
      <img src='https://imgs.search.brave.com/SwJMkUBRdgbrqyxmZ8UMGeXSm4U3Wb9gjfi33It1zR8/rs:fit:1200:873:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly04TzBaa0FnYjZC/by9VbGZfODB0VU42/SS9BQUFBQUFBQUgz/NC9JMUwybEtqekU5/TS9zMTYwMC9CZWF1/dGlmdWwtU2NlbmVy/eS1XYWxscGFwZXJz/LmpwZw' className=' rounded-lg max-w-sm' onMouseOver={handleOnMouseOver} />
      <button className='border border-gray-900 p-4 mt-4' onClick={handleClick}>click me</button>
    </div>
    
  )
}

export default Mousevent