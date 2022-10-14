import { BrowserRouter as Router } from 'react-router-dom';

// ===================== Components =====================
import Head from './components/Head';
import Body from './components/Body';

// ===================== Redux =====================
import { Provider } from 'react-redux';
import store from './redux/store';

// ===================== Styles ======================
import s from'./App.module.css';
import styled from 'styled-components';
import image from './img/azul.jpeg';

const Fondo = styled.div`
  min-height: 100vh;
  max-width: 100vw;
    &::before{
        content: '';
        position: fixed;
        top: 15vh;
        width: 100vw;
        height: 100vh;
        background-repeat: repeat-y;
        background: url(${image});
        opacity: 0.9;
        z-index: -1;
    }
`;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fondo>
          <div className={s.App}>
            <Head/>
            <Body/>
          </div>
        </Fondo>
      </Router>
    </Provider>
  );
}

export default App;
