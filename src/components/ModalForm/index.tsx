import React, { FormEvent, useCallback } from 'react';

import { Button } from '@material-ui/core';

import { ModalFormContent } from './styles';

const ModalForm: React.FC = () => {

  const MedRecSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(e.target);
    }, [])

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      console.log(e.target);
    }, [])

  return (
    <ModalFormContent>
      <div className="content">
        <div className="container">
          <Button onClick={handleCancel} name="cancel" variant="contained" color="secondary">Cancelar Consulta</Button>
          <form onSubmit={MedRecSubmit} className="confirm">
            <Button type="submit" name="cancel" variant="contained" color="secondary">Confirmar consulta e adicionar prontuários</Button>
          </form>
        </div>
      </div>
    </ModalFormContent >
  );
}

export default ModalForm;