import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Index from './container/Index.js'
import About from './container/About.js'

export default (
  <div>
    <Route path="/" exact component={Index}></Route>
    <Route path="/about" exact component={About}></Route>
  </div>
)