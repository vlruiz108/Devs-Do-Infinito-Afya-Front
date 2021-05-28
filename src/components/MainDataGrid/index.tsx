import React from 'react';

import { GridContent } from './styles';

import { DataGrid } from '@material-ui/data-grid';
import { rowsA, columnsA, rowsB, columnsB } from '../../assets/DataGridConfig'

const MainDataGrid: React.FC = () => {

  return (
    <GridContent>
      <div className="main-item">
        <DataGrid rows={rowsA} columns={columnsA} pageSize={10} checkboxSelection />
      </div>
      <div className="co-item">
        <DataGrid rows={rowsB} columns={columnsB} pageSize={10} checkboxSelection />
      </div>
    </GridContent>
  );
}

export default MainDataGrid;