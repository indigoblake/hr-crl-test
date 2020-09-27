import React from 'react';

export const StatusIndicator = ({type}) => {
  let elementClass = '';
  let elementText = '';
  if (type === 'synced') {
    elementClass = 'tag is-success is-light';
    elementText = 'Synced';
  }
  else if (type === 'notSynced') {
    elementClass = 'tag is-danger is-light';
    elementText = 'Not synced';
  }

  return (
    <div>
      <span className={ elementClass }>{ elementText }</span>
    </div>
  );
}