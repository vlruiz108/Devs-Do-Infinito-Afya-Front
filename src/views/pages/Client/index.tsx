import React from 'react';

import { ClientContent } from './styles';

import MainNavBar from '../../../components/MainNavBar';
import TabBarAdd from '../../../components/TabBarAdd';

const Client: React.FC = () => {
  return (
    <ClientContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <div className="content">
            <TabBarAdd />
          </div>
        </div>
      </div>
    </ClientContent>
  );
}

export default Client;