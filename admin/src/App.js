import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./pages/AdminLayout";
import AddProduct from "./pages/AddProduct";
import ManageProducts from "./pages/ManageProducts";
import EditProduct from "./pages/EditProduct";
import CategoryManager from "./pages/CategoryManager";
import AllOrders from './pages/orders/AllOrders';
import UncheckedOrders from './pages/orders/UncheckedOrders';
import MyOrders from './pages/orders/MyOrders';
import PendingOrders from './pages/orders/PendingOrders';

const App = () => {
 
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="manage-products" />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
          <Route path="categories" element={<CategoryManager />} />
        </Route>
        <Route path="*" element={<Navigate to="/admin" />} />
        <Route path="/admin/orders/all" element={<AllOrders />} />
        <Route path="/admin/orders/unchecked" element={<UncheckedOrders />} />
        <Route path="/admin/orders/my-orders" element={<MyOrders />} />
        <Route path="/admin/pending-orders" element={<PendingOrders />} />
      </Routes>
    </Router>
  );
};

export default App;
