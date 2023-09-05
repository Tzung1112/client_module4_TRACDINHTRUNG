import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Lazy Function */
import Lazy from '@utils/lazies/Lazy';

/* Components */
import Home from '@pages/homes/Home';

/* Route Setup */
import RouteProduct from "./RouteProduct";
import RouteUser from "./RouteUser";

export default function RouteSetup() {
  return (
    <BrowserRouter>
        <Routes>
            {/* Home - Navbar + Footer */}
            <Route path="/" element={<Home></Home>}>
            <Route path="" element={Lazy(() => import("@pages/homes/components/Body/Body"))()}></Route>
              {RouteProduct}
            </Route>
        {RouteUser}
        </Routes>
         
    </BrowserRouter>
  )
}
