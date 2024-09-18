import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import { CardData } from "../../../data/CardData/CardData";





const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1199 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1199, min: 767 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

type CardItem = {
  title: string;
  description: string;
  imageUrl: string;
};



const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null);

  const handleClickOpen = (card: CardItem) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCard(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#001524",
        padding: "1rem",
        marginTop: "2rem",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          marginTop: "1rem",
          padding: "1rem",
          display: "flex",
          color: "#fff",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
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
            color: "#fff",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "0.1rem",
          }}
        >
          ผลงานต่างๆ
        </Typography>
      </Box>

      <Carousel
        responsive={responsive}
        ssr
        arrows={true}
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="transform 800ms ease-in-out" // Smooth animation with easing
        transitionDuration={800} // Increased duration for smoother feel
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType="desktop"
      >
        {CardData.map((data, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }} // Subtle hover effect
            whileTap={{ scale: 0.95 }} // Shrink effect on click
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Animate to visible and move up
            transition={{ duration: 0.5 }} // Smooth transition
          >
            <Card
              sx={{
                width: "90%",
                height: "auto",
                borderRadius: "1rem",
                backgroundColor: "#1E1E1E",
                margin: "auto",
                padding: 2,
                maxWidth: "400px", // Improved to ensure mobile view works better
              }}
            >
              <CardMedia
                component="img"
                alt={data.title}
                height="261"
                image={
                  data.imageUrl ||
                  "https://via.placeholder.com/400x261.png?text=No+Image"
                } // Fallback image
                sx={{
                  padding: 2,
                  borderRadius: 10,
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 500,
                    letterSpacing: "0.05rem",
                    lineHeight: "1.5rem",
                    marginBottom: "0.5rem",
                    marginTop: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  {data.title}
                </Typography>
           
              </CardContent>
              <Box
                sx={{
                  width: "100%",
                  position: "end",
                  display: "flex",
                  justifyContent: "center",
                  padding: 1,
                }}
              >
                <Button
                  size="small"
                  sx={{
                    backgroundColor: "#383838",
                    color: "#87DD3B",
                    fontWeight: "bold",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                  }}
                  onClick={() => handleClickOpen(data)}
                >
                  More Detail
                </Button>
              </Box>
            </Card>
          </motion.div>
        ))}
      </Carousel>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selectedCard?.imageUrl && (
              <CardMedia
                component="img"
                alt={selectedCard?.title}
                image={
                  selectedCard?.imageUrl ||
                  "https://via.placeholder.com/400x261.png?text=No+Image"
                } // Fallback image for dialog as well
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 5,
                }}
              />
            )}
            <DialogTitle>{selectedCard?.title}</DialogTitle>
            <Typography
              variant="body1"
              sx={{
                marginTop: "1rem",
                color: "#000",
              }}
            >
              {selectedCard?.description}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button sx={{
            color: "#000",
            fontWeight: "bold",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            backgroundColor: "transparent",
          }} onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Projects;
