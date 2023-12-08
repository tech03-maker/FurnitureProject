import { Fragment } from "react";
import Table5 from "../../assets/image/image20.jpg";
import Table6 from "../../assets/image/image22.jpg";
import Table7 from "../../assets/image/image28.jpg";
import Table8 from "../../assets/image/image30.jpg";

export const Chair = () => {
  return (
    <Fragment>
        <div className="container">
          <nav className="mt-5">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Chairs
              </li>
            </ol>
          </nav>
          <hr />
          <div className="row">
            <div className="col-12 col-sm-2 col-md-3 col-lg-3 mb-3">
              <div className="card">
                <img src={Table5} className="card" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Comfort Chair</h5>
                  <p className="card-text">
                    Sit back, relax, and enjoy the comfort! Our chairs are designed
                    for moments of pure relaxation and style. Take a seat and let
                    the comfort envelop you.
                  </p>
                  <a href="#" className="btn">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-2 col-md-3 col-lg-3 mb-3">
              <div className="card">
                <img src={Table6} className="card" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Stuffy Chair</h5>
                  <p className="card-text">
                    Unwind in style with our collection of chairs. Crafted for both
                    comfort and aesthetics, each piece is a perfect blend of form
                    and function.
                  </p>
                  <a href="#" className="btn">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-2 col-md-3 col-lg-3 mb-3">
              <div className="card">
                <img src={Table7} className="card" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Tushy Chair</h5>
                  <p className="card-text">
                    Experience the art of seating with our exquisite chairs.
                    Designed to complement any space, our chairs combine
                    contemporary elegance with unparalleled comfort.
                  </p>
                  <a href="#" className="btn">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-2 col-md-3 col-lg-3">
              <div className="card">
                <img src={Table8} className="card" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Corporate Chair</h5>
                  <p className="card-text">
                    Take a seat in luxury! Our chairs are more than just furniture;
                    they're a statement of sophistication and comfort
                  </p>
                  <a href="#" className="btn">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className="mt-5">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Dining Tables
              </li>
            </ol>
          </nav>
          <hr />
        </div>
    </Fragment>
  );
};
