import React from 'react';

import { ScheduleContent } from './styles';

import FormAddPro from '../../../components/TabBarComponents/FormAddPro';

import MainNavBar from '../../../components/MainNavBar';
import TabBar from '../../../components/TabBar';

import { AssignmentInd, PersonAdd } from '@material-ui/icons';

const Schedules: React.FC = () => {
  return (
    <ScheduleContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <div className="content">
            <TabBar
              FIcon={<AssignmentInd />}
              SIcon={<PersonAdd />}
              FLabel="Todos Agendamentos"
              SLabel="Cadastrar Agendamento"
              FContent={FormAddPro}
              SContent={FormAddPro}
            />
          </div>
        </div>
      </div>
    </ScheduleContent>
  );
}

export default Schedules;