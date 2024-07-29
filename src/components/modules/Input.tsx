import React, { useState } from 'react';

const Input = ({
  value = 0,
  handleChange,
  disabled = false,
  id = 'seconds',
}) => {
  return (
    <input
      id={id}
      type="number"
      placeholder="0"
      className="w-10 px-2 py-1 bg-transparent outline-none text-right border rounded-lg disabled:text-gray-500 disabled:border-gray-500"
      value={value}
      disabled={disabled}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      onFocus={(e) => e.target.select()}
    />
  );
};

export default Input;
