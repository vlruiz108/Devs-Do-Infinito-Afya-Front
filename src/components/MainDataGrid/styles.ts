import styled from 'styled-components';

export const GridContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 14px;

  & #modal{
    width: 100px;
    height: 100px;
    background-color: #ccc;
  }

  & h2 {
    color: #fff;
    line-height: 52px;
  }

  & .grid{
    background-color: #fff;
    height: 850px;

    & .MuiIconButton-label{
      color: #808080;
    }
  }

  & .main-item{
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
    background-color: #7C0000;
    border-radius: 5px;
    width: 43.5%;
      
    & .done{
      background-color: #0AF060;
      width: 90%;
      border-radius:10px;
      color: #fff;
    }

    & .canceled{
      background-color: #EB1340;
      width: 90%;
      border-radius:10px;
      color: #fff;
    }

    & .scheduled{
      background-color: #0767DE;
      width: 90%;
      border-radius:10px;
      color: #fff;
    }
    
  }

  & .co-item{
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
    background-color: #7C0000;
    border-radius: 5px;
    width: 55.5%;

    & .done{
      background-color: #0AF060;
      width: 85%;
      border-radius:10px;
      color: #fff;
      }

    & .canceled{
      background-color: #EB1340;
      width: 85%;
      border-radius:10px;
      color: #fff;
    }

    & .scheduled{
      background-color: #0767DE;
      width: 85%;
      border-radius:10px;
      color: #fff;
    }
    
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

    & .co-item{
      height: 80vh;
      width: 100%;
      margin-top: 225px;
    }

  }
`