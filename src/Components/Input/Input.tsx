import './Input.scss';

type InputProps<T> = {
    placeholder?: string;
    value?: string;
    type?: string;
    size: string;
    name?: string;
}

export function Input<T>({placeholder, value, type, size, name,}: InputProps<T>) {
    return  <input placeholder={placeholder} className={`input input--${size}`}  value={value} type={type} name={name}/>
}