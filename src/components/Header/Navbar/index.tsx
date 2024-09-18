import  { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { Link, Avatar } from "@mui/material";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = ["หน้าหลัก", "เกี่ยวกับฉัน", "บริการที่ให้", "ทักษะและเครื่องมือ", "ผลงาน", "ติดต่อเรา"];

  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: 'center' }}>
      <AppBar component="nav" position="fixed" sx={{
        width: "100%",
        backgroundColor: "#FFFDFA",
        color: "#000000"
      }} >
        <Toolbar>
          <Avatar variant="circular" src="" alt="" sx={{ width: 50, height: 50, mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Spectra Coding
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                sx={{
                  color: "#000",
                  textDecoration: "none",
                  marginLeft: 2,
                  fontSize: {
                    xs: 14,
                    md: 16,
                    lg: 20
                  }
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
          {/* แก้ไขปุ่ม IconButton สำหรับหน้าจอเล็ก */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }} // ปรับ display
          >
            menu
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer สำหรับ mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        <Box
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
          sx={{ textAlign: "center" }}
        >
          <Typography variant="h6" sx={{ my: 2 }}>
            Spectra Coding
          </Typography>
          <List>
            {navItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
