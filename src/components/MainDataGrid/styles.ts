import styled from 'styled-components';

export const GridContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 14px;

  & h2 {
    line-height: 34px;
  }

  & .main-item{
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
    background-color: #EDF6FF;
    border-radius: 5px;
    width: 55%;
  }

  & .co-item{
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
    background-color: #EDF6FF;
    border-radius: 5px;
    width: 35%;
  }

  & .grid{
    background-color: #fff;
    height: 870px;
  }

  @media(max-width: 960px){
    display: block;
    
    & .main-item {
      height: 90vh;
      width: 100%;
      margin: 20px 0;
    }

    & .co-item{
      height: 80vh;
      width: 100%;
      margin-top: 150px;
    }

  }
`