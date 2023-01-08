import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Movies from "../pages/Movies/Movies";
import Shows from "../pages/Shows/Shows";
import Player from "../pages/Player/Player";
import SubscriptionPlans from "../components/SubscriptionPlans";
import { Payment } from "../components/Payment";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/show" element={<Shows />}></Route>
      {/* <Route path="/myaha" element={<Myaha/>}></Route> */}
      <Route path="/search" element={<Search />}></Route>
      <Route path="/subscribe" element={<SubscriptionPlans />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      {/* <Route path="/movies/:id" element={<MoviePage/>}></Route> */}
      {/* <Route path="/shows/:id" element={<ShowPage/>}></Route> */}
      <Route path="/player" element={<Player/>}></Route>
      {/* <Route path="*" element={<NotFound/>}></Route> */}
    </Routes>
  );
};

export default AllRoutes;
