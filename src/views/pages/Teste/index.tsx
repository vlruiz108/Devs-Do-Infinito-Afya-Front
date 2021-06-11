import { Button, TextField } from '@material-ui/core';
import React, { useCallback, useState } from 'react';


interface IData {
  "a": boolean,
  "b": boolean,
  "c": boolean,
  "d": boolean,
  "e": boolean,
}

const items = [
  { name: 'a', nu: 1 },
  { name: 'b', number: 2 },
  { name: 'c', number: 3 },
  { name: 'd', number: 4 },
  { name: 'e', number: 5 }
]

const Teste: React.FC = () => {

  const [data, setData] = useState<IData>({} as IData);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      let num = (Math.floor(Math.random() * 5) + 1)
      num === 1 && setData({ ...data, a: true })
      num === 2 && setData({ ...data, b: true })
      num === 3 && setData({ ...data, c: true })
      num === 4 && setData({ ...data, d: true })
      num === 5 && setData({ ...data, e: true })
    }, [])

  return (
    <div>
      <TextField label="1" id="1" type="text" variant="outlined" size="small" color="primary" error={data.a} required />
      <TextField label="1" id="2" type="text" variant="outlined" size="small" color="primary" required />
      <TextField label="1" id="3" type="text" variant="outlined" size="small" color="primary" required />
      <TextField label="1" id="4" type="text" variant="outlined" size="small" color="primary" required />
      <TextField label="1" id="5" type="text" variant="outlined" size="small" color="primary" error required />
      <Button variant="contained" onClick={handleClick} color="primary" type="submit" >ok</Button>
    </div>
  );
}

export default Teste;