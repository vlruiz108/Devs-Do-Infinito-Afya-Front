import styled from 'styled-components';

export const Container = styled.div`
  z-index: 3;
  margin:0;
  padding:0;
  display: none;

  label{
    display:flex;
    flex-direction:column;
    width:50px;
    cursor:pointer;
    margin: 20px;
    
    span{
    background: #404040;
    border-radius:10px;
    height:5px;
    margin: 5px 0;
    transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);

    }

    input[type="checkbox"]{
      display:none;
    }

    input[type="checkbox"]:checked ~ nav{
      justify-content: space-around;
      transform: translate(0, 0);
      opacity: 100%;
    }


    input[type="checkbox"]:checked ~ span:nth-of-type(1){
      transform-origin: top;
      transform: matrix(1,0.7,0,1,0,15);
      background: #fff;
    }


    input[type="checkbox"]:checked ~ span:nth-of-type(2){
      opacity: 0;
      transform-origin:top;
    }


    input[type="checkbox"]:checked ~ span:nth-of-type(3){
      transform-origin:bottom;
      transform:matrix(1,-0.7,0,1,0,-15);
      background: #fff;
    }
  }

  & nav{
    display: flex;
    flex-direction: column;
    align-items: right;
    width: 100%;
    height: 400px;
    background-color: rgba(80,80,80,0.9);
    color: white;
    position: absolute;
    top: 100px;
    left: 0px;
    transition: .7s;
    border-radius: 0 0 10px 10px;
    box-shadow: 10px 10px 10px rgba(30,30,30);
    transform: translate(0, -400px);
    opacity: 0%;

    & a{
      text-decoration: none;
      font-weight: bold;
      color: white;
      width: 200px;
      height: 50px;
    }
  }

  @media(max-width: 960px){
    display: block;
  }
`