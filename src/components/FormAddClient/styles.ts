import styled from 'styled-components';

export const FormAddClientContent = styled.div`
  width: 85%;
  height: 800px;
  padding: 40px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .form-fields{
    display: grid;
    grid-template-areas:
      'item-1 item-1'
      'item-2'
      'item-3 item-3 item-3'
      'item-4 item-4'
      'item-5 item-5'
      'item-6 item6'
      'item-7 item';
    grid-gap: 10px;
    background-color: #2196F3;
    padding: 10px;
    height: 640px;
    background: #fff;
    border-radius: 5px;
  }

  & .MuiFormControl-root{
    margin: 25px 15px;
  }

  & #name-client{
    grid-area: item-1;
  }

  & #cpf-client{
    grid-area: item-1;
    width: 200px;
  }

  & #email-client{
    grid-area: item-3;
    width: 240px;
  }

  & #phone-client{  
    grid-area: item-3;
  }

  & #cellphone-client{
    grid-area: item-3;
  }

  & #blood-form--client{
    grid-area: item-2;
    width: 160px;
  }

  & #zip-client{
    grid-area: item-5;
    width: 100px;
  }

  & #check-zip{
    grid-area: item-5;
    margin-top: 35px;
    width: 100px;
  }

  & #street-client{
    grid-area: item-6;
    width: 240px;
  }

  & #locale-client{
    grid-area: item-6;
    width: 200px;
  }

  & #number-client{
    grid-area: item-7;
    width: 100px;
  }

  & #district-client{
    grid-area: item-7;

  }

  & #locale-client{
    grid-area: item-7;

  }

  & #uf-client{
    grid-area: item-7;

  }

  @media(max-width: 960px){
    & .form-field, #blood-form--client{
      width: 90%;
    }
  }
`