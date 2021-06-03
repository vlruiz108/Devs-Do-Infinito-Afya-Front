import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/data-grid';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#FFF',
      main: '#EDF6FF',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#7C0000',
      dark: '#ba000d',
      contrastText: '#EDF6FF',
    },
  },
}, ptBR);

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
  }
`