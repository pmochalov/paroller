type StringType = {
    uppercase: string;
    lowercase: string;
    numbers: string;
    symbols: string;
}

type LimitType = {
    min: number,
    max: number
}

export type OptionsType = {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
}

export const strings: Record<string, string> = {
    uppercase: "ABCDEFGHIGKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    symbols: `!"#$%&'()*+,-./:;<=>?@[\\]^_{|}`
}

export const limit: LimitType = {
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