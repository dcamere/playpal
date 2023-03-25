import "./TextArea.scss"

type TextAreaProps<T> = {
    placeholder?: string;
    value?: string;
    name?: string;
    id?: string;
    rows?: number;
    cols?: number;
}

export function TextArea<T>({value, name, id, rows, cols, placeholder}: TextAreaProps<T>) {
    return  <textarea className={`textArea`} value={value} name={name} placeholder={placeholder} id={id} rows={rows} cols={cols}></textarea>
}