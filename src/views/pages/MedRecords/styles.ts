import styled from 'styled-components';

export const MedRecordContent = styled.div`
  & #main{
    min-height: 800px;
    background: rgb(58,217,223);
    background: linear-gradient(155deg, rgba(58,217,223,1) 0%, rgba(92,173,176,1) 100%);
    justify-content: center;
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
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-radius: 5px;
    width: 80%;
    margin:20px 40px;
  }

  @media(max-width: 960px){
    & #main{
      height: 969px;
    }

    & .container{
    padding-top: 0;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    
    }

    & .content{
      width: 100%;
      margin: 10px 0;
      padding: 0;
    }
  }
`