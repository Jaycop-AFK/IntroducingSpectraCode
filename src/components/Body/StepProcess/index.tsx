import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const StepProcess = (props: Props) => {
  const steps = [
    {
      number: 1,
      title: "การระบุความต้องการ",
      description:
        "ลูกค้าต้องเตรียมข้อมูลเกี่ยวกับเว็บไซต์ เช่น เป้าหมาย ฟังก์ชัน เนื้อหา และตัวอย่างเว็บไซต์ที่ชอบ เพื่อให้ผู้พัฒนาทราบความต้องการที่ชัดเจน",
      bgColor: "#AF704C",
      circleColor: "#78290F",
    },
    {
      number: 2,
      title: "การเสนอราคาและแผนงาน",
      description:
        "ผู้พัฒนาจะสร้างแผนงานและเสนอราคา โดยรวมถึงระยะเวลาและค่าใช้จ่ายในการพัฒนาลูกค้าพิจารณาและตกลงแผนงาน",
      bgColor: "#FFA854",
      circleColor: "#FF7D00",
    },
    {
      number: 3,
      title: "การออกแบบและพัฒนา",
      description:
        "ผู้พัฒนาเริ่มออกแบบและพัฒนาเว็บไซต์ตามข้อตกลง โดยครอบคลุมทั้งส่วนหน้าบ้านและหลังบ้าน",
      bgColor: "#44818A",
      circleColor: "#15616D",
    },
    {
      number: 4,
      title: "การทดสอบและส่งมอบงาน",
      description:
        "ผู้พัฒนาทดสอบระบบ แก้ไขข้อผิดพลาด และส่งมอบเว็บไซต์ให้ลูกค้าพร้อมคำแนะนำการใช้งาน",
      bgColor: "#54626C",
      circleColor: "#001524",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        padding: { xs: "16px", md: "32px" },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        <Typography
          color="initial"
          sx={{
            fontSize: { xs: 30, sm: 30, md: 40, lg: 48 },
            fontWeight: 500,
          }}
        >
          ขั้นตอนการจ้างงาน
        </Typography>
      </Box>

      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "2rem" }}
        >
          <Grid
            container
            alignItems="center"
            spacing={2}
            sx={{ mb: 4 }}
            flexDirection={{
              xs: "column",
              lg: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <Grid
              item
              xs={12}
              lg={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: { xs: 2, lg: 0 },
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  backgroundColor: step.circleColor,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3" sx={{ color: "#fff" }}>
                  {step.number}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} lg={9}>
              <Box
                sx={{
                  backgroundColor: step.bgColor,
                  color: "white",
                  padding: "16px",
                  borderRadius: "8px",
                  textAlign: { xs: "center", lg: "left" }, 
                  maxWidth: "100%",
                }}
              >
                <Typography variant="h6" color="#fff" sx={{ mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body1">{step.description}</Typography>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      ))}
    </Box>
  );
};

export default StepProcess;
