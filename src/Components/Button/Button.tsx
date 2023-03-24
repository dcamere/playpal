import './Button.scss';

type ButtonProps<T> = {
    onClick: (value: T) => void;
    value: T;
    children: React.ReactNode;
    size: String;
    btnType?:String;
    type?:String
}


export function Button<T>({ onClick, value, children, size, btnType, type}: ButtonProps<T>) {
    const handleClick = () => {
      onClick(value);
    };
  
    return (
      <button className={`button button--${size} button--${btnType}`} type={type} onClick={handleClick} >
        {children}
      </button>
    );
  }
  