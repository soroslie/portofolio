import React from 'react';
import { Chip, Box, Typography } from '@mui/material';

interface SkillChipProps {
  skill: string;
  rating: number; // 1-5 stars
}

const SkillChip: React.FC<SkillChipProps> = ({ skill, rating }) => {
  return (
    <Chip
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography 
            variant="body2" 
            component="span"
            sx={{ 
              color: '#ffffff', // Pure white for skill text
              fontWeight: 400
            }}
          >
            {skill}
          </Typography>
          <Typography
            variant="caption"
            component="span"
            sx={{
              fontSize: '0.7rem',
              color: '#FFB800', // Warm gold
              opacity: 1,
              fontWeight: 700,
              lineHeight: 1,
              backgroundColor: 'rgba(255, 184, 0, 0.1)', // Subtle gold background
              padding: '2px 4px',
              borderRadius: '10px'
            }}
          >
            {rating}★
          </Typography>
        </Box>
      }
      variant="outlined"
      sx={{ 
        fontWeight: 500,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        bgcolor: 'rgba(255, 255, 255, 0.03)',
        transition: 'all 0.2s ease',
        '& .MuiChip-label': {
          px: 1.5,
          py: 0.5
        },
        '&:hover': {
          bgcolor: 'rgba(255, 255, 255, 0.08)',
          borderColor: 'rgba(255, 184, 0, 0.4)',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 15px rgba(255, 184, 0, 0.2)'
        }
      }}
    />
  );
};

export default SkillChip;