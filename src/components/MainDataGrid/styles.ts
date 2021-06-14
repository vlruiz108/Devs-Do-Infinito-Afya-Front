import styled from 'styled-components';

export const GridContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 14px;

  & .MuiFab-root{
    z-index: 3;
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

  & strong{
    & button{
    width:100%;
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
      background-color: #0ACF35;
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

  & .value-Realizado{
    background-color: rgba(10,150,60,0.1);
  }
  & .value-Cancelado{
    background-color: rgba(230,13,40,0.1);
  }
  & .value-Agendado{
    background-color: rgba(07,67,200,0.1);
  }

  @media(max-width: 960px){
    display: block;
    
    & .main-item {
      height: 800px;
      width: 100%;
      margin: 20px 0;
    }

    & .co-item{
      height: 800px;
      width: 100%;
      margin-top: 150px;
    }

  }
`