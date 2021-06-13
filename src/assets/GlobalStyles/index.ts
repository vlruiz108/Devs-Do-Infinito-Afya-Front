import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/data-grid';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff7961',
      main: '#7C0000',
      dark: '#ba000d',
      contrastText: '#EDF6FF',
    },
    secondary: {
      light: '#FFF',
      main: '#EDF6FF',
      contrastText: '#000',
    },
    info: {
      main: '#0767DE'
    }
  },
}, ptBR);

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
  }
`