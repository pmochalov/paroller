import * as React from "react";
import s from "./Button.module.scss";

type ButtonProps = {
    isChecked: boolean;
    children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = (props) => {
    const setBtnClass = (isChecked: boolean) => {
        return isChecked ? `${s.button} ${s.button_checked}` : `${s.button}`;
    };

    return (
        <button
            type='button'
            className={setBtnClass(props.isChecked)}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default Button;
