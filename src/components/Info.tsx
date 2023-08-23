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
            Que es la zona Fresnel?
          </Typography>
          <Typography variant="body1">
            La zona de Fresnel es el área alrededor de la línea de visión visual que
            la radio las ondas se propagan después de salir de la antena. Esta área
            debe ser libre de obstrucciones para garantizar que la intensidad de la
            señal recibida sea adecuado.
          </Typography>
          <Typography variant="body1">
            El radio de la zona varía con la raíz cuadrada de la longitud de onda y
            inversamente con la raíz cuadrada de la distancia entre el transmisor y
            receptor. El radio de la (primera) zona de Fresnel interior viene dado
            por:
          </Typography>
          <Typography variant="body1" fontWeight={'bold'}>
            r = 8.656√(d/f)
          </Typography>
          <Typography variant="body1">
            donde r es el radio de la zona interior de Fresnel en metros, d es el
            distancia entre el transmisor y el receptor en kilómetros, y f es la
            frecuencia de la señal en GHz.
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
};

export default Info;
