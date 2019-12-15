import React from 'react'
import ReactDom from 'react-dom'
import routes from '../src/App'
import {Provider} from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom';
import {getClientStore} from '../src/store/store'
import Header from '../src/component/Header.js';

// 注水
const Page = (
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <Header></Header>
      {routes.map(route => <Route {...route}></Route>)}
    </BrowserRouter>
  </Provider>
)

ReactDom.hydrate(Page, document.getElementById('root'))