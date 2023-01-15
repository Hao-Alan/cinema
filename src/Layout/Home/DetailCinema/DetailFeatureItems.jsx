import React from "react";
import { Tabs } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const DetailFeatureItems = ({ detail }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("newDetail", detail.heThongRapChieu);

  const ListFilm = () => {
    return detail?.heThongRapChieu?.map((film, index) => {
      return {
        label: (
          <img
            src={film.logo}
            alt={film.logo}
            style={{ width: 30, height: 30 }}
          />
        ),
        key: index,
        children: (
          <Tabs
            tabPosition="left"
            items={film?.cumRapChieu?.map((chieu, index) => {
              return {
                label: (
                  <div key={index}>
                    <h4>{chieu.tenCumRap}</h4>
                    <img
                      src={chieu.hinhAnh}
                      alt={chieu.hinhAnh}
                      style={{ width: 30, height: 30 }}
                    />
                    <p className="font-light font-sans">
                      Địa chỉ:{" "}
                      {chieu.diaChi.length > 20
                        ? chieu.diaChi.slice(0, 20) + "..."
                        : chieu.diaChi}
                    </p>{" "}
                  </div>
                ),
                key: index,
                children: (
                  <div className="grid grid-cols-3">
                    {chieu?.lichChieuPhim?.map((chieuPhim, index) => {
                      return (
                        <div
                          className="bg-red-300 rounded-lg px-0 py-2 mr-3 mb-3 text-center cursor-pointer"
                          onClick={() => {
                            navigate(`/checkout/${id}`);
                          }}
                        >
                          {moment(chieuPhim.ngayChieuGioChieu).format("h:mm A")}
                        </div>
                      );
                    })}
                  </div>
                ),
              };
            })}
          />
        ),
      };
    });
  };
  return (
    <>
      <Tabs tabPosition="left" items={ListFilm()} />
    </>
  );
};

export default DetailFeatureItems;
