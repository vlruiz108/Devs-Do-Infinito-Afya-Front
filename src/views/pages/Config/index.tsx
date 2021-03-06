import React from 'react';

import { ConfigContent } from './styles';

import FormEditProfessions from '../../../components/FormEditProfessions'

import MainNavBar from '../../../components/MainNavBar';

const Config: React.FC = () => {

  return (
    <ConfigContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <div className="content">
            <FormEditProfessions />
          </div>
        </div>
      </div>
    </ConfigContent>
  );
}

export default Config;