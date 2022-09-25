import React from "react";

const Ham = (props) => {
  return (
    <div className='demo' onClick={() => props.setOpen()}>
      <div className='menu-icon'>
        <input className='menu-icon__cheeckbox' type='checkbox' />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Ham;
