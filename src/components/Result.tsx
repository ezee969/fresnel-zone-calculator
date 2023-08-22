// Components/ui
import { Box, Fade, Typography } from '@mui/material';
import appStyle from '../styles/style';

type Props = {
  result: number;
  showResult: boolean;
};

const Result = ({ result, showResult }: Props) => {
  return (
    <Fade in={showResult}>
      <Box sx={appStyle.resultContainer}>
        <Typography variant="button" fontSize={19} fontWeight={'bold'}>
          Result: {result} Metters
        </Typography>
      </Box>
    </Fade>
  );
};

export default Result;
