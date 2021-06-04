import React from 'react';

import { TabPanel, a11yProps } from '../../assets/AppBarComponents';

import { AppBar, Tabs, Tab } from '@material-ui/core';

const TabBar: React.FC<{
  FIcon: React.ReactElement<React.JSXElementConstructor<any>>;
  SIcon: React.ReactElement<React.JSXElementConstructor<any>>;
  FLabel: string;
  SLabel: string;
  FContent: React.ReactNode;
  SContent: React.ReactNode;
}> = (props) => {
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
          <Tab label={props.FLabel} icon={props.FIcon}  {...a11yProps(0)} />
          <Tab label={props.SLabel} icon={props.SIcon} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {props.FContent}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.SContent}
      </TabPanel>
    </>
  );
}

export default TabBar;