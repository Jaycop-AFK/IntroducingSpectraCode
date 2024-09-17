// CarouselCard.tsx

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

interface CarouselCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#333', color: 'white' }}>
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button size="small" sx={{ backgroundColor: '#6f8f2b', color: 'white', '&:hover': { backgroundColor: '#587223' } }}>
        ดูรายละเอียด
      </Button>
    </Card>
  );
};

export default CarouselCard;
