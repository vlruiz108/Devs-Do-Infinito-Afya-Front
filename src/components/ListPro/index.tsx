import React, { useEffect, useState } from 'react';

import { api } from '../../service/api';

import { IPros } from '../../assets/FormAddClientConfig';
import { MenuItem } from '@material-ui/core';

const ListPro: React.FC = () => {

  const [pros, setPros] = useState<IPros[]>([])

  useEffect(() => {
    api.get('profession', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@TokenAGMed')}`
      }
    }).then(
      response => {
        setPros(response.data)
      }
    ).catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <div>
      {pros.map((pro, i) => <MenuItem key={i} value={pro?.profession_name as any}>{pro?.profession_name}</MenuItem>)}
    </div>
  );
}

export default ListPro;