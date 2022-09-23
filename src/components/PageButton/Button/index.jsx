import React from 'react';

const Button = ({ page, pageLabel, handleChangeCurrentPage }) => {
  return (
    <button
      onClick={() => handleChangeCurrentPage(pageLabel)}
      style={{ backgroundColor: page === pageLabel ? 'red' : '' }}
    >
      {pageLabel}
    </button>
  );
};

export default Button;
