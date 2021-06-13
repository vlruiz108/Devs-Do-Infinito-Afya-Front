import styled from 'styled-components';

export const FormSignUpContent = styled.div`
  width: 400px;
  height: 450px;
  min-width: 350px;
  background: rgb(58,217,223);
  background: linear-gradient(155deg, rgba(58,217,223,1) 0%, rgba(92,173,176,1) 100%);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
  margin: 0 auto;

  .icon{
    margin: 0 auto;
    background: #7C0000;
    width: 40px;
    border-radius: 40px;
    padding-top: 8px;
    height: 32px;
    color: #EDF6FF;
  }

  & input, h2, button{
    margin: 7px;
  }

  & h2{
    color: #EDF6FF;
  }

  & form{
    display: grid;
    width: 70%;
    padding: 20px;
  }

  .MuiFormControl-root{
    margin-bottom: 13px;
  }

  & input {
    background: #FFF;
    border: none;
    border-radius: 3px;
    padding-left: 10px;
    height: 25px;
    width: 250px;
  }

  & button{
    text-transform: none;
    background: #EDF6FF;
    color: black;

    :hover{
      color: #EDF6FF;
      background-color: #7C0000;
    }
  }

  @media(max-width: 960px){
    margin: 10px auto;
    width: 100%;

    & form{
      width: 100%;
      & input{
        width: 100%;
      }
    }
  }
`