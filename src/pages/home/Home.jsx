import "./home.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import RecentTransaction from "../../components/RecentTransaction/RecentTransaction";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />

        <div className="charts">
          <RecentTransaction />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
