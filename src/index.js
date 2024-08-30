import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { DetaProvider } from "./Context/ShareDeta.js";



import Header from "./Header/Header.js";
import Sinin from "./Sinin/Sinin.js";
import Sinup from "./Sinup/Sinup.js";
import GrehoProduct from "./Product/GrehoProduct.js";
import BabyProduct from "./Product/BabyProduct.js";
import BoyShoping from "./Product/BoyShoping.js";
import BrandProduct from "./Product/BrandProduct.js";
import GazetProduct from "./Product/GazetProduct.js";
import HelthProduct from "./Product/HelthProduct.js";
import WatchProduct from "./Product/WatchProduct.js";
import ProductDetails from "./Product/ProductDetails.js";
import WinterProduct from "./Product/WinterProduct.js";
import SecurityProduct from "./Product/SecurityProduct.js";
import CosmititicProduct from "./Product/CosmititicProduct.js";
import ElectricProduct from "./Product/ElectricProduct.js";


const router = createBrowserRouter([
   
  {
    path: "/",
    element: <App/>,
  },
      {
        path: "/home",
        element: <App />,
       
      },
   
   
      {
        path: "/sinin",
        element: <Sinin/>
       
      },
      {
        path: "/sinup",
        element: <Sinup />,
       
      },
     
      {
        path: "/grehoproduct",
        element: <GrehoProduct/>,
       
      },

      {
        path: "/babyandkids",
        element: <BabyProduct/>,
       
      },

    

      {
        path: "/boyshoping",
        element: <BoyShoping/>,
       
      },
   

      {
        path: "/brandProduct",
        element: <BrandProduct/>,
       
      },
   
      {
        path: "/gezetproduct",
        element: <GazetProduct/>,
       
      },
   


     

      {
        path: "/helthproduct",
        element: <HelthProduct/>,
       
      },

    


      {
        path: "/wacthproduct",
        element: <WatchProduct/>,
       
      },

      {
        path: "/winterproduct",
        element: <WinterProduct/>,
       
      },
      {
        path: "/securityproduct",
        element: <SecurityProduct/>,
       
      },
      {
        path: "/cosmiticproduct",
        element: <CosmititicProduct/>,
       
      },
      {
        path: "/electricproduct",
        element: <ElectricProduct/>,
       
      },



      
      {
        path: "/products/:title",
        element: <ProductDetails/>,
       
      },

     

  {
    path: "/2",
    element: <Header/>,
  }



]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <DetaProvider>  
  <RouterProvider router={router} />
  </DetaProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
