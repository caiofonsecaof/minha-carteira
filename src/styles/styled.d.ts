// a extensão '.d.ts' serve para sobrescrever tipos de arquivos

import 'styled-components';//importamos assim pois vamos criar uma tipagem especial, o styled component permite isso

declare module 'styled-components' {

    export interface DefaultTheme { //definimos a interface dando a tipagem de cada elemento representado no json da pasta themes
        title: string;

        colors: {
            primary: string;
            secondary: string;
            tertiary: string;

            white: string;
            black: string;
            gray: string;

            success: string;
            info: string;
            warning: string;
        },
    };
}

//depois de definida a tipagem vamos ao arquivo 'App'