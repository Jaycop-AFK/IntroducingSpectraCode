import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { offeringsData } from "../../../data/Offering.data";
import { motion } from "framer-motion";

type Props = {};

const CoreOffering = ( Props:Props) => {
    return (
      <Box
        sx={{
          width: "100%",
          marginTop: "1rem",
          marginBottom: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <Typography
            sx={{
              color: "#000",
              fontWeight: "bold",
              fontSize: {
                xs: 20,
                sm: 25,
                md: 30,
                lg: 35,
              },
            }}
          >
            Build. Breakthrough. Beyond.
          </Typography>
        </Box>
  
        <Grid container spacing={2} justifyContent="center">
          {offeringsData.map((offering, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                 <motion.img
                src={offering.imageSrc}
                alt={offering.title}
                style={{
                  width: "115px",
                  height: "115px",
                }}
                whileHover={{
                  scale: 1.1, // Scale up the image on hover
                  rotate: [0, 10, -10, 0], // Slight shake effect
                  transition: {
                    type: "spring",
                    stiffness: 300, // Defines the spring intensity
                    damping: 10, // Reduces bounce
                  },
                }}
              />
                <Typography sx={{
                  fontSize: {
                    xs: 16,
                    sm: 18,
                    md: 20,
                    lg: 22,
                  },
                  color: "#000",
                  fontWeight: "bold",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}>{offering.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default CoreOffering;