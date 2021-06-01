import styled from 'styled-components';

export const LoginContent = styled.div`
  height: 100vh;
  justify-content: center;
  background-color: #EDF6FF;
  align-items: center;
  text-align: center;

  & .container{
    padding-top: 150px;
    width: 50%;
    margin: 0 auto;
  }
  
  & .content{
    border-radius: 17px;
    background: rgba(0,0,0,0.3);
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
  }

  & .MuiTabs-flexContainer{
    color: #7C0000;
    background-color: #EDF6FF;
  }

  & .MuiBox-root{
    width: 400px;
    height: 450px;
    margin: 0 auto;    
  }

  & footer{
    margin-top: 100px;
  }

  @media(max-width: 1550px) and (min-width: 961px) {
    & .container{
    padding-top: 50px;
    width: 85%;
    margin: 0 auto;
    }
  }

  @media(max-width: 960px){
    & .container{
      padding-top: 0;
      width: 100%;
      margin: 0 auto;
    }

    & .iDYpI, .gKzJWm{
    margin-top: 40px;
  }

    & .content{
    background: none;
    box-shadow: none;
    display: block;
    padding: 0;
    margin: 0;
    }
  }
`