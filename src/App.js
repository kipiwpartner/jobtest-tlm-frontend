import {BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from './pages/routes';
import { Navbar } from './components/Navbar';

function App() {
  const routes = useRoutes()
  return (
    <Router>
      <>
      <Navbar />
      {routes}
      </>
  </Router>
  );
}

export default App;
