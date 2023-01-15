import s from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__copyright}>
                Сделал <a href="https://mchlv.ru/" title="Павел Мочалов">Павел Мочалов</a>
            </div>
        </footer>
    );
};

export default Footer;
