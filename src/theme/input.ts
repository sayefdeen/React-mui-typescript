import { ThemeOptions } from '@mui/material/styles';

export const inputOverrides: ThemeOptions['components'] = {
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontSize: '1.2rem',
        fontWeight: 500,
        color: 'inherit',
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontSize: '1.2rem',
      },
    },
  },
  MuiInputLabel: {
    defaultProps: {
      disableAnimation: true,
      shrink: true,
    },
    styleOverrides: {
      root: {
        marginBottom: '1rem',
        transform: 'none !important',
      },
      formControl: {
        position: 'static',
      },
    },
  },
  MuiFilledInput: {
    defaultProps: {
      disableUnderline: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 4,
      },
      input: {
        padding: '1rem 1.6rem',
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        padding: '1rem 1.6rem',
      },
      notchedOutline: {
        top: 0,
        '& >legend': {
          display: 'none',
        },
      },
    },
  },
};
