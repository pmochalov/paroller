import s from './ButtonSubmit.module.scss';

const ButtonSubmit = ({...props})=>{

    return(
        <button type="button" className={`${s.button} ${s.button_submit}`} {...props}>{props.children}</button>
    )
}

export default ButtonSubmit;