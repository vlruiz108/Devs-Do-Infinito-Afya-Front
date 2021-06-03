import React, { useEffect, useState } from 'react';

import { GridContent } from './styles';

import { DataGrid } from '@material-ui/data-grid';
import { columns, IRow } from '../../../assets/DataGridConfig'

import { apiTeste } from '../../../service/api';

const PatientDataGrid: React.FC = () => {

  const [row, setRow] = useState<IRow[]>([])

  useEffect(() => {
    apiTeste.get('datas').then(
      response => {
        setRow(response.data)
      }
    ).catch(err => { console.log(err) })
  }, [])

  return (
    <GridContent>
      <section className="main-item">
        <DataGrid className="grid" rows={row} columns={columns} pageSize={12} checkboxSelection />
      </section>
    </GridContent>
  );
}

export default PatientDataGrid;