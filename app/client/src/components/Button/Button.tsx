import React from 'react';

interface IProps {
  isBtnDisabled: boolean;
  value: string;
  onClick?: () => void;
}

 const Button: React.FC<IProps> = (props) => {
  const { isBtnDisabled, value, onClick } = props;
  const className = isBtnDisabled ? 'button disabled-btn' : 'button';

  return (
    <button className={className} onClick={(e) => {
      e.preventDefault();
    }} disabled={isBtnDisabled}>{value}</button>
  )
}

export default Button;