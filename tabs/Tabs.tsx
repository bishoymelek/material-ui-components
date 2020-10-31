import React from 'react';
import {
  Container,
  Tabs as MaterialTabs,
  Tab,
  AppBar
} from '@material-ui/core';
import TabPanel from './TabPanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const Tabs = props => {
  const [value, setValue] = React.useState(0);
  const { options } = props;
  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="sm">
      <AppBar position="static">
        <MaterialTabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {options?.length &&
            options.map(oneTab => (
              <Tab label={oneTab.label} {...a11yProps(0)} />
            ))}
        </MaterialTabs>
      </AppBar>
      {React.Children.map(props.children, (Child, index) => (
        <TabPanel value={value} index={index}>
          {Child}
        </TabPanel>
      ))}
    </Container>
  );
};

export default Tabs;
