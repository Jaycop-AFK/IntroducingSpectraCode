import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Background from '../../../assets/background.png'; 
import { motion } from 'framer-motion';

const BackgroundSection = () => {
  const text = "รับจ้างพัฒนาระบบซอฟแวร์ทุกแพลตฟอร์ม ตามความต้องการของคุณ";
  const characters = text.split("");
  
  return (
    <Box sx={{
      width: "100%",
      height: '100vh',
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
    }}>

    <Box
      sx={{
        position: "relative",
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        zIndex: 1,
        left: 0,
        padding: { xs: '10px', sm: '20px' }, // เพิ่ม padding ให้รองรับหน้าจอเล็ก
      }}
      >
      <Typography
        sx={{
          color: "#fff",
          mb: 4,
          fontSize: {
            lg: "60px",
            md: "50px",
            sm: "30px",
            xs: "20px",  // ลดขนาดฟอนต์สำหรับหน้าจอเล็ก
          },
          fontFamily: "Kanit, sans-serif",
          wordWrap: "break-word",
          overflowWrap: "break-word",
          maxWidth: '100%',
        }}
        >
        ปัญหาที่คุณเจอ เราสามารถช่วยคุณได้
      </Typography>
      
      <Typography 
        variant="h4" 
        sx={{ 
          color: '#fff', 
          mb: 5,     
          fontFamily: 'Kanit, sans-serif',
          wordWrap: "break-word",
          overflowWrap: "break-word",
          maxWidth: {
            lg: "80%",
            md: "80%",
            sm: "85%",
            xs: "90%",  // ปรับขนาดความกว้างให้เหมาะสมสำหรับจอเล็ก
          },
          fontSize: {
            lg: "40px",
            md: "30px",
            sm: "25px",
            xs: "16px",  // ลดขนาดฟอนต์เพิ่มเติม
          }
        }}>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </Typography>
      
      <Button
        variant="contained"
        color="warning"
        sx={{
          backgroundColor: '#FF6B00',
          borderRadius: 25,
          fontSize: {
            lg: "20px",
            xs: "16px",  // ปรับขนาดฟอนต์ปุ่มให้เล็กลงเมื่ออยู่ในจอเล็ก
          },
          padding: {
            lg: "10px 20px",
            xs: "8px 16px",  // ปรับ padding ให้เล็กลงสำหรับจอเล็ก
          },
          ':hover': {
            backgroundColor: '#FF8C00',
          },
          fontFamily: 'Kanit, sans-serif',
        }}
        >
        กดรับคำปรึกษาฟรี คลิก!!
      </Button>
    </Box>
    </Box>
  );
};

export default BackgroundSection;
