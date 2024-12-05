import s from "./PasswordField.module.scss";

type PasswordProps = {
    value: string;
};

const PasswordField: React.FC<PasswordProps> = ({ value }) => {
    return <span className={s.password}>{value}</span>;
};

export default PasswordField;
