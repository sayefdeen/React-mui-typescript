import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { FC, useMemo } from 'react';

const App: FC = () => {
  const theme = useMemo(
    () =>
      createTheme({
        direction: 'ltr',
      }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <h1>Hello</h1>
    </ThemeProvider>
  );
};

export default App;
