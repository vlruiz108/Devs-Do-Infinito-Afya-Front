import styled from 'styled-components';

export const ModalFormContent = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  & .content{
    width:800px;
    height:700px;
    border-radius: 5px;
    background-color: #ccc;

    & .container{
      margin: 5%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 90%;

      & .confirm{
        width: 100%;
      }
    }
  }
`