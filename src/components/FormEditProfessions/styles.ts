import styled from 'styled-components';

export const FormEditProfessionContent = styled.div`
  margin: 0 auto ;
  width: 85%;
  min-height: 640px;
  height: 85%;
  border-radius: 5px;
  background-color: #EDF6FF;
  box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);

  & h2 {
  background-color: #7C0000;
  height: 50px;
  border-radius: 5px;
  color: white;
  padding: 30px 10px 10px 10px;
  }

  & form{
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;
  height: 100%;
  border-radius: 5px;

    & #box{
      margin: 0 auto;
      width: 80%;
      height: 70%;
      border-radius: 5px;
      display: flex;
      justify-content: space-around; 
      flex-direction: column;
      align-items: center;
      gap: 20px; 
      padding: 60px 30px 0 30px;
      background: #fff;
    }
  }
    & section{
      margin: 0 auto;
      width: 60%;
      display: grid;
      grid-gap: 20px;
      margin: 30px 0;

      & .btn{
        margin: 0 auto;
        width: 60%;
      }
    }

    @media(max-width: 960px){
      width: 100%;
      height: 700px;
      
      & section{
      margin: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      & .btn{
        margin: 0 auto;
        width: 100%;
      }
    }

    & form{
      margin: 0;
      padding: 0;
      & #box{
        margin: 0;
        padding: 0;
        width: 95%;
      height: 95%;
      padding: 2.5%;
      }
    }
      
    }
`