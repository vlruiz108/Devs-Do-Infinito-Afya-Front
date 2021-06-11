import styled from 'styled-components';

export const FormEditProfessionContent = styled.form`
  margin: 60px auto;
  padding: 40px;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  border-radius: 5px;

    & section{
      margin: 0 auto;
      width: 60%;
      display: grid;
      grid-gap: 20px;
      margin: 30px 0;

      & .btn{
        margin: 0 auto;
        width: 60%;
      }
    }

    @media(max-width: 960px){
      width: 100%;
    }
`