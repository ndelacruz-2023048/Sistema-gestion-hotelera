import {createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        color: #fff;
    }

    body::-webkit-scrollbar{
        width: 12px;
        background: rgba(24,24,24,0.2);
    }

    body::-webkit-scrollbar-thumb{
        background:rgba(148,148,148,0.9);
        border-radius: 10px;
        filter:blur(10px);
    }

   

   
`