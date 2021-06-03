import React from 'react';

import FormAddPatient from '../TabBarComponents/FormAddPatient';
import PatientDataGrid from '../TabBarComponents/PatientDataGrid';

import { TabPanel, a11yProps } from '../../assets/AppBarComponents';

import { Group, GroupAdd } from '@material-ui/icons';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const TabBarPatient: React.FC = () => {
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
          <Tab label="Todos Pacientes" icon={<Group />}  {...a11yProps(0)} />
          <Tab label="Cadastrar Paciente" icon={<GroupAdd />} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PatientDataGrid />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormAddPatient />
      </TabPanel>
    </>
  );
}

export default TabBarPatient;