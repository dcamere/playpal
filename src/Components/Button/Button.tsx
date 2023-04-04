import './Button.scss';

type ButtonProps<T> = {
    onClick: (value: T) => void;
    value: T;
    children: React.ReactNode;
    size?: String;
    btnType?:String;
    type?: ButtonType;
    href?: string;
}

type ButtonType = "submit" | "reset" | "button";


export function Button<T>({ onClick, value, children, size, btnType, type, href}: ButtonProps<T>) {
    const handleClick = () => {
      onClick(value);
    };
  
    return (
      <button href={href} className={`button button--${size} button--${btnType}`} type={type ? type : "button"} onClick={handleClick} >
        {children}
      </button>
    );
  }
  