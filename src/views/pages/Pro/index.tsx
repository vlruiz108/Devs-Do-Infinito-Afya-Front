import React from 'react';

import { ProContent } from './styles';

import MainNavBar from '../../../components/MainNavBar';

import TabBar from '../../../components/TabBar';
import FormAddPro from '../../../components/TabBarComponents/FormAddPro';
import ProDataGrid from '../../../components/TabBarComponents/ProDataGrid';

import { AssignmentInd, PersonAdd } from '@material-ui/icons';

const Pro: React.FC = () => {
  return (
    <ProContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <div className="content">
            <TabBar
              FIcon={<AssignmentInd />}
              SIcon={<PersonAdd />}
              FLabel="Todos Profissionais"
              SLabel="Cadastrar Profissional"
              FContent={ProDataGrid}
              SContent={FormAddPro}
            />
          </div>
        </div>
      </div>
    </ProContent>
  );
}

export default Pro;