import React, { useEffect, useState } from 'react';

import { GridContent } from './styles';

import { DataGrid } from '@material-ui/data-grid';
import { columns, IRow } from '../../../assets/DataGridConfig'

import { api } from '../../../service/api';

const ProDataGrid: React.FC = () => {

  const [row, setRow] = useState<IRow[]>([])

  useEffect(() => {
    api.get('specialist', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
      }
    }).then(
      response => {
        console.log(response.data)
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

export default ProDataGrid;