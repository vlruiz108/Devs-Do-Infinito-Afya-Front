import styled from 'styled-components';

export const FormAddSchedulesContent = styled.div`
  margin: 0 auto ;
  width: 85%;
  height: 85%;
  border-radius: 5px;
  background-color: #EDF6FF;
  box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);

  & h2 {
  background-color: #7C0000;
  height: 50px;
  border-radius: 5px;
  color: white;
  padding:10px;
  }

  & form{
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;
  height: 100%;
  border-radius: 5px;

    & #box{
      margin: 0 auto;
      width: 85%;
      height: 70%;
      border-radius: 5px;
      display: flex;
      justify-content: space-around; 
      flex-wrap: wrap; 
      padding: 60px 30px 0 30px;
      background: #fff;

      & .row2{
        width: 30%;
      }

      & .row3{
        margin-bottom: -60px;
      }

    }
      
  }

  
  
`