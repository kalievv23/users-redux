import { Provider } from 'react-redux';
import './App.css';
import { store } from './components/store/Index';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './components/routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <MainRoutes />
        </Provider >
      </BrowserRouter>
    </div>
  );
}

export default App;

