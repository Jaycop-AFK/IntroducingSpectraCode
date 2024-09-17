import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { PackageType, Props } from "../../../../interfaces/TapPlan.interface";

const packageColors: Record<PackageType, string> = {
  STARTER: "#006680",
  STANDARD: "#ff8c00",
  BUSINESS: "#8B4513",
};

const BoxLayout: React.FC<Props> = ({ packages }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {packages.map((pkg, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              textAlign: "center",
              maxWidth: "317px",
              height: "524px",
              position: "relative",
            }}
          >
            {pkg.isRecommended && (
              <Box
                sx={{
                  position: "absolute",
                  top: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "15px",
                  padding: "5px 10px",
                }}
              >
                <Typography variant="caption">Recommended 🔥</Typography>
              </Box>
            )}
            <Box
              sx={{
                padding: 2,
                backgroundColor: packageColors[pkg.packageName],
                color: "#fff",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
              }}
            >
              <Typography variant="h4" fontWeight="bold">
                {pkg.price}
              </Typography>
              <Typography variant="subtitle1">
                {pkg.packageName} Package
              </Typography>
            </Box>
            <Box
              sx={{
                padding: 2,
                backgroundColor: "#fff",
                color: "#000",
                textAlign: "left",
              }}
            >
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {pkg.details.map((detail, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <Typography
                      sx={{
                        marginRight: "8px",
                        color: detail.included ? "green" : "red",
                      }}
                    >
                      {detail.included ? "✔️" : "❌"}
                    </Typography>
                    <Typography>{detail.description}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default BoxLayout;
