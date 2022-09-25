import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
    margin: 0;
    padding: 0;
    font-family: 'ubuntu condensed';
}
body{
    margin: 0;
    padding: 0;
    overflow-x :hidden;
    font-family: 'Cairo Play';
    color: #333
    
    
}
a{
    text-decoration: none;
    color:inherit;
}
@media (max-width:700px){
    /* h2{
        font-size: calc(0.8rem + 1vw);
    } */
}
`;
export default GlobalStyles;
