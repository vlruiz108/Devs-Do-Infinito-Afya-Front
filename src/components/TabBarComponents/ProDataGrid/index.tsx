import React, { useEffect, useState } from 'react';

import { GridContent } from './styles';

import { DataGrid } from '@material-ui/data-grid';
import { columnsPro, IProRow } from '../../../assets/DataGridConfig'

import { api } from '../../../service/api';

const ProDataGrid: React.FC = () => {

  const [row, setRow] = useState<IProRow[]>([])

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
    api.get('specialist', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
      }
    }).then(
      response => {
        const datas = response.data
        for (let i = 0; i < datas.length; i++) {
          datas[i].couple_id = (datas[i].id) % 2
        }
        setRow(datas)
      }
    ).catch(err => { console.log(err) }).finally(() => {
      setIsLoaded(false)
    })
  }, [])

  return (
    <GridContent>
      <section className="main-item">
        {isLoaded ?
          (
            <DataGrid className="grid" rows={row} columns={columnsPro} pageSize={12} loading />
          ) : (
            <DataGrid className="grid" rows={row} columns={columnsPro} pageSize={12} />
          )}
      </section>
    </GridContent>
  );
}

export default ProDataGrid;