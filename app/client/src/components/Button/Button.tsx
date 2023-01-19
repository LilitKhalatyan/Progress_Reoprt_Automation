import React from 'react';
import "./button.css";

interface IProps {
  className: string,
  value: string,
  onClick: () => void
}

export default function Button(props: IProps) {
  const { value, onClick } = props;
  const className = 'button disabled-btn'
  return (
    <button className={className} onClick={(e) => {
      e.preventDefault();
      onClick();
    }}>{value}</button>
  )
}