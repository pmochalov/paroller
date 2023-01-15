import s from './PasswordField.module.scss';

const PasswordField = ({value}) => {
    return (
        <span className={s.password}>{value}</span>
    );
};

export default PasswordField;
