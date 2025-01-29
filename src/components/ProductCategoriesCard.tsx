import React from "react";
import "../assets/ProductCategoriesCard.css";
import EcoFriendly from "../imgAssets/Eco-friendly/eco-friendly-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faEarth,
  faEarthOceania,
} from "@fortawesome/free-solid-svg-icons";
const ProductCategoriesCard = () => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzaG9lfGVufDB8MHx8fDE3MjEwNDEzNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            className="card-img-top"
            alt="Product Image"
          />
          <span className="tag-ecofriendly">
            {" "}
            <img src={EcoFriendly} alt="EcoFriendly Product" />{" "}
          </span>
          <span className="tag-sale">sale</span>
          <div className="card-body">
            <h5 className="card-title">Red Nike</h5>
            <p className="card-text">Short product description goes here.</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="h5 mb-0">$99.99</span>
              <div>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <small className="text-muted">(3.0)</small>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center bg-white m-2">
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzaG9lfGVufDB8MHx8fDE3MjEwNDEzNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            className="card-img-top"
            alt="Product Image"
          />{" "}
          <span className="tag-sale">sale</span>
          <div className="card-body">
            <h5 className="card-title">Red Nike</h5>
            <p className="card-text">Short product description goes here.</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="h5 mb-0">$99.99</span>
              <div>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-half text-warning"></i>
                <small className="text-muted">(4.5)</small>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center bg-white m-2">
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzaG9lfGVufDB8MHx8fDE3MjEwNDEzNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            className="card-img-top"
            alt="Product Image"
          />{" "}
          <span className="tag-ecofriendly">
            {" "}
            <img src={EcoFriendly} alt="EcoFriendly Product" />{" "}
          </span>
          <span className="tag-sale">sale</span>
          <div className="card-body">
            <h5 className="card-title">Red Nike</h5>
            <p className="card-text">Short product description goes here.</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="h5 mb-0">$69.00</span>
              <div>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <small className="text-muted">(4.0)</small>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center bg-white m-2">
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzaG9lfGVufDB8MHx8fDE3MjEwNDEzNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            className="card-img-top"
            alt="Product Image"
          />{" "}
          <span className="tag-ecofriendly">
            {" "}
            <img src={EcoFriendly} alt="EcoFriendly Product" />{" "}
          </span>
          <div className="card-body">
            <h5 className="card-title">Red Nike</h5>
            <p className="card-text">Short product description goes here.</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="h5 mb-0">$100.0</span>
              <div>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <small className="text-muted">(5.0)</small>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center bg-white m-2">
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzaG9lfGVufDB8MHx8fDE3MjEwNDEzNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            className="card-img-top"
            alt="Product Image"
          />{" "}
          <span className="tag-sale">sale</span>
          <div className="card-body">
            <h5 className="card-title">Red Nike</h5>
            <p className="card-text">Short product description goes here.</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="h5 mb-0">$102.0</span>
              <div>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <small className="text-muted">(4.0)</small>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center bg-white m-2">
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategoriesCard;
