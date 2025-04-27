import { ChangeEvent } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

type Props = {
  options: { value: string; label: string }[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selectedValue: string;
};

const CustomRadioButtonGroup = ({
  options,
  onChange,
  selectedValue,
}: Props) => {
  return (
    <>
      <FormControl>
        <RadioGroup onChange={onChange} value={selectedValue} sx={{ my: 0 }}>
          {options.map(({ value, label }) => (
            <FormControlLabel
              key={label}
              control={<Radio color='primary' sx={{ py: 0.7 }} />}
              label={label}
              value={value}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default CustomRadioButtonGroup;
