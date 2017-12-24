import React from 'react';

const PageHeader = (props) => {
  return (
    <h2 className="page-header">{props.text}</h2>
  );
}

export default PageHeader;