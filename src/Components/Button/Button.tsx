import './Button.scss';

type ButtonProps<T> = {
    onClick: (value: T) => void;
    value: T;
    children: React.ReactNode;
    size?: String;
    btnType?:String;
    type?: ButtonType;
}

type ButtonType = "submit" | "reset" | "button";


export function Button<T>({ onClick, value, children, size, btnType, type}: ButtonProps<T>) {
    const handleClick = () => {
      onClick(value);
    };
  
    return (
      <button className={`button button--${size} button--${btnType}`} type={type ? type : "button"} onClick={handleClick} >
        {children}
      </button>
    );
  }
  