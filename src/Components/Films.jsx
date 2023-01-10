import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

const Films = ({ features }) => {
  return (
    <Card
      style={{ width: 160 }}
      className="mx-3 my-5"
      cover={
        <img
          alt={features.hinhAnh}
          src={features.hinhAnh}
          style={{ maxHeight: 160, objectFit: "cover" }}
        />
      }
      //   actions={[<ShoppingCartOutlined key="cart" style={{ height: 10 }} />]}
    >
      <Meta
        style={{ maxHeight: 50, objectFit: "cover" }}
        title={
          features.tenPhim.length > 10
            ? `${features?.tenPhim?.slice(0, 10)} ...`
            : features?.tenPhim
        }
        description={
          features.moTa.length > 10
            ? `${features?.moTa?.slice(0, 10)} ...`
            : features?.moTa
        }
      />
    </Card>
  );
};

export default Films;
