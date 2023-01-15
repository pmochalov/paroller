import s from './Button.module.scss';

const Button = ({isChecked, ...props})=>{

    const setBtnClass = (isChecked) => {
        return (isChecked) ? `${s.button} ${s.button_checked}` : `${s.button}`;
    }

    return(
        <button type="button" className={setBtnClass(isChecked)} {...props}>{props.children}</button>
    )
}

export default Button;