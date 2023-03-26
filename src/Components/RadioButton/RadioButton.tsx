import React from 'react';
import './RadioButton.scss';

type RadioButtonProps = {
  id: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  value,
  checked,
  onChange,
}) => {
  return (
    <div className="radio-button">
      <input
        type="radio"
        id={id}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="radio-input"
      />
      <label htmlFor={id} className="radio-label">{label}</label>
    </div>
  );
};

export default RadioButton;
