import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ProducItem from "../ProductItem";
import { IPage, Product } from "../../../type/product.type";
import "../style.css";
import Pagintiation from "../Pagintiation";

const ProductList = () => {
  const [page, setPage] = useState<IPage>({
    limit: 10,
    skip: 0,
  });
  const [total, setTotal] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const fetch = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=${page.limit}&skip=${page.skip}`
      );
      if (res.status === 200) {
        setProducts(res.data.products);
        setTotal(res.data.total);
      }
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="product-list">
      <table id="customers">
        <tr>
          <th>STT</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Stock</th>
        </tr>
        {products.map((product) => (
          <ProducItem key={product.id} product={product} />
        ))}
      </table>
      <Pagintiation total={total} setPage={setPage} />
    </div>
  );
};

export default ProductList;
