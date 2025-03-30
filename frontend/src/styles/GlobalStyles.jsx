import {createGlobalStyle} from "styled-components"
import pointer from '../assets/pointer.png'
export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
        cursor: url(${pointer}) , auto;
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
    
    button{
        border: none;
    }
    button, a{
        cursor: url(${pointer}) , auto;
    }

    a{
        text-decoration: none;
    }
   

   
`