import React from 'react';

import FormAddPatient from '../FormAddPatient';
import FormAddPro from '../FormAddPro';

import { TabPanel, a11yProps } from '../../assets/AppBarComponents';
import { AddCircle } from '@material-ui/icons';
import { AppBar, Tabs, Tab } from '@material-ui/core';


const TabBarAdd: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab label="Cadastrar Paciente" icon={<AddCircle />}  {...a11yProps(0)} />
          <Tab label="Cadastrar Profissional" icon={<AddCircle />} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <FormAddPatient />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormAddPro />
      </TabPanel>
    </>
  );
}

export default TabBarAdd;