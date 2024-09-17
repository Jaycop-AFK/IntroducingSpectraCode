import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#5a6d7a",
        color: "#fff",
        textAlign: "center",
        padding: "20px 0",
        width: "100%",
        position: "relative",
        bottom: 0,
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h6">Contact Us</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6} lg={6}>
              <Grid container spacing={2} pl={"50%"} textAlign="start">
                <Grid item xs={12} md={12} lg={12}>
                  <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      gap:1,
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 1,
                      fontSize: 16,
                      fontWeight: 400,
                      letterSpacing: 0.5,
                      lineHeight: 1.5,
                      color: "#fff",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#ff9800",
                      },
                      "&:active": {
                        color: "#ffcc00",
                      },
                      "&:visited": {
                        color: "#ffcc00",
                      },
                    }}
                  >
                    <FaEnvelope
                      style={{
                        width: 25,
                        height: 25,
                      }}
                    />
                    <Link
                      href="mailto:sssssssss"
                      color="inherit"
                      underline="hover"
                    >
                      ssssssssss
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      gap:1,
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 1,
                      fontSize: 16,
                      fontWeight: 400,
                      letterSpacing: 0.5,
                      lineHeight: 1.5,
                      color: "#fff",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#ff9800",
                      },
                      "&:active": {
                        color: "#ffcc00",
                      },
                      "&:visited": {
                        color: "#ffcc00",
                      },
                    }}
                  >
                    <FaPhone style={{
                      marginLeft: "15px",
                    }} />
                    080-161-5293
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Grid container spacing={2} pr={"50%"} textAlign="start">
                <Grid item xs={12} md={12} lg={12}>
                <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      marginRight: "40px",
                      gap:1,
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 1,
                      fontSize: 16,
                      fontWeight: 400,
                      letterSpacing: 0.5,
                      lineHeight: 1.5,
                      color: "#fff",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#ff9800",
                      },
                      "&:active": {
                        color: "#ffcc00",
                      },
                      "&:visited": {
                        color: "#ffcc00",
                      },
                    }}
                  >
                     <FaGithub style={{ marginRight: '8px' }} />
              <Link
                href="https://github.com/TxngJr"
                color="inherit"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                @TxngJr
              </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      gap:1,
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 1,
                      fontSize: 16,
                      fontWeight: 400,
                      letterSpacing: 0.5,
                      lineHeight: 1.5,
                      color: "#fff",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#ff9800",
                      },
                      "&:active": {
                        color: "#ffcc00",
                      },
                      "&:visited": {
                        color: "#ffcc00",
                      },
                    }}
                  >
                     <FaGithub style={{ marginRight: '8px' }} />
              <Link
                href="https://github.com/Jaycop-AFK"
                color="inherit"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                @Jaycop-AFK
              </Link>
                    </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item container xs={12} sm={6} justifyContent="space-evenly">
          <Grid item>
            <Typography
              variant="body2"
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}
            >
              <FaEnvelope style={{ marginRight: '8px' }} />
              <Link href="mailto:sssssssss" color="inherit" underline="hover">
                ssssssssss
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <FaPhone style={{ marginRight: '8px' }} />
              080-161-5293
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body2"
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}
            >
              <FaGithub style={{ marginRight: '8px' }} />
              <Link
                href="https://github.com/TxngJr"
                color="inherit"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                @TxngJr
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <FaGithub style={{ marginRight: '8px' }} />
              <Link
                href="https://github.com/Jaycop-AFK"
                color="inherit"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                @Jaycop-AFK
              </Link>
            </Typography>
          </Grid>
        </Grid> */}
      </Grid>

      <Typography variant="caption" display="block" mt={2}>
        © 2024 Your Company Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
