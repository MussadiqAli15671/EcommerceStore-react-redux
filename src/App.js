import Header from "./containers/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
   element: <Header />,
   children: [
     {
       path: "/",
       element: <ProductListing />
     },
     {
       path: "/product/:productId",
       element: <ProductDetail />
     },
   ]
  }
])
function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
