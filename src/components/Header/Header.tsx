import s from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <div className={s.header__logo}>Пароллер</div>
            <div className={s.header__delimeter}></div>
            <div className={s.header__desc}>генератор паролей</div>
        </header>
    );
};

export default Header;
