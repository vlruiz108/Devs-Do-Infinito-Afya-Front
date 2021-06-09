import styled from 'styled-components';

export const ConfigContent = styled.div`
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

  & .content{
    border-radius: 5px;
    width: 80%;
    background-color: #EDF6FF;
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
    margin:20px 40px;

    & form{
      margin: 60px auto;
      padding: 40px;
      width: 75%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      background-color: #fff;
      border-radius: 5px;

      & section{
        margin: 0 auto;
        width: 60%;
        display: grid;
        grid-gap: 20px;
        margin: 30px 0;

        & button{
          margin: 0 auto;
          width: 60%;
        }
      }
    }
    
  }

  @media(max-width: 960px){
    & #main{
      height: 100vh;
    }

    & .container{
    padding-top: 0;
    display: block;
    width: 100%;
    margin: 0 auto;
    
    }

    & .content{
      width: 100%;
      height: 80vh;
      margin: 0;
    }
  }
`