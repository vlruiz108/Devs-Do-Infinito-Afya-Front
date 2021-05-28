import styled from 'styled-components';

export const HomeContent = styled.div`
  & #main{
    justify-content: center;
    background: rgb(58,217,223);
    background: linear-gradient(155deg, rgba(58,217,223,1) 0%, rgba(92,173,176,1) 100%);
    align-items: center;
    text-align: center;
    height: 100vh;
  }

  & .container{
    display: flex;
    justify-content: space-around;
    padding-top: 15px;
    width: 99%;
    height: 97vh;
    margin: 0 auto;
    
  }  

  & .primary-color{
    color: #EDF6FF;
    border-radius: 5px;
    padding: 65px;
    margin: 10px;
    background: rgb(58,217,223);
    background: linear-gradient(155deg, rgba(58,217,223,1) 0%, rgba(92,173,176,1) 100%);
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
  }

  @media(max-width: 960px){
    & #main{
      height: 185vh;
    }

    & .container{
    padding-top: 0;
    display: block;
    width: 100%;
    margin: 0 auto;
    
  }

    & #navbar{
      width: 100%;
      height: 80px;
      margin: 0;
      padding: 0;
      flex-direction: row;
      justify-content: space-between;
      background: none;
    }
  }
`