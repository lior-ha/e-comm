import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

import './App.css';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

function App() { 
  return (
    <div>
        <Switch> {/* Switch - Optionl - Makes the code render the first hit from the Routes */}
            <Route exact path='/' component={HomePage} />
            <Route path='/hats' component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;
