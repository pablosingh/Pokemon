// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import App from './App';
import NavBar from './components/NavBar';

configure({adapter: new Adapter()});

describe('App', () => {
  let store
  const middlewares = []
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  describe('El componente Nav debe renderizar en todas las rutas.', () => {
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );

        expect(wrapper.find(NavBar)).toHaveLength(1);
    });

  });

}); //Cierre de describe App