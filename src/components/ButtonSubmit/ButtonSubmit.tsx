import s from "./ButtonSubmit.module.scss";

type ButtonSubmitType = {
    children?: React.ReactNode;
    onClick?: () => void;
};

const ButtonSubmit: React.FC<ButtonSubmitType> = ({ children, onClick }) => {
    return (
        <button
            type='button'
            className={`${s.button} ${s.button_submit}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ButtonSubmit;
