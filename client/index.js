import React from 'react'
import ReactDom from 'react-dom'
import App from '../src/App'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from '../src/store/store'
// 注水
const Page = (
  <Provider store={store}>
    <BrowserRouter>
      {App}
    </BrowserRouter>
  </Provider>
)

ReactDom.hydrate(Page, document.getElementById('root'))