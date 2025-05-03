import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import {
  FormControl,
  FormHelperText,
  Typography,
  useTheme,
} from '@mui/material';
import { UploadFile } from '@mui/icons-material';

type Props<T extends FieldValues> = {
  name: keyof T;
} & UseControllerProps<T>;

export default function CustomDropzone<T extends FieldValues>(props: Props<T>) {
  const { fieldState, field } = useController({ ...props });
  const theme = useTheme();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const fileWithPreview = Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        });

        field.onChange(fileWithPreview);
      }
    },
    [field]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const dzStyles = {
    display: 'flex',
    border: 'dashed 2px #7d879c',
    borderColor: '#7d879c',
    borderRadius: '4px',
    paddingTop: '30px',
    alignItems: 'center',
    height: 200,
    width: '100%',
  };

  const dzActive = {
    borderColor: '#cd384f',
  };

  return (
    <div {...getRootProps()}>
      <FormControl
        style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles}
        error={!!fieldState.error}
      >
        <input {...getInputProps()} />
        <UploadFile
          sx={{ fontSize: '75px', color: theme.palette.text.secondary }}
        />
        <Typography variant='h6' color={theme.palette.text.secondary}>
          Drop image here
        </Typography>
        <FormHelperText>{fieldState.error?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}
