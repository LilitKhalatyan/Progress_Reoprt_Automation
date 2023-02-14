import React from "react";
import './button.scss';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  // title?: string;
  src?: string;
  // className?: string;
  onClick?: () => void;
}

const Button: React.FC<IProps> = (props) => {
  const { className, value, title, src, onClick } = props;

  if (src) {
    return (
      <button
        className={className + ' btn'}
        title={title}
        onClick={onClick}
      >
        <img src={src} alt="" />
      </button>
    );
  } else {
    return (
      <button
      type="submit"
        className={className + ' btn'}
        onClick={onClick}
      >
        {value}
      </button>
    );
  }
};

export default Button;
