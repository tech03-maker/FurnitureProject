import "./SubHero.css";
import Table from "../../assets/image/image29.jpg";
import Table2 from "../../assets/image/image43.jpg";
import Table3 from "../../assets/image/image48.jpg";
import Table4 from "../../assets/image/image2.jpg";

export const SubHero = () => {
  return (
    <div className="container mt-5">
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Tables
          </li>
        </ol>
      </nav>
      <hr />

      <div className="row">
        <div className="col-12 col-sm-2 col-md-3 col-lg-3 mb-3">
          <div className="card">
            <img src={Table} className="card" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-2 col-md-3 col-lg-3 mb-3">
          <div className="card">
            <img src={Table2} className="card" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-2 col-md-3 col-lg-3 mb-3">
          <div className="card">
            <img src={Table3} className="card" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-2 col-md-3 col-lg-3">
          <div className="card">
            <img src={Table4} className="card" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
