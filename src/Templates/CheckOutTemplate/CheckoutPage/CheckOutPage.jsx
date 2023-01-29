import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  changeActiveTab,
  changeActiveTabByMouse,
  FetchQuanLyDatVe,
  getGheDangDat,
  QuanLyDatVeSliceMoi,
  QuanLyNguoiDungDangNhapServiceReducer,
  resetPhimDangDat,
} from "../../../Redux/counter/QuanLyDatVeServicesReducer";
import "./CheckOutPage.css";
import _ from "lodash";
import {
  CloseOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Tabs } from "antd";
import DetailBookPage from "./DetailBookPage";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import SelectButton from "../../../Components/SelectButton";
import { TOKEN, USER_LOGIN } from "../../../Utils/settings/config";

//  import i18n from "i18next";

export const CheckOutPage = (props) => {
  const dispatch = useDispatch();
  let { id } = useParams();

  const { userLogin } = useSelector((state) => state.fetchLogin);

  console.log("anhHoaUser", userLogin);
  const { filmInfo } = useSelector(
    (state) => state.QuanLyDatVeServicesSliceReducer
  );
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  //danh sach phim dang chon tu Redux
  const { ListGheDangDat, loading, danhSachPhimKhachHangDD } = useSelector(
    (state) => state.QuanLyDatVeServicesSliceReducer
  );

  console.log("loading", loading);
  console.log("quanglyListgheDD", ListGheDangDat);

  useEffect(() => {
    dispatch(FetchQuanLyDatVe(41224));

    window.scrollTo(0, 0);
  }, []);

  const { danhSachGhe, thongTinPhim } = filmInfo;

  const phimDuocChon = {
    maLichChieu: 41224, //thay id bằng 41224
    danhSachVe: ListGheDangDat,
  };

  console.log("phimDuocChon", phimDuocChon);

  const renderRapChieu = () => {
    // const {danhSachPhimKhachHangDD} = useSelector(state=>state.QuanLyDatVeServicesSliceReducer)

    console.log("danhSachPhimKhachHangDD", danhSachPhimKhachHangDD);
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      let indexDD = ListGheDangDat.findIndex(
        (item) => item.maGhe === ghe.maGhe
      );
      if (indexDD != -1) {
        classGheDangDat = "gheDangDat";
      }

      let classGheKhachHangDD = "";
      let indexKHdd = danhSachPhimKhachHangDD.findIndex(
        (item) => item.maGhe === ghe.maGhe
      );
      if (indexKHdd != -1) {
        classGheKhachHangDD = "gheKhachHangKhachDD";
      }

      return (
        <>
          <button
            key={index}
            className={`ghe ${classGheVip} ${classDaDat} ${classGheDangDat} ${classGheKhachHangDD}`}
            disabled={ghe.daDat || classGheKhachHangDD != ""}
            onClick={() => {
              dispatch(getGheDangDat(ghe));
            }}
            style={{ fontSize: "8px" }}
          >
            {ghe.daDat === false ? (
              classGheKhachHangDD === "" ? (
                ghe.tenGhe
              ) : (
                <TeamOutlined />
              )
            ) : (
              <CloseOutlined />
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </>
      );
    });
  };

  return (
    <section>
      <div className="container mx-auto text-center">
        <h1
          className=" text-4xl font-light mb-5 p-3"
          style={{
            color: "#FFF",
            // backgroundColor: "#333",
            textShadow:
              "black 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          TRANG CHI TIẾT ĐĂNG KÝ PHIM
        </h1>
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <div className="w-3/4 bg-green-600 py-2 mx-auto" />
            <div
              style={{
                borderBottom: "50px solid rgba(0, 128, 128, 0.299)",
                borderLeft: "25px solid transparent",
                borderRight: "25px solid transparent",
                height: 0,
                width: "75%",
                margin: "0 auto 10px",
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
            <div>{renderRapChieu()}</div>
            <div className="mt-5  text-red-300 text-center">
              <p>LEGEND MOVIE</p>
              <div className="grid grid-cols-5 gap-4 text-sm">
                <span>GHẾ THƯỜNG</span>
                <span>GHẾ VIP</span>
                <span>GHẾ ĐANG ĐẶT</span>
                <span>CHẾ ĐÃ ĐẶT</span>
                <span>GHẾ KHÁC HÀNG KHÁC ĐANG ĐẶT</span>
              </div>
              <div className="grid grid-cols-5 gap-4 ">
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "gray",
                    margin: "auto ",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "orangered",
                    margin: "auto ",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "greenyellow",
                    margin: "auto ",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "orange",
                    margin: "auto ",
                  }}
                ></div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "purple",
                    margin: "auto ",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className="col-span-4 p-6 rounded-2xl"
            style={{
              WebkitBoxShadow: "-3px 1px 17px 5px rgba(0, 0, 0, 0.77)",
              boxShadow: "-3px 1px 17px 5px rgba(0, 0, 0, 0.77)",
            }}
          >
            <div className="flex flex-col gap-y-3">
              <div>
                <h2 className="mb-5 font-bold text-green-700 text-3xl">
                  {`${ListGheDangDat?.reduce((total, ghe, index) => {
                    return (total += ghe.giaVe);
                  }, 0).toLocaleString()} đ`}
                </h2>
                <hr />

                <div className="my-5 flex justify-between  text-red-400 ">
                  <span className="font-bold pt-3">Tên Phim</span>
                  <span className="text-2xl font-bold">
                    {thongTinPhim.tenPhim}
                  </span>
                </div>
                <hr />
                <div className="my-5 flex justify-between  text-red-400 ">
                  <span className="font-bold pt-3">Tên Cụm Rạp</span>
                  <span className="text-xl font-bold">
                    {thongTinPhim.tenCumRap}
                  </span>
                </div>
                <hr />
                <div className="my-5 flex justify-between">
                  <span className="font-bold">Địa chỉ</span>
                  <span>{thongTinPhim.diaChi}</span>
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

                <div className="my-5 flex justify-between">
                  <span className="font-bold">Ghế đã chọn</span>
                  <span>
                    {_.sortBy(ListGheDangDat, ["stt"]).map((item, index) => {
                      return (
                        <span
                          key={index}
                          className="text-red-300 m-1 text-center font-bold"
                        >
                          {item.tenGhe}
                        </span>
                      );
                    })}
                  </span>
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
                  <span>
                    {ListGheDangDat.reduce((total, item) => {
                      return (total += item.giaVe);
                    }, 0).toLocaleString()}
                  </span>
                </div>
                <hr />
                <div
                  className="my-5 py-3 text-center cursor-pointer hover:bg-red-200 mx-auto"
                  style={{
                    background: "linear-gradient(45deg, yellow, orange)",
                    width: "80%",
                    borderRadius: 20,
                  }}
                  onClick={() => {
                    dispatch(QuanLyDatVeSliceMoi(phimDuocChon))
                      .then(dispatch(FetchQuanLyDatVe(41224)))
                      .then(dispatch(resetPhimDangDat()))
                      .then(dispatch(changeActiveTab()))
                      .then(
                        dispatch(
                          QuanLyNguoiDungDangNhapServiceReducer(accessToken)
                        )
                      );
                  }}
                >
                  {t("register")}
                </div>
                <div>
                  <button>Change language in here</button>
                </div>
                <SelectButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckOutGeneralTab = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userLogin } = useSelector((state) => state.fetchLogin);
  useEffect(() => {
    dispatch(changeActiveTabByMouse("1"));
  }, []);

  const { activeTab } = useSelector(
    (state) => state.QuanLyDatVeServicesSliceReducer
  );

  console.log("activeTab", activeTab);
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `CHỌN GHẾ VÀ THANH TOÁN`,
      children: <CheckOutPage />,
    },
    {
      key: "2",
      label: `CHI TIẾT THANH TOÁN`,
      children: <DetailBookPage />,
    },
    {
      key: "3",
      label: (
        <Link to={"/"}>
          <HomeOutlined
            style={{ fontSize: 20, width: "100%", height: "100%" }}
          />
        </Link>
      ),
      // children: <DetailBookPage />,
    },
  ];
  const operations = (
    <>
      {!_.isEmpty(userLogin) ? (
        <div>
          <div className="mr-5 flex">
            <div
              className="rounded-full w-14 h-14 bg-slate-400 pt-3 mr-4 cursor-pointer"
              onClick={() => {
                navigate("/profile");
              }}
            >
              <UserOutlined className="w-full h-full text-center" />
            </div>
            <button
              className="bg-red-300 px-3 rounded-xl"
              onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                navigate("/");
                window.location.reload();
              }}
            >
              Đăng xuất
            </button>
          </div>
          <div>{userLogin.taiKhoan?.substring(0, 6)}</div>
        </div>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        activeKey={activeTab}
        tabBarExtraContent={operations}
        items={items}
        onChange={onChange}
        onTabClick={(key, _) => {
          // console.log("key", typeof key);
          // console.log("event", event);
          dispatch(changeActiveTabByMouse(key));
        }}
      />
    </div>
  );
};

export default CheckOutGeneralTab;
