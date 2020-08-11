import React, { HTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;