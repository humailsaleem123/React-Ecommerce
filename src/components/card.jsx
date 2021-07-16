import React from "react";

function Card(product) {
  const { onAdd, id } = product;

  return (
    <div className="col-md-3 col-sm-6" key={id} title={product.title}>
      <div className="product-grid">
        <div className="product-image">
          <a className="image">
            <img
              className="pic-1 fit-img"
              alt="search"
              style={{ height: "250px" }}
              src={product.imgsrc}
            />
          </a>
          <span className="product-discount-label">{product.discount}</span>
          <ul className="product-links">
            <li>
              <a data-tip="Add to Wishlist">
                <i className="fa fa-heart"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="product-content">
          <ul className="rating">
            <li className="fa fa-star"></li>
            <li className="fa fa-star"></li>
            <li className="fa fa-star"></li>
            <li className="fa fa-star"></li>
            <li className="fa fa-star"></li>
          </ul>
          <h3 className="title" name="items">
            <a style={{ textDecoration: "none" }}>{product.pname}</a>
          </h3>
          <div className="price">
            <span>{product.pricedis}</span> ${product.price}{" "}
          </div>

          <a
            className="add-to-cart"
            style={{ textDecoration: "none", cursor: "pointer" }}
            onClick={() => onAdd(product)}
          >
            add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
