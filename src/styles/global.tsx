import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *:focus {
        outline: 0;
    }
    
    :root{
        --dark-grey: #333333;
        --light-grey: #999999;
        --white: #FFFFFF;

        --nonmetal: #2a4165;
        --noble-gas: #623842;
        --alkali-metal: #244d57;
        --alkaline-earth-metal:#622e39;
        --metalloid: #523e1b;
        --metal: #2f4d47;
        --transition-metal: #433c65;
        --lanthanoid: #004a77;
        --actinoid: #613b28;
        --unknown: #46474c;
    }

    html {
        font-size: 10px;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        background-color: #F3F5F8;
        border: none;
        background-repeat: no-repeat;

        color: var(--dark-grey);
    }

    a {        
        text-decoration: none;
    }

    button {
        cursor: pointer;        
        transition: filter 0.3s;        
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

        &:hover {
            filter: brightness(90%);
        }

        :disabled {
            opacity: 0.4;
        }
    }
`;
