import React from 'react';

export default (props) => {
  const renderParam = (
    <div className='mainContents'>
      {props.children}
    </div>
  );

  return renderParam;
};
