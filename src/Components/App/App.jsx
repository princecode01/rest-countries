import Home from '../Home/Home';
import Details from '../Details/Details';
import MasterLayOut from '../MasterLayOut/MasterLayOut';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';


import { createHashRouter, RouterProvider } from 'react-router-dom';


function App() {

  let routes = createHashRouter([{
    path: '/', element: <MasterLayOut />, errorElement: <h2>not found</h2>, children: [
      { index: true, element: <Home />},
      { path: 'details/:name', element: <Details />},
    ]
  }])


  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
