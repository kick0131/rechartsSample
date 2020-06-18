import React from 'react';

export default (props) => {
  const renderParam = (
    <main className='mainContents'>
      {props.children}
    </main>
  );

  return renderParam;
};
