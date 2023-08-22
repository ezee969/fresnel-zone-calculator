import { useEffect } from 'react';
// Components/ui
import { Box, Typography, Fade, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import appStyle from '../styles/style';

type Props = {
  showInfoHandler: () => void;
  showInfo: boolean;
};

const Info = ({ showInfoHandler, showInfo }: Props) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        showInfoHandler();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [showInfoHandler]);

  return (
    <Fade in={showInfo}>
      <Box sx={appStyle.infoContainer}>
        <Box sx={appStyle.infoHeaderContainer}>
          <IconButton onClick={showInfoHandler}>
            <ArrowBackIcon color="primary" />
          </IconButton>
        </Box>
        <Box sx={appStyle.infoTextContainer}>
          <Typography variant="h4" sx={{ mb: 3 }} fontWeight={'bold'}>
            What is the Fresnel Zone?
          </Typography>
          <Typography variant="body1">
            The Fresnel zone is the area around the visual line-of-sight that radio
            waves spread out into after they leave the antenna. This area must be
            free from obstructions to ensure the received signal strength is
            adequate.
          </Typography>
          <Typography variant="body1">
            The radius of the zone varies with the square root of the wavelength and
            inversely with the square root of the distance between the transmitter
            and receiver. The radius of the inner (first) Fresnel zone is given by:
          </Typography>
          <Typography variant="body1" fontWeight={'bold'}>
            r = 8.656√(d/f)
          </Typography>
          <Typography variant="body1">
            where r is the radius of the inner Fresnel zone in meters, d is the
            distance between the transmitter and receiver in kilometers, and f is the
            frequency of the signal in GHz.
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
};

export default Info;
