import s from "./ButtonSubmit.module.scss";

type ButtonSubmitType = {
    children?: React.ReactNode;
};

const ButtonSubmit: React.FC<ButtonSubmitType> = (props) => {
    return (
        <button
            type='button'
            className={`${s.button} ${s.button_submit}`}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default ButtonSubmit;
