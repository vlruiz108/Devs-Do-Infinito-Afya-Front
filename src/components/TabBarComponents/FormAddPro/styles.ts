import styled from 'styled-components';

export const FormAddProContent = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 30px;
  width: 75%;
  height: 700px;
  display: flex;
  border-radius: 5px;
  justify-content: space-around;
  flex-direction: column;
  background: #fff;

  & .form-field{
    display: grid;
    grid-template-columns: 48% 48%;
    gap: 20px;

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

  @media(max-width: 960px){
    width: 95%;
    height: 1200px;
    padding: 10px 2.5%;
    margin:0;

    & .form-field{
    display: flex;
    flex-direction: column;
    gap: 15px;
    }

    & button{
      margin: 60px 0 40px 0;
  }
  }
`