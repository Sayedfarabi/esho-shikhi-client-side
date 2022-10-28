// import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthProvider';

function App() {
  const { dark } = useContext(AuthContext);
  return (
    <div className={dark ? 'bg-black text-base-200' : ""}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>


  );
}

export default App;
