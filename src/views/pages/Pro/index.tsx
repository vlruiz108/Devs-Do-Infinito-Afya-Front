import React from 'react';

import { ProContent } from './styles';


import MainNavBar from '../../../components/MainNavBar';

const Pro: React.FC = () => {
  return (
    <ProContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <div className="content">
            teste
          </div>
        </div>
      </div>
    </ProContent>
  );
}

export default Pro;