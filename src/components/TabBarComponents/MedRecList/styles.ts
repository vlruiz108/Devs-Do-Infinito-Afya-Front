import styled from 'styled-components';

export const MedRecListContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & #box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    border-radius: 0 0 5px 5px;
    background-color: #EDF6FF;
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);

    & .item{
      width: 75%;
      padding: 20px;
      margin: 30px;
      height: 60%;
      border-radius: 5px;
      background: #fff;

    }
  }

  & .historic{
    display: flex;
    width: 80%;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #EDF6FF;
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
  }

  & .item{
      width: 90%;
      margin: 30px;
      border-radius: 5px;
      background: #fff;
    }
`