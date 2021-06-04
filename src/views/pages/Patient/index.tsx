import React from 'react';

import { ClientContent } from './styles';

import MainNavBar from '../../../components/MainNavBar';

import TabBar from '../../../components/TabBar';
import PatientDataGrid from '../../../components/TabBarComponents/PatientDataGrid';
import FormAddPatient from '../../../components/TabBarComponents/FormAddPatient';

import { Group, GroupAdd } from '@material-ui/icons';

const Patient: React.FC = () => {
  return (
    <ClientContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <div className="content">
            <TabBar
              FIcon={<Group />}
              SIcon={<GroupAdd />}
              FLabel="Todos Pacientes"
              SLabel="Cadastrar Paciente"
              FContent={PatientDataGrid}
              SContent={FormAddPatient}
            />
          </div>
        </div>
      </div>
    </ClientContent>
  );
}

export default Patient;