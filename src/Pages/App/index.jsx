import { useRoutes , BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import Kanban from '../Kanban'
import Navbar from '../../Components/Navbar';
import Projects from '../Projects';
import About_Me from '../About_Me';
import './App.css'
import Footer from '../../Components/Footer';
import Pomodoro from '../Pomodoro';


const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home />},
    { path: '/Kanban', element: <Kanban /> },    
    { path: '/Projects', element: <Projects /> },    
    { path: '/About_Me', element: <About_Me /> },
    { path: '/Pomodoro', element: <Pomodoro /> },
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>      
      <Navbar/>
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  )
}
export default App
