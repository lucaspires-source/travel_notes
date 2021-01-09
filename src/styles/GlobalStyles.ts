import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html{
    min-height:100%;
    background:var(--white);
}
*, button, input {
    border:0;
    background:none;
    font-family: Roboto,sans-serif
}
ul{ 
    list-style:none;
}
:root{
    --white: #fff;
    --black:#000;
    --green:#4f9419;
    --darkgreen:#006c18;
    --grey:#868686;
}
`;