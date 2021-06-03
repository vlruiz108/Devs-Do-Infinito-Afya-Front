import React from 'react';

import { ClientContent } from './styles';

import MainNavBar from '../../../components/MainNavBar';
import TabBarPatient from '../../../components/TabBarPatient';

const Patient: React.FC = () => {
  return (
    <ClientContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <div className="content">
            <TabBarPatient />
          </div>
        </div>
      </div>
    </ClientContent>
  );
}

export default Patient;