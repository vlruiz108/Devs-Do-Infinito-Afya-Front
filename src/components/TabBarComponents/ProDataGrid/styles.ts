import styled from 'styled-components';

export const GridContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 14px;

  & .main-item{
    background-color: #EDF6FF;
    border-radius: 5px;
    width: 100%;
  }

  & .grid{
    background-color: #fff;
    height: 790px;
  }

  & .value-1{
    background-color: #EDF6FF;
  }

  @media(max-width: 960px){
    display: block;
    
    & .main-item {
      height: 80vh;
      width: 100%;
      margin: 20px 0;
    }

  }
`