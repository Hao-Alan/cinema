import React from "react";
import { Button, Table } from "antd";
import {
  AudioOutlined,
  DeleteOutlined,
  EditOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieFeature,
  tatCaPhim,
} from "../../../Redux/counter/FeatureSlice";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  QuanLyLayThongTinPhim,
  XoaPhim,
  XoaPhimPhim,
} from "../../../Redux/counter/QuanLyDatVeServicesReducer";

const { Search } = Input;
const FilmsAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieFeature());
  }, []);
  const navigate = useNavigate();
  const { movieFeatureCopy } = useSelector((state) => state.FeatureSlice);
  // console.log("FeatureSlice", movieFeatureCopy);

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      defaultSortOrder: "descend",
      width: "10%",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        if (a.tenPhim.toLowerCase().trim() < b.tenPhim.toLowerCase().trim()) {
          return -1;
        }
        if (a.tenPhim.toLowerCase().trim() > b.tenPhim.toLowerCase().trim()) {
          return 1;
        }
        return 0;
      },
      width: "20%",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (text, filmList, index) => {
        return (
          <div>
            <img
              src={filmList.hinhAnh}
              alt={filmList.hinhAnh}
              style={{ width: 50, height: 50 }}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = `https://picsum.photos/${index}/200/300`;
              }}
            />
          </div>
        );
      },
      // width: "10%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (text, filmList, index) => {
        return (
          <div>
            {filmList.moTa.length > 50
              ? filmList.moTa.substring(0, 50)
              : filmList.moTa}{" "}
            ...
          </div>
        );
      },
      // width: "20%",
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      render: (text, filmList, index) => {
        return (
          <div>
            <Link key={1} to={`/admin/films/addFilms/edit/${filmList.maPhim}`}>
              <EditOutlined className="text-4xl text-blue-500 mr-5" />
            </Link>
            <span
              onClick={() => {
                // .then(navigate("/"));
                if (
                  window.confirm("bạn có chắc muốn xóa phim" + filmList.tenPhim)
                ) {
                  dispatch(XoaPhimPhim(filmList.maPhim));
                }
              }}
              key={2}
              style={{ cursor: "pointer" }}
            >
              <DeleteOutlined className="text-4xl text-red-500" />
            </span>
            <Link //span Calenda
              to={`/admin/films/showTimes/${filmList.maPhim}/${filmList.tenPhim}}`}
              key={2}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            >
              <CalendarOutlined className="text-4xl text-green-500" />
            </Link>
          </div>
        );
      },
      width: "20%",
    },
  ];
  const data = movieFeatureCopy;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value) => {
    console.log(value);
    dispatch(fetchMovieFeature(value));
  };

  return (
    <div>
      <Button className="mb-5">Thêm Phim</Button>
      <h3 className="text-3xl text-red-400">Quản Lý Danh Sách Phim</h3>
      <Search
        placeholder="input search text"
        allowClear
        // enterButton="Tìm kiếm"
        // loading
        size="large"
        onSearch={onSearch}
        className="mb-12"
      />

      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </div>
  );
};

export default FilmsAdmin;
