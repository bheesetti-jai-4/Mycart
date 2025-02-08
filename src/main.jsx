import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

import Store from './Store/store.js';
import { Provider } from 'react-redux';
// import PageNation from './components/PageNation.jsx';
// import JsontojsO from './components/JsontojsO.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <App/>
      {/* <JsontojsO/> */}
      {/* <PageNation/> */}

    </Provider>
  </StrictMode>,
)
