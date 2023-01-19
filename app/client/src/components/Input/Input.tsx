import React from 'react';
import "./input.css";

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string,
  type: string,
  value: string,
  placeholder: string,
  dataplaceholder: string,
  className: string,
}

const Input: React.FC<IProps> = (props: IProps) => {
  const { className, dataplaceholder, style, ...rest } = props;
  return (
    <div className="wrap-input">
      <input className="input" {...rest} />
      <span className={className} data-placeholder={dataplaceholder} ></span>
    </div>
  )
}

export default Input;