import './Input.scss';

type InputProps<T> = {
    placeholder?: string;
    value?: string;
    type: string;
    size: string;

}


export function Input<T>({placeholder, value, type, size}: InputProps<T>) {
    return  <input placeholder={placeholder} className={`input input--${size}`}  value={value} type={type}/>
    
      
    
  }