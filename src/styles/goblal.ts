import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #FFFFFF;
        --borda: #F7DF94;
        --text: ##4F4F4F;
        --text-button: #F2F2F2;
        --carreira: #828282;
        --fundo-button: #333333;
    }

    // font-size: Padrão 16px

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    body {
        font-family: 'Raleway';
        font-weight: 500;
    }
`