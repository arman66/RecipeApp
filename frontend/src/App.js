import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import Headers from './components/Headers'
import Footers from './components/Footers'



const App=()=> {
  return (
    <Router>
    <Headers/>
    <main className='py-3'>
    <Container>
      <Route path ='/' component= {HomeScreen} exact/>
    </Container>
    </main>
    <Footers/>
    </Router>
  );
}

export default App;
