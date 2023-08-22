// Components/ui
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import appStyle from '../styles/style';
// Types
import { ChangeEvent } from 'react';
import { Frequency } from '../types/Frequency';

type Props = {
  distance: string;
  error: boolean;
  frecuency: Frequency;
  handleDistanceChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleFrecuencyChange: (e: SelectChangeEvent<Frequency>) => void;
};

export default function Inputs({
  distance,
  error,
  frecuency,
  handleDistanceChange,
  handleFrecuencyChange,
}: Props) {
  return (
    <Box sx={appStyle.inputsContainer}>
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment sx={appStyle.textFieldAdornment} position="end">
              Km
            </InputAdornment>
          ),
        }}
        value={distance}
        onChange={handleDistanceChange}
        label="Distance"
        fullWidth
        variant="outlined"
        focused
        error={error}
        autoFocus
        helperText={error && 'Enter the distance between the two antennas'}
      />
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: 'primary.main',
          }}
        >
          Frecuency
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={frecuency}
          label="Frecuency"
          onChange={handleFrecuencyChange}
          sx={appStyle.select}
        >
          <MenuItem value={2.4}>2.4 Ghz</MenuItem>
          <MenuItem value={5.8}>5.8 Ghz</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
