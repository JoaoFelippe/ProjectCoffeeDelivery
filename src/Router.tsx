import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Order } from "./pages/Order";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/Order/:idOrder" element={<Order/>}/>
      </Route>
    </Routes>
  );
}
