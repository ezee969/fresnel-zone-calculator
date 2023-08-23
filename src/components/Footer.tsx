// Components/ui
import { Box, Button, Tooltip, Typography } from '@mui/material';
import appStyle from '../styles/style';
import InfoIcon from '@mui/icons-material/Info';

type Props = {
  handleCalculate: () => void;
  handleReset: () => void;
  showInfoHandler: () => void;
};

export default function Footer({
  handleCalculate,
  handleReset,
  showInfoHandler,
}: Props) {
  return (
    <Box sx={appStyle.footerContainer}>
      <Box sx={appStyle.footerInfoContainer}>
        <Tooltip
          sx={appStyle.tooltip}
          title="Calculadora usada para obtener la zona Fresnel"
        >
          <InfoIcon />
        </Tooltip>
        <Typography
          sx={{ textDecoration: 'underline', cursor: 'pointer', color: 'fafafa' }}
          fontSize={15}
          onClick={showInfoHandler}
        >
          Sobre la zona Fresnel
        </Typography>
      </Box>
      <Box sx={appStyle.buttonsContainer}>
        <Button onClick={handleCalculate} variant="contained" size="large">
          Calcular
        </Button>
        <Button onClick={handleReset} variant="outlined" size="large">
          Limpiar
        </Button>
      </Box>
    </Box>
  );
}
