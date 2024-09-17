import { Box, Grid } from "@mui/material";
import React from "react";
import Navbar from "../components/Header/Navbar";
import BackgroundSection from "../components/Body/BackgroundSection";
import CoreOffering from "../components/Body/CoreOfferings";
import StepProcess from "../components/Body/StepProcess";
import PlanPremium from "../components/Body/PlanPremium";
import ToolsAndLanguage from "../components/Body/Tools";
import Projects from "../components/Body/Projects";
import ContactForm from "../components/Body/ContactUs";
import Footer from "../components/Footer";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Grid
        container
        sx={{
         flexDirection: "column",
          
        }}
      >
        <Grid item xs={12} md={12} lg={12}>
        <Navbar />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <BackgroundSection />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <CoreOffering />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <StepProcess />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <PlanPremium />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <ToolsAndLanguage />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Projects />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
        </Grid>
      </Grid>
        <Footer />
   
    </>
  );
};

export default HomePage;
