
import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import { Provider } from 'react-redux';
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import Watch from './components/Watch';
import Searchvideo from './components/Searchvideo';

const appRouter=createBrowserRouter([{

  path:"/",
  element:<Body></Body>,
  children:[
    {
      path:"/",
      element:<Maincontainer></Maincontainer>
    },
    {
      path:"watch",
      element:<Watch></Watch>
    },
    {
    path:"search",
    element:<Searchvideo></Searchvideo>
    }
  ]
}])

function App() {
  return (
    <div className="font-bold">
      <Provider store={store}>
    <RouterProvider router={appRouter}>

    <Header></Header>

    </RouterProvider>
    </Provider>
    </div>
  );
}

export default App;
