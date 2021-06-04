import React, { useEffect, useState } from 'react';

import { GridContent } from './styles';

import { DataGrid } from '@material-ui/data-grid';
import { columns, IRawRow, IRow } from '../../assets/DataGridConfig'

import { api } from '../../service/api';

const MainDataGrid: React.FC = () => {

  const [rowA, setRowA] = useState<IRow[]>([])
  const [rowB, setRowB] = useState<IRow[]>([])

  useEffect(() => {
    api.get('attendance', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
      }
    }).then(
      response => {
        // let datas = response.data
        setRowA(response.data)
        // datas.map((data: any, i: any) => {
        //   console.log(data.id_attendance)
        // })
        // for (let i = 0; i < datas.length; i++) {
        //   rowA[i].id = datas[i].id_attendance
        //   console.log(rowA[i])
        // }
      }
    ).catch(err => { console.log(err) }).finally(() => { })
  }, [rowA])

  return (
    <GridContent>
      <section className="main-item">
        <h2>Agendamentos do dia</h2>
        <div>
          <DataGrid className="grid" rows={rowA} columns={columns} pageSize={12} checkboxSelection />
        </div>
      </section>
      <section className="co-item">
        <h2>Próximos agendamentos</h2>
        <div>
          <DataGrid className="grid" rows={rowB} columns={columns} pageSize={12} checkboxSelection />
        </div>
      </section>
    </GridContent>
  );
}

export default MainDataGrid;