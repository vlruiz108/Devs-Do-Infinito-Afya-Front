import React from 'react';

import { MedRecordContent } from './styles';

import MainNavBar from '../../../components/MainNavBar';
import FormAddMedRecords from '../../../components/FormAddMedRecords';

const MedRecords: React.FC = () => {
  return (
    <MedRecordContent>
      <div id="main">
        <div className="container">
          <MainNavBar />
          <div className="content">
            <FormAddMedRecords />
          </div>
        </div>
      </div>
    </MedRecordContent>
  );
}

export default MedRecords;