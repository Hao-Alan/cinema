import React from "react";
import { Tabs } from "antd";
import DetailFeatureItems from "./DetailFeatureItems";

const DetailFeature = ({ detail }) => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Cụm Rạp Chiếu`,
      children: <DetailFeatureItems detail={detail} />,
    },
    {
      key: "2",
      label: `Các ưu đãi`,
      children: <h2>xin chao tat ca moi nguoi, hien tai chu co gi</h2>,
    },
    {
      key: "3",
      label: `Tiện ích`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <div className="container  justify-center mx-auto">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default DetailFeature;
