import s from "./App.module.scss";
import { useState } from "react";
import {
    strings,
    limit,
    optionsDefault,
    pwdLength,
    OptionsType,
} from "./config";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PasswordField from "./components/PasswordField/PasswordField";
import ButtonSubmit from "./components/ButtonSubmit/ButtonSubmit";

function App() {
    const [password, setPassword] = useState<string>("");
    const [length, setLength] = useState<number>(pwdLength);

    const [options, setOptions] = useState<OptionsType>(() => {
        try {
            const storedOptions = localStorage.getItem("options");
            return storedOptions ? JSON.parse(storedOptions) : optionsDefault;
        } catch {
            return optionsDefault;
        }
    });

    const checkLimitValue = (value: number) => {
        return value < limit.min
            ? limit.min
            : value > limit.max
            ? limit.max
            : value;
    };

    const setLengthHandler = (value: number) => {
        setLength(checkLimitValue(value));
    };

    const handleBtnOptions = (value: Partial<OptionsType>) => {
        const newOptions: OptionsType = { ...options, ...value };

        if (!validOptions(newOptions)) return;

        setOptions(newOptions);

        localStorage.setItem("options", JSON.stringify(newOptions));
    };

    const validOptions = (newOptions: OptionsType) => {
        for (let key in newOptions) {
            if (key in newOptions) {
                return true;
            }
        }

        return false;
    };

    const passwordGenerator = () => {
        let stringSrc = "";
        let pwd = "";

        for (let key in options) {
            if (key in options) {
                stringSrc += strings[key];
            }
        }

        for (let i = 0; i < length; i++) {
            pwd += stringSrc[getRandomInt(0, stringSrc.length - 1)];
        }

        setPassword(pwd);
    };

    const getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min) + min);
    };

    return (
        <div className={s.wrapper}>
            <Header />

            <div className={s.main}>
                <div className={s.intro}>
                    <span>Укажите длину пароля</span>{" "}
                    <span>и состав символов:</span>
                </div>

                <div className={s.form}>
                    <div className={`${s.form__row} ${s.form__row_selector}`}>
                        <Button
                            disabled={length === limit.min}
                            onClick={() => setLengthHandler(length - 1)}
                        >
                            &minus;
                        </Button>
                        <span className={s.form__passwordLength}>{length}</span>
                        <Button
                            disabled={length === limit.max}
                            onClick={() => setLengthHandler(length + 1)}
                        >
                            +
                        </Button>
                    </div>

                    <div className={`${s.form__row} ${s.form__row_options}`}>
                        <Button
                            isChecked={options.uppercase}
                            onClick={() =>
                                handleBtnOptions({
                                    uppercase: !options.uppercase,
                                })
                            }
                        >
                            ABC
                        </Button>
                        <Button
                            isChecked={options.lowercase}
                            onClick={() =>
                                handleBtnOptions({
                                    lowercase: !options.lowercase,
                                })
                            }
                        >
                            abc
                        </Button>
                        <Button
                            isChecked={options.numbers}
                            onClick={() =>
                                handleBtnOptions({ numbers: !options.numbers })
                            }
                        >
                            123
                        </Button>
                        <Button
                            isChecked={options.symbols}
                            onClick={() =>
                                handleBtnOptions({ symbols: !options.symbols })
                            }
                        >
                            %?№
                        </Button>
                    </div>

                    <div className={`${s.form__row}`}>
                        <PasswordField value={password} />
                    </div>

                    <div className={s.form__row}>
                        <ButtonSubmit
                            onClick={() => {
                                passwordGenerator();
                            }}
                        >
                            Создать
                        </ButtonSubmit>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
