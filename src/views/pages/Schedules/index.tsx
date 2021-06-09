import React from 'react';

import { ScheduleContent } from './styles';

import MainNavBar from '../../../components/MainNavBar';
import FormAddSchedules from '../../../components/FormAddSchedules';

const Schedules: React.FC = () => {
  return (
    <ScheduleContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <div className="content">
            <FormAddSchedules />
          </div>
        </div>
      </div>
    </ScheduleContent>
  );
}

export default Schedules;