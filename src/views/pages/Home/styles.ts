import styled from 'styled-components';

export const HomeContent = styled.div`
  height: 100vh;
  justify-content: center;
  background-color: #EDF6FF;
  align-items: center;
  text-align: center;

  & .container{
    padding-top: 15px;
    width: 99%;
    height: 97vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }

  & .MuiDataGrid-root{
    color: #EDF6FF;
  }

  & .primary-item{
    color: #EDF6FF;
    border-radius: 17px;
    padding: 65px;
    margin: 10px;
    background: rgb(58,217,223);
    background: linear-gradient(155deg, rgba(58,217,223,1) 0%, rgba(92,173,176,1) 100%);
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
  }

  & .secondary-item{
    color: #EDF6FF;
    border-radius: 17px;
    padding: 65px;
    margin: 10px;
    background: rgb(152,0,0);
    background: linear-gradient(155deg, rgba(152,0,0,1) 0%, rgba(124,0,0,1) 100%);
    box-shadow: 4px 8px 6px 0px rgba(0,0,0,0.16);
  }

  & .flex{
    display: flex;
    justify-content: space-around;
  }

  & .navbar-y{
    width: 15%;
  }
  
  & .col-b{
    width: 100%;
  }

  & .col-m{
    width: 45%;
  }

  & .col-s{
    width: 30%;
  }
`