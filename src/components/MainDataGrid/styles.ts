import styled from 'styled-components';

export const GridContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 14px;

  & h2 {
    line-height: 52px;
  }

  & .main-item{
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
    background-color: #EDF6FF;
    border-radius: 5px;
    width: 52.5%;
  }

  & .co-item{
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
    background-color: #EDF6FF;
    border-radius: 5px;
    width: 37.5%;
  }

  & .grid{
    background-color: #fff;
    height: 850px;
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