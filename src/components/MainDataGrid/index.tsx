import React, { useEffect, useState } from 'react';

import { GridContent } from './styles';

import { DataGrid } from '@material-ui/data-grid';
import { columns, IRow } from '../../assets/DataGridConfig'

import { api } from '../../service/api';

const MainDataGrid: React.FC = () => {

  const [rowA, setRowA] = useState<IRow[]>([])
  const [rowB, setRowB] = useState<IRow[]>([])

  useEffect(() => {
    api.get('datas').then(
      response => {
        setRowA(response.data)
        setRowB(response.data)
      }
    ).catch(err => { console.log(err) }).finally(() => { })
  }, [])

  return (
    <GridContent>
      <section className="main-item">
        <h2>Tabela-1</h2>
        <div>
          <DataGrid className="grid" rows={rowA} columns={columns} pageSize={12} checkboxSelection />
        </div>
      </section>
      <section className="co-item">
        <h2>Tabela-2</h2>
        <div>
          <DataGrid className="grid" rows={rowB} columns={columns} pageSize={12} checkboxSelection />
        </div>
      </section>
    </GridContent>
  );
}

export default MainDataGrid;