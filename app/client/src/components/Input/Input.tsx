import React from 'react';
import "./input.css";

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string,
  type: string,
  value: string,
  placeholder: string,
  dataplaceholder: string,
  isValid: boolean,
}

const Input: React.FC<IProps> = (props: IProps) => {
  const { isValid, dataplaceholder, style, ...rest } = props;
  let className = isValid ? `focus-input focus-input-${props.name} valid` : `focus-input focus-input-${props.name} invalid`;
  return (
    <div className="wrap-input">
      <input className="input" {...rest} />
      <span className={className} ></span>
    </div>
  )
}

export default Input;