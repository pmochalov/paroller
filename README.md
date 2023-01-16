# Пароллер

Позволяет сгенерировать пароль по нескольким опциям:
- количество символов;
- прописные, строчные буквы;
- специальные символы.

[Демо](https://mchlv.ru/paroller)

![](images/intro.png)

Параметры конфигурации находятся в ```./src/config.js```:
- типы символов, минимальная/максимальная длина, опции, длина пароля по-умолчанию:
```javascript
    export const strings = {
        uppercase: "ABCDEFGHIGKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "1234567890",
        symbols: `!"#$%&'()*+,-./:;<=>?@[\\]^_{|}`
    }

    export const limit = {
        min: 2, 
        max: 10
    }

    export const optionsDefault = {
        uppercase: false,
        lowercase: true,
        numbers: true,
        symbols: false
    }    

    export const pwdLength = 8;
```
