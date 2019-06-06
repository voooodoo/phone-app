import React from 'react';
import './list.css';

const List = props => {
  const { children, onClick } = props;

  const content = children({
    onClick,
  });

  return <ul className="list-group list">{content}</ul>;
};

export default List;
