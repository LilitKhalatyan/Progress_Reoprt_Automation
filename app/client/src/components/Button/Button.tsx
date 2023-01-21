import React from 'react';
import "./button.css";

interface IProps {
  isDisabled: boolean,
  value: string,
  onClick: () => void
}

export default function Button(props: IProps) {
  const { isDisabled, value, onClick } = props;
  const className = isDisabled ? 'button' : 'button disabled-btn';

  return (
    <button className={className} onClick={(e) => {
      e.preventDefault();
      onClick();
    }}>{value}</button>
  )
}