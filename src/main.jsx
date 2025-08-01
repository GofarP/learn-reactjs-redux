import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice.js'
import { BrowserRouter,Route, Routes } from 'react-router'
import Counter from './Counter.jsx'
import NewCounter from './NewCounter.jsx'
import { newCounterSlice } from './newCounterSlice.js'

const store=configureStore({
  reducer:{
    counter:counterSlice.reducer,
    newCounter:newCounterSlice.reducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}/>
            <Route path={"/counter"} element={<Counter/>}/>
            <Route path={"/newcounter"} element={<NewCounter/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
