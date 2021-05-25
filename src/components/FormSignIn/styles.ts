import styled from 'styled-components';

export const FormSignInContent = styled.div`
  width: 400px;
  height: 450px;
  min-width: 350px;
  background: #5CADB0;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

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

  & input {
    border: none;
    border-radius: 3px;
    padding-left: 10px;
    height: 25px;
    width: 250px;
  }

  & .components{
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .blocked {
      height: 27px;
    }

    & button{
      height: 22px;
      width: 100px;
      background-color:  #EDF6FF;
      border: 1px solid black;
      border-radius: 3px;
        
      :hover{
        color: #EDF6FF;
        background-color: #7C0000;
        border: 1px solid #EDF6FF;
      }
  }

    & a{
    color:  #FFF;
    }
  }
`