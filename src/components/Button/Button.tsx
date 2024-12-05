import * as React from "react";
import s from "./Button.module.scss";

type ButtonProps = {
    isChecked?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ isChecked, children, ...props }) => {
    const setBtnClass = (isChecked: boolean) => {
        return isChecked ? `${s.button} ${s.button_checked}` : `${s.button}`;
    };

    const btnClass = isChecked !== undefined ? setBtnClass(isChecked) : "";

    return (
        <button type='button' className={btnClass} {...props}>
            {children}
        </button>
    );
};

export default Button;
