import styled from 'styled-components';

export const GridContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 14px;

  & h2 {
    color: #fff;
    line-height: 52px;
  }

  & .main-item{
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
    background-color: #7C0000;
    border-radius: 5px;
    width: 49.5%;
  }

  & .co-item{
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
    background-color: #7C0000;
    border-radius: 5px;
    width: 49.5%;
  }

  & .grid{
    background-color: #fff;
    height: 850px;

    & button {
      margin: 0 auto;
      width: 90%;
      border-radius:10px;
      color: #fff;
    }
  }

  & .value-1{
    background-color: #EDF6FF;
  }

  & .done{
    background-color: #0AF060;
  }

  & .canceled{
    background-color: #EB1340;
  }

  & .scheduled{
    background-color: #0767DE;
  }

  @media(max-width: 960px){
    display: block;
    
    & .main-item {
      height: 80vh;
      width: 100%;
      margin: 20px 0;
    }

    & .co-item{
      height: 80vh;
      width: 100%;
      margin-top: 225px;
    }

  }
`