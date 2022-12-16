import styled from "styled-components";

export const Content = styled.div`
    background-color: white;
    height: 100%;
    width: 35rem;
    min-height: 3rem;
    padding: 1.2rem 3.5rem;
   

`
export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s linear;
    



`
export const MainText = styled.h1`
   
    font-family: sans-serif;
    text-transform: uppercase;
    text-decoration-line: underline;




`
export const ContainerImg = styled.div`
    transition: all 0.5s linear;
    margin-bottom: 1.5rem;

`
export const Form = styled.form`
   margin-top: 1.2rem;
   text-align: center;


`
export const Input = styled.input`


    &[type='text']{
        border-radius: 8px;
        padding: 0.8rem 2rem;
        font-weight: bold;
    }
    &[type='text']::placeholder {
        color: white;
    }
    &[type='submit']{
        color:#fff;
        border-radius: 8px;
        padding: 8px 18px;
        background-color: #120329;
        transition: all 0.2s linear;
    }
    &[type='button']:hover{
        
        transform: scale(1.05);
    }
    
    
    `
export const ContainerInput = styled.div`
    
    
`

export const MsgError = styled.p`
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: #ff0000;
`