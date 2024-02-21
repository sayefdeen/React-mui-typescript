import { ThemeOptions } from '@mui/material/styles';

export const tableOverrides: ThemeOptions['components'] = {
  MuiTable: {
    styleOverrides: {
      root: {
        borderCollapse: 'separate',
        borderSpacing: '0 1.2rem',
        padding: '0 1.2rem',
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        backgroundColor: '#f7f7f7',
      },
      head: {
        backgroundColor: '#fff',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontSize: '1.2rem',
        fontWeight: 500,
        padding: 0,
      },
      head: {
        borderBottom: '1px solid #eff2f5',
        paddingLeft: '0.8rem',
        padding: '0.4rem 0',
        '&:first-child': {
          paddingLeft: '3.2rem',
        },
        '&:last-child': {
          paddingRight: '3.2rem',
        },
      },
      body: {
        padding: '0.8rem 0.8rem',
        borderTop: '0.2rem solid transparent',
        borderBottom: '0.2rem solid transparent',
        '&:first-child': {
          paddingLeft: '1.6rem',
          borderRadius: '4px 0 0 4px',
          borderLeft: '0.2rem solid transparent',
        },
        '&:last-child': {
          paddingRight: '0.2rem',
          borderRadius: '0 4px 4px 0',
          borderRight: '0.2rem solid transparent',
        },
      },
    },
  },
};
