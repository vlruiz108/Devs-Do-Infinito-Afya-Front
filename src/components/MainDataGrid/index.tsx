import React, { useEffect, useState } from 'react';

import { GridContent } from './styles';

import { DataGrid, GridCellParams, GridColDef, GridRowParams } from '@material-ui/data-grid';
import Modal from '@material-ui/core/Modal';
import { IMainRow } from '../../assets/DataGridConfig';
import { Check, Close, Reorder } from '@material-ui/icons';
import ModalForm from '../../components/ModalForm';


import { api } from '../../service/api';
import { Button } from '@material-ui/core';

const MainDataGrid: React.FC = () => {

  const [open, setOpen] = React.useState(false);

  const handleState = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columnsMain: GridColDef[] = [
    {
      field: 'client_name',
      headerName: 'Paciente',
      headerAlign: 'left',
      flex: 1.6
    },
    {
      field: 'specialist_name',
      headerName: 'Profissional',
      headerAlign: 'left',
      flex: 1.6
    },
    {
      field: 'attendance_value',
      headerName: 'Valor',
      headerAlign: 'left',
      flex: 1.2,
      renderCell: (params: GridCellParams) => (
        <>
          $ {(params.value as string).replace(".", ",")}
        </>
      )
    },
    {
      field: 'attendance_status',
      headerName: 'Status',
      flex: 1.5,
      renderCell: (params: GridCellParams) => (
        <strong>
          {params.value === "Realizado" &&
            <Button
              onClick={handleState}
              variant="contained"
              className="done"
              startIcon={<Check />}
            >Realizado</Button>
          }
          {params.value === "Cancelado" &&
            <Button
              onClick={handleState}
              variant="contained"
              className="canceled"
              startIcon={<Close />}
            >Cancelado</Button>
          }
          {params.value === "Agendado" &&
            <Button
              onClick={handleState}
              variant="contained"
              className="scheduled"
              startIcon={<Reorder />}
            >Agendado</Button>
          }
        </strong>
      ),
    }
  ];

  const columnsCo: GridColDef[] = [
    {
      field: 'attendance_date',
      headerName: 'Data',
      flex: 1.3
    }, {
      field: 'client_name',
      headerName: 'Paciente',
      headerAlign: 'left',
      flex: 1.6
    },
    {
      field: 'specialist_name',
      headerName: 'Profissional',
      headerAlign: 'left',
      flex: 1.3
    },
    {
      field: 'attendance_value',
      headerName: 'Valor',
      headerAlign: 'left',
      flex: 1.3,
      renderCell: (params: GridCellParams) => (
        <>
          $ {(params.value as string).replace(".", ",")}
        </>
      )
    },
    {
      field: 'email_client',
      headerName: 'Email',
      flex: 2
    },
    {
      field: 'attendance_status',
      headerName: 'Status',
      flex: 1.5,
      renderCell: (params: GridCellParams) => (
        <strong>
          {params.value === "Realizado" &&
            <Button
              onClick={handleState}
              variant="contained"
              className="done"
              startIcon={<Check />}
            >Realizado</Button>
          }
          {params.value === "Cancelado" &&
            <Button
              onClick={handleState}
              variant="contained"
              className="canceled"
              startIcon={<Close />}
            >Cancelado</Button>
          }
          {params.value === "Agendado" &&
            <Button
              onClick={handleState}
              variant="contained"
              className="scheduled"
              startIcon={<Reorder />}
            >Agendado</Button>
          }
        </strong>
      ),
    }
  ];

  const [rowA, setRowA] = useState<IMainRow[]>([])
  const [rowB, setRowB] = useState<IMainRow[]>([])

  const [isLoadedMain, setIsLoadedMain] = useState<boolean>(false);
  const [isLoadedCo, setIsLoadedCo] = useState<boolean>(false);

  useEffect(() => {
    const today = new Date();
    const now = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, '0'), String(today.getDate()).padStart(2, '0')].join('-')
    setIsLoadedMain(true)
    api.get(`reports/attendanceDate/${now}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
      }
    }).then(
      response => {
        const datas = response.data
        for (let i = 0; i < datas.length; i++) {
          datas[i].id = datas[i].id_attendance
          datas[i].couple_id = (datas[i].id_attendance) % 2
        }
        setRowA(datas)
      }
    ).catch(err => { console.log(err) }).finally(() => {
      setIsLoadedMain(false)
    })
    setIsLoadedCo(true)
    api.get('attendance', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
      }
    }).then(
      response => {
        console.log(response.data)
        const datas = response.data
        for (let i = 0; i < datas.length; i++) {
          datas[i].attendance_date = new Date(datas[i].attendance_date).toLocaleDateString('pt-br')
          datas[i].couple_id = (datas[i].id) % 2
        }
        setRowB(datas)
      }
    ).catch(err => { console.log(err) }).finally(() => {
      setIsLoadedCo(false)
    })
  }, [])

  return (
    <GridContent>
      <section className="main-item">
        <h2>Agendamentos do dia</h2>
        <div>
          {isLoadedMain ? (
            <DataGrid className="grid" rows={rowA} columns={columnsMain} loading />
          ) : (
            <DataGrid className="grid" rows={rowA} columns={columnsMain} pageSize={14} checkboxSelection disableSelectionOnClick
              getRowClassName={(params: GridRowParams) => `value-${params?.getValue(params.id, 'couple_id')}`}
            />
          )}
          <Modal
            className="modalBox"
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <ModalForm />
          </Modal>
        </div>
      </section>
      <section className="co-item">
        <h2>Próximos agendamentos</h2>
        <div>
          {isLoadedCo ? (
            <DataGrid className="grid" rows={rowB} columns={columnsCo} loading />
          ) : (
            <DataGrid className="grid" rows={rowB} columns={columnsCo} pageSize={14} checkboxSelection disableSelectionOnClick
              getRowClassName={(params: GridRowParams) => `value-${params.getValue(params.id, 'couple_id')}`}
            />
          )}
        </div>
      </section>
    </GridContent>
  );
}

export default MainDataGrid;