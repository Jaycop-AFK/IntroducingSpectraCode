import { Box, Tab, Typography } from "@mui/material";
import React from "react";
import { TabPanelProps } from "../../../interfaces/TapPlan.interface";
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import BoxLayout from "./components/BoxLayout";
import { pricingWebsite } from "../../../data/PlanData/PlanWebsite.data";

type Props = {};

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PlanPremium = (props: Props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        width: "100%",
        color: "#333",
        textAlign: "center",
        paddingBottom: 4,
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "18px",
            sm: "24px",
            md: "30px",
            lg: "36px",
          },
          fontWeight: 500,
          marginBottom: 2,
        }}
      >
        แพลนให้บริการดังนี้!!
      </Typography>

      <Box sx={{ width: "80%", color: "#000",display:"flex", flexDirection:"column", justifyContent: 'center' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            justifyContent: "center", // Center the tabs
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          <Tab label="website" {...a11yProps(0)} />
          <Tab label="iot(internetOfThing)" {...a11yProps(1)} />
          <Tab label="webApplication" {...a11yProps(2)} />
          <Tab label="mobileApplication" {...a11yProps(3)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <BoxLayout packages={pricingWebsite} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <BoxLayout packages={pricingWebsite} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <BoxLayout packages={pricingWebsite} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
        <BoxLayout packages={pricingWebsite} />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default PlanPremium;
