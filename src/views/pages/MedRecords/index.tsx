import React from 'react';

import { MedRecordContent } from './styles';

import MainNavBar from '../../../components/MainNavBar';

import FormAddMedRecords from '../../../components/TabBarComponents/FormAddMedRecords';
import TabBar from '../../../components/TabBar';
import MedRecList from '../../../components/TabBarComponents/MedRecList';

import { Group, GroupAdd } from '@material-ui/icons';

const MedRecords: React.FC = () => {
  return (
    <MedRecordContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <div className="content">
            <TabBar
              FIcon={<Group />}
              SIcon={<GroupAdd />}
              FLabel="Todos Prontuários"
              SLabel="Cadastrar histórico ao prontuário"
              FContent={MedRecList}
              SContent={FormAddMedRecords}
            />
          </div>
        </div>
      </div>
    </MedRecordContent>
  );
}

export default MedRecords;