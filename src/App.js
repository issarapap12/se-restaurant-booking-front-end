import './App.css';
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import TicketCheck from './Pages/TicketCheck'
import Booking from './Pages/Booking'
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.css';
function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Kumbh Sans',
        'Prompt'].join(','),
    }
  });


  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/TicketChecking' component={TicketCheck} />
              <Route exact path='/Booking' component={Booking} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
