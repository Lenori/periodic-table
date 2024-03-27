import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *:focus {
        outline: 0;
    }
    
    :root{
        --dark-grey: #333333;
        --light-grey: #999999;
        --white: #FFFFFF;
        --background-blue: #282734;

        --nonmetal: #2762bc;
        --noble-gas: #9f27c4;
        --alkali-metal: #267f94;
        --alkaline-earth-metal:#d3294d;
        --metalloid: #c98206;
        --metal: #1e836e;
        --transition-metal: #26bb29;
        --lanthanoid: #c8af1a;
        --actinoid: #ac5a31;
        --unknown: #404142;
    }

    html {
        font-size: 10px;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        background-color: var(--background-blue);
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
