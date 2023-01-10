import React, { useState } from "react";
import { Tabs } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../../Redux/counter/MenuHomeSlice";
import moment from "moment";
const HomeMenu = () => {
  const dispatch = useDispatch();
  const { MenuList } = useSelector((state) => state.MenuHomeSlice);
  // console.log("MenuList", MenuList);
  useEffect(() => {
    dispatch(fetchMenu());
  }, []);

  const [tabPosition] = useState("left");

  const renderThirdChildren = (danhSachPhim) => {
    return danhSachPhim.map((phimChiTiet, index) => {
      return (
        <div key={index} className="my-6">
          <div className="flex flex-row">
            <img
              src={phimChiTiet.hinhAnh}
              alt={phimChiTiet.hinhAnh}
              style={{
                width: 40,
                height: 40,
                objectFit: "cover",
                marginRight: 30,
              }}
              // onError={src='https://placeimg.com/200/300/animals'}
            />
            <div>
              <h2 className="text-red-500 font-light">{phimChiTiet.tenPhim}</h2>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-5 ">
            {phimChiTiet.lstLichChieuTheoPhim.map((phim, index) => {
              return (
                <button
                  className="rounded-lg border border-blue-400 text-sm hover:border-red-600 "
                  key={index}
                >
                  {moment(phim.ngayChieuGioChieu).format("h:mm A")}
                </button>
              );
            })}
          </div>
        </div>
      );
    });
  };

  const listTab = MenuList.map((heThongRap, index) => {
    return {
      label: (
        <div className="flex flex-col" key={index}>
          <img
            src={heThongRap.logo}
            alt={heThongRap.logo}
            style={{ width: 40, height: 40 }}
          />
        </div>
      ),
      key: index,
      children: (
        <Tabs
          tabPosition={tabPosition}
          items={heThongRap.lstCumRap?.map((cumRap, index) => {
            return {
              label: (
                <div className="text-left" style={{ maxWidth: 200 }}>
                  <div className="flex flex-row">
                    <img
                      src={cumRap.hinhAnh}
                      alt={cumRap.hinhAnh}
                      style={{ width: 40, height: 40, marginRight: 10 }}
                    />
                    <h2 className="font-bold">
                      {cumRap.tenCumRap?.length > 20
                        ? `${cumRap.tenCumRap?.slice(0, 20)}...`
                        : cumRap.tenCumRap}
                    </h2>
                  </div>
                  <p className="font-light text-sm">{cumRap.diaChi}</p>
                </div>
              ),
              key: index,
              children: renderThirdChildren(cumRap.danhSachPhim),
            };
          })}
        />
      ),
    };
  });

  return (
    <div className="container mx-auto my-6">
      <Tabs tabPosition={tabPosition} items={listTab} />
    </div>
  );
};

export default HomeMenu;
