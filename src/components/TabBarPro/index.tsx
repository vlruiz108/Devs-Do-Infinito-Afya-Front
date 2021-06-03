import React from 'react';

import FormAddPro from '../TabBarComponents/FormAddPro';
import ProDataGrid from '../TabBarComponents/ProDataGrid';

import { TabPanel, a11yProps } from '../../assets/AppBarComponents';

import { AssignmentInd, PersonAdd } from '@material-ui/icons';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const TabBarPro: React.FC = () => {
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
          <Tab label="Todos Profissionais" icon={<AssignmentInd />}  {...a11yProps(0)} />
          <Tab label="Cadastrar Profissional" icon={<PersonAdd />} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProDataGrid />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormAddPro />
      </TabPanel>
    </>
  );
}

export default TabBarPro;