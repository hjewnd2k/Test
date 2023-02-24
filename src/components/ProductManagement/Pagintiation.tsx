import React from "react";
import { IPage } from "../../type/product.type";
import "./style.css";

interface Props {
  total: number;
  setPage: React.Dispatch<React.SetStateAction<IPage>>;
}

const Pagintiation = ({ total, setPage }: Props) => {
  return (
    <div className="pagination">
      <a href="#">&laquo;</a>
      {new Array(total / 10).fill(null).map((_, i) => (
        <a
          className={`active`}
          href="#"
          onClick={() =>
            setPage((prev) => ({
              ...prev,
              skip: i * 10,
            }))
          }
        >
          {i + 1}
        </a>
      ))}
      <a href="#">&raquo;</a>
    </div>
  );
};

export default Pagintiation;
