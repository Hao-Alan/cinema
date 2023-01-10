import React from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Rate } from "antd";
import moment from "moment";

const DetailCinema = ({ detail }) => {
  const percentage = (detail.danhGia / 10) * 100;

  return (
    <div
      style={{
        marginTop: 48,
        backgroundImage: `url(${detail.hinhAnh})`,
      }}
    >
      <CustomCard
        effectColor="#C780FF" // required
        color="#14AEFF" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
        style={{ minHeight: "80vh", maxHeight: "80vh" }}
      >
        <div className="grid grid-cols-2">
          <div>
            <img
              src={detail.hinhAnh}
              className="rounded-lg "
              style={{ height: "70vh", margin: "0 auto" }}
              alt={detail.hinhAnh}
            />
          </div>
          <div style={{ width: "90%", margin: "0, auto" }}>
            <h1 className="mb-8 font-bold">{detail.tenPhim}</h1>
            <p className="mb-8">{detail.moTa}</p>
            <p className="mb-8">{detail.biDanh}</p>
            <p className="mb-3">
              Năm Sản Xuất: {moment(detail.dateTime).format("YYYY")}
            </p>

            <div className="grid grid-cols-3 pt-10">
              <div>
                <div style={{ width: "50px", margin: "auto" }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <p className="mt-5">
                  Số lượt bình chọn <strong> yêu thích</strong>
                </p>
              </div>
              <div>
                <p>Số lượng bình chọn bởi khán giả {detail.danhGia}</p>
                <Rate disabled value={Number(detail?.danhGia / 2)} />
              </div>
            </div>
            <div className="mt-10">
              <button className="bg-green-600 text-white rounded-md py-3 px-7 mr-5 hover:bg-slate-600">
                XEM TRAILER
              </button>
              <button className="bg-green-600 text-white rounded-md py-3 px-7 text-center  hover:bg-slate-600">
                <ShoppingCartOutlined
                  style={{ lineHeight: 0, display: "inline-flex" }}
                />
                MUA VE XEM NGAY
              </button>
            </div>
          </div>
        </div>
      </CustomCard>
    </div>
  );
};

export default DetailCinema;
