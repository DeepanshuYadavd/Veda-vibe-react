import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Audio from "./pages/consult_vaidya/Audio";
import Text from "./pages/consult_vaidya/Text";
import VideoConsult from "./pages/consult_vaidya/VideoConsult";
import ContactUs from "./pages/ContactUs";
import Shopp from "./pages/Shopp";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Relaxation from "./pages/Panchkarma_Therapies/Relaxation";
import Basti from "./pages/Panchkarma_Therapies/Basti";
import Agnikarma from "./pages/Panchkarma_Therapies/Agnikarma";
import RaktMokshan from "./pages/Panchkarma_Therapies/RaktMokshan";
import Detox from "./pages/Panchkarma_Therapies/Detox";
import Sweden from "./pages/Panchkarma_Therapies/Sweden";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./utils/ScrollToTop";
import RouteToSpecificUser from "./components/RouteToSpecificUser";
// users:
import UserProfile from "./pages/user/UserProfile";
import UserOrder from "./pages/user/UserOrders";
import UserOrderDetails from "./pages/user/UserOrderDetails";
import UserCartToBuy from "./pages/user/UserCartToBuy";

// admin:
import AdminUserDetails from "./pages/admin/AdminUserDetails";
import AdminEditUser from "./pages/admin/AdminEditUser";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminOrderDetails from "./pages/admin/AdminOrderDetails";

// page not found
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consult/video" element={<VideoConsult />} />
        <Route path="/consult/audio" element={<Audio />} />
        <Route path="/consult/text" element={<Text />} />
        <Route path="/therapy/relaxation" element={<Relaxation />} />
        <Route path="/therapy/detox" element={<Detox />} />
        <Route path="/therapy/basti" element={<Basti />} />
        <Route path="/therapy/swedan" element={<Sweden />} />
        <Route path="/therapy/agnikarma" element={<Agnikarma />} />
        <Route path="/therapy/raktMokshan" element={<RaktMokshan />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shop" element={<Shopp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details" element={<ProductDetails />} />

        {/* users */}
        <Route element={<RouteToSpecificUser admin={false} />}>
          <Route path="/user/my-profile" element={<UserProfile />} />
          <Route path="/user/orders" element={<UserOrder />} />
          <Route path="/user/order-details" element={<UserOrderDetails />} />
          <Route path="/user/cartToBuy" element={<UserCartToBuy />} />
        </Route>
        {/* admin */}
        <Route element={<RouteToSpecificUser admin={true} />}>
          <Route path="/admin/user-details" element={<AdminUserDetails />} />
          <Route path="/admin/edit-user" element={<AdminEditUser />} />
          <Route path="/admin/orders-list" element={<AdminOrders />} />
          <Route path="/admin/order-details" element={<AdminOrderDetails />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
