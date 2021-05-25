import styled from 'styled-components';

export const LoginContent = styled.div`
  height: 100vh;
  justify-content: center;
  background-color: #EDF6FF;
  align-items: center;

  & .container{
    padding-top: 150px;
    width: 60%;
    margin: 0 auto;
  }
  
  & .col{
    display: flex;
    border-radius: 17px;
    padding: 65px;
    background: rgb(152,0,0);
    background: linear-gradient(155deg, rgba(152,0,0,1) 0%, rgba(124,0,0,1) 100%);
    justify-content: space-between;
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
  }

  @media(max-width: 1550px) and (min-width: 961px) {
    & .container{
    padding-top: 150px;
    width: 85%;
    margin: 0 auto;
    }
  }

  @media(max-width: 960px){
    height: 1080px;
    
    & .container{
      padding-top: 40px;
      width: 100%;
      margin: 0 auto;
    }

    & .col{
    background: none;
    box-shadow: none;
    display: block;
    padding: 0;
    margin: 0;
    }
  }
`