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
          title="Calculator used to calculate the radius of the Fresnel zone"
        >
          <InfoIcon />
        </Tooltip>
        <Typography
          sx={{ textDecoration: 'underline', cursor: 'pointer', color: 'fafafa' }}
          fontSize={15}
          onClick={showInfoHandler}
        >
          About the Fresnel Zone
        </Typography>
      </Box>
      <Box sx={appStyle.buttonsContainer}>
        <Button onClick={handleCalculate} variant="contained" size="large">
          Calculate
        </Button>
        <Button onClick={handleReset} variant="outlined" size="large">
          Reset
        </Button>
      </Box>
    </Box>
  );
}
