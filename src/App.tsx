import { ChangeEvent, useState } from 'react';
// Components/ui
import { Box, SelectChangeEvent, Fade, Typography } from '@mui/material';
import './styles/App.css';
import './styles/stars-animation.css';
import appStyle from './styles/style';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { Title, Inputs, Result, Footer, Info } from './components';
// Types
import { Frequency } from './types/Frequency';

function App() {
  const [distance, setDistance] = useState('');
  const [frecuency, setFrecuency] = useState<Frequency>(2.4);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleDistanceChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    const sanitizedValue = value.replace(/[^0-9.]/g, '');

    setDistance(sanitizedValue);
  };

  const handleFrecuencyChange = (e: SelectChangeEvent<Frequency>) => {
    const { value } = e.target;
    const numberValue = Number(value);

    if (numberValue === 2.4 || numberValue === 5.8) setFrecuency(numberValue);
  };

  const handleCalculate = () => {
    if (distance === '') {
      setShowResult(false);
      setError(true);
      setResult(0);
    } else {
      const distanceNumber = Number(distance);
      const frecuencyNumber = Number(frecuency);
      const result = 8.656 * Math.sqrt(distanceNumber / frecuencyNumber);
      const formattedResult = Number(result.toFixed(2));

      setError(false);
      setResult(formattedResult);
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setDistance('');
    setFrecuency(2.4);
    setShowResult(false);
    setError(false);
  };

  const showInfoHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <section className="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
      <ThemeProvider theme={theme}>
        <Box
          className={'animated animatedFadeInUp fadeInUp'}
          sx={appStyle.container}
        >
          {!showInfo ? (
            <Fade in={!showInfo}>
              <Box sx={appStyle.calculatorContainer}>
                <Title />
                <Inputs
                  distance={distance}
                  handleDistanceChange={handleDistanceChange}
                  error={error}
                  frecuency={frecuency}
                  handleFrecuencyChange={handleFrecuencyChange}
                />
                <Footer
                  showInfoHandler={showInfoHandler}
                  handleCalculate={handleCalculate}
                  handleReset={handleReset}
                />
                <Typography variant="h5">Por Ezequiel Olivero</Typography>
                <Result result={result} showResult={showResult} />
              </Box>
            </Fade>
          ) : (
            <Info showInfoHandler={showInfoHandler} showInfo={showInfo} />
          )}
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
