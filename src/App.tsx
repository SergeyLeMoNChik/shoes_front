import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ShoesPage } from './page/shoes/shoes';
import { LayOut } from './components/layout/layout';
import { SallerPage } from './page/saller/saller';
import { BuyerPage } from './page/buyer/buyer';
import { SupplierPage } from './page/supplier/supplier';
import { DirectorPage } from './page/director/director';
import { SalePage } from './page/sale/sale';
import { PurchasePage } from './page/purchase/purchase';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut/>,
    children: [
      {
        path: "shoes",
        element: <ShoesPage/>,
      },
      {
        path: "saller",
        element: <SallerPage/>,
      },
      {
        path: "buyer",
        element: <BuyerPage/>,
      },
      {
        path: "supplier",
        element: <SupplierPage/>,
      },
      {
        path: "director",
        element: <DirectorPage/>,
      },
      {
        path: "sale",
        element: <SalePage/>,
      },
      {
        path: "purchase",
        element: <PurchasePage/>,
      },
    ]
    
  },

]);

function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
