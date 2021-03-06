import styled from 'styled-components';

export const NavbarContent = styled.nav`
  position: relative;
  top: 7vh;
  width: 16%;
  height: 600px;
  color: #EDF6FF;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  align-items: center;
  flex-direction: column;
  background-color: #EDF6FF;
  box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.16);
  z-index: 1;
    
  & #navbar {
    width: 100%;

    & button{
    border-radius: 0;
    border-bottom: 1px solid #000;
    width: 100%;
    height: 50px;
    display: block;
    color: #000;
    font-weight: bold;

    :last-child{
      margin-top: 14px;
      height: 60px;
      display: flex;
      border-top: 1px solid #000;
    }

    }

    & .icon{
      color: black;
      font-weight: bold;
      font-size: 14px;
    }
  }

  & a{
    padding: 10px 5px;
    margin: 5px 0;

    & img{
      width: 100px;
      height: auto;
      filter: drop-shadow(5px 5px 5px #222222);
    }
  }

  & #DrawerMenu{
    display: none;
  }

  @media(max-width: 960px){
    position: sticky;
    height: 100px;
    top: 0;
    margin: 0;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    border-radius: 0 0 5px 5px;
    background: rgb(58,217,223);
    background: linear-gradient(155deg, rgba(58,217,223,1) 0%, rgba(92,173,176,1) 100%);

    & a{

      & img{
      width: 80px;
      height: auto;
      margin: 20px;
      }
    }
    
   

    & #navbar{
      display: none;
    }

    & #DrawerMenu{
      display: block;
    }

  }

`