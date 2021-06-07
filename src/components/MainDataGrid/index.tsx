import React, { useEffect, useState } from 'react';

import { GridContent } from './styles';

import { DataGrid } from '@material-ui/data-grid';
import { columns, IRow } from '../../assets/DataGridConfig'

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
        const datas = response.data
        for (let i = 0; i < datas.length; i++) {
          datas[i].attendance_date = new Date(datas[i].attendance_date).toLocaleDateString('pt-br')
          datas[i].couple_id = (datas[i].id) % 2
        }
        setRowA(datas)
        setRowB(datas)
      }
    ).catch(err => { console.log(err) }).finally(() => { })
  }, [])

  return (
    <GridContent>
      <section className="main-item">
        <h2>Agendamentos do dia</h2>
        <div>
          <DataGrid className="grid" rows={rowA} columns={columns} pageSize={14} checkboxSelection
            getRowClassName={(params) => `value-${params?.getValue(params.id, 'couple_id')}`}
          />
        </div>
      </section>
      <section className="co-item">
        <h2>Próximos agendamentos</h2>
        <div>
          <DataGrid className="grid" rows={rowB} columns={columns} pageSize={14} checkboxSelection
            getRowClassName={(params) => `value-${params.getValue(params.id, 'couple_id')}`}
          />
        </div>
      </section>
    </GridContent>
  );
}

export default MainDataGrid;