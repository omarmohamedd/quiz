import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import RootReducer from './reducers/RootReducer'

const store = createStore (
  RootReducer,
  composeWithDevTools(
      applyMiddleware(...[thunk]),
  )
  )

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
