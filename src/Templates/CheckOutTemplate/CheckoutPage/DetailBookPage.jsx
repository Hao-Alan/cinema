import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const DetailBookPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { danhSachPhimDaDat } = useSelector(
    (state) => state.QuanLyDatVeServicesSliceReducer
  );
  console.log("danhSachPhimDaDat", danhSachPhimDaDat);

  const renderPhimDaDat = () => {
    return danhSachPhimDaDat?.thongTinDatVe?.map((phimDaDat, index) => {
      return (
        <div className="xl:w-1/4 md:w-1/3 p-4" key={index}>
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-40 rounded w-full object-cover object-center mb-6"
              src={phimDaDat.hinhAnh}
              alt="content"
            />
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
              Tên Phim
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              {phimDaDat.tenPhim}
            </h2>
            <p>
              Thời lượng chiếu:
              <p className="text-sm">
                giờ chiếu: {moment(phimDaDat.ngayDat).format("hh-mm A")} ---
                Ngày chiếu:
                {moment(phimDaDat.ngayDat).format("DD-MM-YYYY")}
              </p>
            </p>

            <div className="leading-relaxed text-base">
              Thời lượng Phim: {phimDaDat.thoiLuongPhim}
              <p className="font-bold">Các ghế đã đặt:</p>
              <div className="flex flex-wrap">
                {phimDaDat?.danhSachGhe?.map((item, index) => {
                  return (
                    <div
                      className="bg-red-300 rounded-md  m-2 w-10 h-8 p-1"
                      key={index}
                    >
                      {item.tenGhe}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap w-full mb-5">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-green-600 sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                DANH SÁCH PHIM MÀ BẠN ĐÃ ĐẶT
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Chúc các bạn xem phim vui vẻ nhé
            </p>
          </div>
          <div className="flex ">{renderPhimDaDat()}</div>
        </div>
      </section>
    </>
  );
};

export default DetailBookPage;
