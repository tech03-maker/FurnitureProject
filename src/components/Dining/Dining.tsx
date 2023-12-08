import { Fragment } from "react";
import Table9 from "../../assets/image/image 45.jpg";
import Table10 from "../../assets/image/image7.jpg";
import Table11 from "../../assets/image/image8.jpg";
import Table12 from "../../assets/image/image14.jpg";
import Home from "../Homepage/Home";
import { Link } from "react-router-dom";

export const Dining = () => {
  return (
    <Fragment>
        <Home />
      <div className="container">
        <nav className="mt-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dining Tables
            </li>
          </ol>
        </nav>
        <hr />
        <div className="row">
          <div className="col-12 col-sm-2 col-md-3 col-lg-3 mb-3">
            <div className="card">
              <img src={Table9} className="card" alt="" />
              <div className="card-body">
                <h5 className="card-title">Marble Dining Set</h5>
                <p className="card-text">
                  Elevate your dining experience with our exquisite tables.
                  Crafted for both functionality and style, our dining tables
                  are the perfect centerpiece for memorable gatherings.
                </p>
                <a href="#" className="btn">
                  Order Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-2 col-md-3 col-lg-3 mb-3">
            <div className="card">
              <img src={Table10} className="card" alt="" />
              <div className="card-body">
                <h5 className="card-title">Decorated Dining Set</h5>
                <p className="card-text">
                  Make every meal a celebration with our stunning dining tables.
                  Each piece is a masterpiece, blending elegant design with
                  durable craftsmanship.
                </p>
                <a href="#" className="btn">
                  Order Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-2 col-md-3 col-lg-3 mb-3">
            <div className="card">
              <img src={Table11} className="card" alt="" />
              <div className="card-body">
                <h5 className="card-title">Tushy Dining Set</h5>
                <p className="card-text">
                  Dine in style and comfort. Our dining tables are a harmony of
                  form and function, creating a welcoming space for family and
                  friends.
                </p>
                <a href="#" className="btn">
                  Order Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-2 col-md-3 col-lg-3">
            <div className="card">
              <img src={Table12} className="card" alt="" />
              <div className="card-body">
                <h5 className="card-title">Ceramic Dining Set</h5>
                <p className="card-text">
                  Experience the art of dining with our exceptional tables.
                  Impeccable design meets practicality in every piece, ensuring
                  a perfect balance of style and functionality.
                </p>
                <a href="#" className="btn">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <span>All Right Reserved | Daemonex 2023</span>
      </footer>
    </Fragment>
  );
};
