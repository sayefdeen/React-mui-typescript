import createTheme from '@mui/material/styles/createTheme';
import type { Theme } from '@mui/material/styles/createTheme';
import { Direction } from '@mui/system/createTheme/createTheme';

import { inputOverrides } from './input';
import { paletteOptions } from './palette';
import { tableOverrides } from './table';
import { typographyOptions } from './typography';

export const createMuiTheme = (options?: { direction?: Direction }): Theme =>
  createTheme({
    direction: options?.direction,
    palette: paletteOptions,
    typography: typographyOptions,
    spacing: (factor: number) => `${factor * 0.8}rem`,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@global': {
            html: {
              fontSize: 10,
              height: '100%',
              width: '100%',
            },
            body: {
              height: '100%',
              width: '100%',
              overflow: 'hidden',
              fontWeight: 'normal',
            },
            a: {
              cursor: 'pointer',
            },
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            fontSize: '1.4rem',
          },
          filledError: {
            backgroundColor: '#ffe8ec',
            color: '#f11729',
            fontSize: '1.2rem',
            border: 'solid 1px #f11729',
            icon: {
              color: '#f11729',
            },
          },
          outlinedError: {
            color: '#fff',
          },
          outlinedSuccess: {
            color: '#ffffff',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '1.2rem',
            padding: '0.8rem 1.6rem',
            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: '#d5d5d5',
            },
          },
          contained: {
            backgroundColor: '#fff',
            color: '#060f27',
            '&:disabled': {
              color: 'rgb(121 121 121)',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
            },
          },
          containedSecondary: {
            backgroundColor: '#DA604F',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'rgb(172, 74, 60)',
            },
            sizeLarge: {
              padding: '1rem 2rem',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            padding: 0,
          },
          root: {
            padding: 0,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            padding: '1.4rem 1.6rem 1.6rem',
            backgroundColor: '#fff',
            boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
            borderRadius: '4px',
            color: '#484848',
            fontSize: '1.2rem',
            fontWeight: 400,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.06)',
            overflow: 'inherit',
            borderRadius: '0.8rem',
            backgroundColor: '#fff',
            padding: '1.6rem',
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          root: {
            padding: '3.2rem 3.2rem 0',
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: '3.2rem',
          },
        },
      },
      MuiCardActions: {
        styleOverrides: {
          root: {
            padding: '1.6rem 3.2rem',
            borderTop: 'solid 1px #eff2f5',
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: 'unset',
          },
        },
      },
      MuiGrid2: {
        defaultProps: {
          // allow equal padding on all sides with negative margin
          disableEqualOverflow: false,
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            padding: 0,
            marginBottom: '1.5rem',
            border: 'none',
            '&:before': {
              height: 0,
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            backgroundColor: '#f4f5f7',
            borderRadius: '0.5rem',
            '&.Mui-expanded': {
              minHeight: 48,
            },
          },
          content: {
            expandIcon: {
              '& .MuiSvgIcon-root': {
                fontSize: '2.5rem',
                color: '#17173A',
              },
            },
            '&.Mui-expanded': {
              margin: 0,
            },
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            padding: '1rem',
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {},
          grouped: {
            '&:not(:first-of-type)': {},
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: () => ({
            '&.Mui-checked': {
              color: (theme: Theme) => theme.palette.secondary.main,
            },
          }),
        },
      },
      ...inputOverrides,
      ...tableOverrides,
    },
  });
