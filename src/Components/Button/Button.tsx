import './Button.scss';

type ButtonProps<T> = {
    onClick: (value: T) => void;
    value: T;
    children: React.ReactNode;
    size: String;
}


export function Button<T>({ onClick, value, children, size }: ButtonProps<T>) {
    const handleClick = () => {
      onClick(value);
    };
  
    return (
      <button className={`button button--${size}`} onClick={handleClick}>
        {children}
      </button>
    );
  }
  