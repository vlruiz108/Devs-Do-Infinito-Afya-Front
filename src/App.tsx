import Routes from './routes';

import GlobalStyles from './assets/GlobalStyles';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
      <ToastContainer
        position="top-center"
        autoClose={2000}
      />
    </>
  );
}

export default App;
