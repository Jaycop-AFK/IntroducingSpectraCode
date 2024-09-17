import React from 'react';
import { Grid, TextField, Button, Typography, Box } from '@mui/material';

const ContactForm: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
                <Typography  sx={{
                    textAlign:"center",
                    fontWeight: 400,
                    fontSize: {
                        xs: '18px',
                        sm: '28px',
                        md: '38px',
                        lg: '48px',
                    },
          
                    padding: 3,
               
  
                }}>
                  ติดต่อเราที่นี่
                </Typography>
      <Grid container spacing={4} justifyContent="center">
       
        <Grid item xs={12} md={6}>
          <Box 
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: '#f0f0f0', 
              minHeight: 300,
            }}
          />
        </Grid>

    
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Send Us a Message
          </Typography>
          <Typography variant="body1" gutterBottom>
            หากท่านมีคำถามหรือข้อสงสัยเพิ่มเติมใด ๆ กรุณาส่งข้อความและติดต่อเราผ่านทางข้อความ เรามีทีมให้บริการและพร้อมตอบข้อสงสัยของท่านเสมอ
          </Typography>
          
          <TextField 
            fullWidth 
            label="ชื่อ" 
            variant="outlined" 
            margin="normal"
          />
          <TextField 
            fullWidth 
            label="อีเมล์ติดต่อกลับ" 
            variant="outlined" 
            margin="normal"
          />
          <TextField 
            fullWidth 
            label="ข้อความสอบถาม & ปัญหา" 
            variant="outlined" 
            multiline 
            rows={4} 
            margin="normal"
          />
          
          <Button  sx={{
            backgroundColor: '#00090F',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#FF6B00',
            },
            width: '20%',
            borderRadius: '10px',
            margin: '10px 0',
            padding: '10px 20px',
            fontSize: '20px',
    
          }}>
            Send Message
          </Button>
          
          <Typography variant="caption" display="block" mt={2}>
            ขอบคุณที่ให้ความไว้วางใจและหวังเป็นอย่างยิ่งว่าจะได้มีโอกาสให้บริการท่านอีกในอนาคต
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactForm;
