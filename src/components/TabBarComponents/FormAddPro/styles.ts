import styled from 'styled-components';

export const FormAddProContent = styled.div`
padding: 30px;
  margin: 0 auto;
  margin-top: 30px;
  width: 65%;
  height: 640px;
  display: flex;
  border-radius: 5px;
  justify-content: space-around;
  flex-direction: column;
  background: #fff;

  & .form-field{
    display: grid;
    grid-template-columns: 48% 48%;
    grid-gap: 4%;

    & *{
      margin: 7px 0px;
    }

    & #phone-box{
      display: flex;
      justify-content: space-between;
      align-items: start;
    }
  
    & #check-address{
      margin: 10px 0 0 40px;
    }
  }

  & button{
    margin-top: 150px;
  }

  @media(max-width: 960px){
    width: 80%;
    height: 690px;
  }
`