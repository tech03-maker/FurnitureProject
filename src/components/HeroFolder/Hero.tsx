import "./Hero.css";
import Hero3D from "../../assets/image/illustration-classic-pantry-600nw-223671598.webp";

export const Hero = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
          <h3>Elevate your space with our handcrafted furniture</h3>
          <p className="w-50">Where style meets comfort.</p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <img src={Hero3D} alt="" />
        </div>
      </div>
    </div>
  );
};
