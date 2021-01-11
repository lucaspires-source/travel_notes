import styled from 'styled-components';


export const Container = styled.form `
display:flex;
background-color:var(--green);
height:247px;
align-items:center;
justify-content:space-around;
`

export const Button= styled.button `
width: 203px;
height: 49px;
background-color:var(--darkgreen);
border-radius:7px;
color:var(--white);
font-size:18px;
display: block;
border:2px solid var(--darkgreen);
cursor: pointer;
:hover{
    transition:.2s ease;
    background-color:var(--green);
}

`

export const SelectForm= styled.select `
display: block;
width: 303px;
height: 48px;
border-radius:7px;
background-color:var(--white);
color:var(--gray);
padding-right:16px;
::placeholder{
    font-size: 16px;
}
`

export const Label= styled.label `
color:var(--white);
font-size: 16px;
line-height: 19px;
margin-bottom:5px;
display: block;
`
export const Labels= styled.label `
color:transparent;
font-size: 16px;
line-height: 19px;
margin-bottom:5px;
display: block;
`

export const InputLocal= styled.input `
display: block;
width: 455px;
height: 48px;
border-radius:7px;
background-color:var(--white);
color:var(--gray);
padding:18px;
align-items:center;
::placeholder{
    font-size: 16px;
}
`

export const InputData= styled.input `
display: block;
width: 238px;
height: 48px;
border-radius:7px;
background-color:var(--white);
color:var(--gray);
padding:18px;
::placeholder{
    font-size: 16px;
}
`

