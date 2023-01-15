import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FetchQuanLyDatVe } from "../../../Redux/counter/QuanLyDatVeServicesReducer";

const CheckOutPage = () => {
  const { userLogin } = useSelector((state) => state.fetchLogin);
  const { filmInfo } = useSelector(
    (state) => state.QuanLyDatVeServicesSliceReducer
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log("id", id);
  useEffect(() => {
    dispatch(FetchQuanLyDatVe(41224));
  }, []);

  console.log("filminfor", filmInfo);

  return (
    <section className="mt-28">
      <div className="container mx-auto text-center">
        <h1
          className=" text-4xl font-light mb-5 p-3"
          style={{
            color: "#FFF",
            // backgroundColor: "#333",
            textShadow:
              "black 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px",
          }}
        >
          TRANG CHI TIẾT ĐĂNG KÝ PHIM
        </h1>
        <div className="grid grid-cols-12">
          <div className="col-span-1" />
          <div className="col-span-6">
            <div className="w-3/4 bg-green-600 py-2" />
            <div
              style={{
                borderBottom: "50px solid rgba(0, 128, 128, 0.299)",
                borderLeft: "25px solid transparent",
                borderRight: "25px solid transparent",
                height: 0,
                width: "75%",
                fontWeight: "bold",
                color: "blue",
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                filter: "drop-shadow(2px 39px 45px #000000)",
                WebkitFilter: "drop-shadow(2px 39px 45px #000000)",
                MozFilter: "drop-shadow(2px 39px 45px #000000)",
              }}
            >
              {" "}
              Màn hình
            </div>
          </div>
          <div
            className="col-span-4 p-6 rounded-2xl"
            style={{
              WebkitBoxShadow: "-3px 1px 17px 5px rgba(0, 0, 0, 0.77)",
              boxShadow: "-3px 1px 17px 5px rgba(0, 0, 0, 0.77)",
            }}
          >
            <div className="flex flex-col gap-y-20">
              <div>
                <h2 className="mb-5 font-bold text-green-700 text-3xl">0 đ</h2>
                <hr />
                <div className="my-5 flex justify-between  text-red-400 ">
                  <span className="font-bold pt-3">Tên Phim</span>
                  <span className="text-2xl font-bold">Lật mặt</span>
                </div>
                <hr />
                <div className="my-5 flex justify-between">
                  <span className="font-bold">Địa chỉ</span>
                  <span>56, phước Lăng, Tam Phước</span>
                </div>
                <hr />
                <div className="my-5 flex justify-between">
                  <span className="font-bold">Email</span>
                  <span>{userLogin.email}</span>
                </div>
                <hr />
                <div className="my-5 flex justify-between">
                  <span className="font-bold">Phone</span>
                  <span>{userLogin.soDT} </span>
                </div>
                <hr />
                <div className="mb-5 flex justify-between mt-5">
                  <span className="font-bold">Mã giảm giá</span>
                  <button className="bg-gray-500 mr-3 px-5 py-1 rounded-xl">
                    Áp dụng
                  </button>
                </div>
                <hr />
                <div className="my-5 flex justify-between">
                  <span className="font-bold">Hình thức thanh toán</span>
                  <span>H16, H15</span>
                </div>
                <hr />
              </div>
              <div>
                <div className="mb-5 flex justify-between">
                  <span className="font-bold">Uư Đãi</span>
                  <span>0%</span>
                </div>
                <hr />
                <div className="mb-5 flex justify-between">
                  <span className="font-bold">Tổng Tiền</span>
                  <span>150.000</span>
                </div>
                <hr />
                <div
                  className="my-5 py-3 text-center cursor-pointer hover:bg-red-200 mx-auto"
                  style={{
                    background: "linear-gradient(45deg, yellow, orange)",
                    width: "80%",
                    borderRadius: 20,
                  }}
                >
                  BOOKING TICKET
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1" />
        </div>
      </div>
    </section>
  );
};

export default CheckOutPage;
