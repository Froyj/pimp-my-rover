import { useReducer } from 'react';
import Layout from './components/Layout';
import CustomizationContext from './context/CustomizationContext';
import customizationReducer from './reducers/customization';
import './App.css';

function App() {
  const initialState = {
    selectedColor: '#000000',
    selectedTexture: null,

  }
  const [state, dispatch] = useReducer(customizationReducer, initialState);

  return (
    <div className='App'>
      <CustomizationContext.Provider value={{ state, dispatch }}>
        <Layout />
      </CustomizationContext.Provider>
    </div>
  );
}

export default App;
