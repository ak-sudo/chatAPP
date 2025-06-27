import React from 'react';
const Button = ({btnName, isDisabled}) => {
  return (
        <button className='primary px-5 py-1 m-4 text-white sm:rounded-[2vw] md:rounded-full' type='submit' disabled={isDisabled}>{btnName}</button>
  );
};
export default Button;  