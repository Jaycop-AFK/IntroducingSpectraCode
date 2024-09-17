import { Box } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import { languageImages } from "../../../data/Slidedata/languageImages.data";
import { FrameworkImage } from "../../../data/Slidedata/FrameworkImages.data";
import { ToolsImages } from "../../../data/Slidedata/ToolImages.data";

type Props = {};

const ToolsAndLanguage = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
   
        marginBottom: "1rem",
        width: "100%",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Marquee
        speed={75}
        gradient={true}
        gradientWidth={50}
        >
          {languageImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                margin: "2rem",
                padding: "0 2rem",  
              }}
            >
              <img 
                src={image.imageSrc} 
                alt={`language-${index}`} 
                style={{ height: '80px', width: 'auto' }} 
                title={image.title}
              />
            </Box>
          ))}
        </Marquee>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Marquee
        speed={75}
        gradient={true}
        gradientWidth={50}
        direction={"right"}
        >
          {FrameworkImage.map((image, index) => (
            <Box
              key={index}
              sx={{
                margin: "2rem",
                padding: "0 2rem",  
              }}
            >
              <img 
                src={image.imageSrc} 
                alt={`language-${index}`} 
                style={{ height: '80px', width: 'auto' }} 
                title={image.title}
              />
            </Box>
          ))}
        </Marquee>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Marquee
        speed={75}
        gradient={true}
        gradientWidth={50}
        >
          {ToolsImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                margin: "2rem",
                padding: "0 2rem",  
              }}
            >
              <img 
                src={image.imageSrc} 
                alt={`language-${index}`} 
                style={{ height: '80px', width: 'auto' }} 
                title={image.title}
              />
            </Box>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default ToolsAndLanguage;
