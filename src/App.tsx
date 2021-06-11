import Routes from './routes';

import GlobalStyles from './assets/GlobalStyles';

import { theme } from './assets/GlobalStyles'
import { ThemeProvider } from '@material-ui/styles';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
        <ToastContainer
          position="top-right"
          autoClose={2000}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
