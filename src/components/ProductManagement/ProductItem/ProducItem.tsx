import React from "react";
import { Product } from "../../../type/product.type";
import "../style.css";

interface PropsProductItem {
  product: Product;
}

const ProducItem = ({ product }: PropsProductItem) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.brand}</td>
      <td className="product-item-desc">{product.description}</td>
      <td>{product.price}</td>
      <td>{product.rating}</td>
      <td>{product.stock}</td>
    </tr>
  );
};

export default ProducItem;
