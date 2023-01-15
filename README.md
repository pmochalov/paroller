# Пароллер

Позволяет сгенерировать пароль по нескольким опциям:
- количество символов;
- прописные, строчные буквы;
- специальные символы.

[Демо](https://mchlv.ru/paroller)

![](images/intro.png)

Параметры конфигурации находятся в ```./src/config.js```:
- типы символов, минимальная/максимальная длина пароля, длина по-умолчанию:
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

    export const pwdLength = 8;
```
