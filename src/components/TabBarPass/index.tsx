import React from 'react';

import FormSignIn from '../../components/FormSignIn';
import FormSignUp from '../../components/FormSignUp';
import { TabPanel, a11yProps } from '../../assets/AppBarComponents'
import { AddCircle, Lock } from '@material-ui/icons';
import { AppBar, Tabs, Tab } from '@material-ui/core';


const TabBarPass: React.FC = () => {
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
          <Tab label="Login" icon={<Lock />}  {...a11yProps(0)} />
          <Tab label="Cadastro" icon={<AddCircle />} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <FormSignIn />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormSignUp />
      </TabPanel>
    </>
  );
}

export default TabBarPass;