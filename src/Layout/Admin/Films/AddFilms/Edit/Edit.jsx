import React from "react";

import { DatePicker, Form, Input, InputNumber, Radio, Switch } from "antd";
import { useState } from "react";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  QuanLyLayThongTinPhim,
  QuanLyThemPhimUploadHinh,
} from "../../../../../Redux/counter/QuanLyDatVeServicesReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

const Edit = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(QuanLyLayThongTinPhim(id));
  }, []);

  const { ThongTinPhim } = useSelector(
    (state) => state.QuanLyDatVeServicesSliceReducer
  );
  console.log("thongTinPhim", ThongTinPhim);
  console.log("thongTinPhimDate", ThongTinPhim.ngayKhoiChieu);
  let fatedate = moment(ThongTinPhim.ngayKhoiChieu).format("DD/MM/YYYY");
  console.log("fate,da", fatedate);
  //   console.log("hinhAnh", ThongTinPhim.hinhAnh);
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      tenPhim: ThongTinPhim?.tenPhim,
      trailer: ThongTinPhim?.trailer,
      moTa: ThongTinPhim?.moTa,
      ngayKhoiChieu: "",
      dangChieu: ThongTinPhim?.dangChieu,
      sapChieu: ThongTinPhim?.sapChieu,
      hot: ThongTinPhim?.hot,
      danhGia: ThongTinPhim?.danhGia,
      hinhAnh: null,
    },

    onSubmit: (values) => {
      console.log("value", values);
      values.maNhom = "GP01";
      let formData = new FormData(); //formdata object
      for (const key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }

      dispatch(QuanLyThemPhimUploadHinh(formData));
    },
  });

  const handleChangeDatePicker = (value) => {
    // console.log("datePickerChange", moment(value).format("DD/MM/YYYY"));
    let dateUpdate = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", dateUpdate);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  //   const handleChangeFile = (e) => {
  //     let files = e.target.files[0];
  //     console.log("file", files);
  //   };

  const [selectedImage, setSelectedImage] = useState(null);

  //   let momentLichChieu = moment(ThongTinPhim.ngayKhoiChieu).format(
  //     "DD/MM/YYYY A"
  //   );
  return (
    <>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim">
          <Input
            onChange={formik.handleChange}
            name="tenPhim"
            value={formik.values.tenPhim}
          />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            onChange={formik.handleChange}
            name="trailer"
            value={formik.values.trailer}
          />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            onChange={formik.handleChange}
            name="moTa"
            value={formik.values.moTa}
          />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            // name="ngayKhoiChieu"
            onChange={handleChangeDatePicker}
            // defaultValue={dayjs(ThongTinPhim.ngayKhoiChieu, "DD/MM/YYYY")}
            // defaultValue={dayjs(fatedate, "DD/MM/YYYY")}
            value={dayjs(`${fatedate}`, "DD/MM/YYYY")}
            format="DD/MM/YYYY"
          />
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch
            onChange={handleChangeSwitch("dangChieu")}
            defaultChecked={formik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch
            onChange={(value) => {
              formik.setFieldValue("sapChieu", value);
            }}
            defaultChecked={formik.values.sapChieu}
          />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch
            name="hot"
            onChange={handleChangeSwitch("hot")}
            defaultChecked={formik.values.hot}
          />
        </Form.Item>

        <Form.Item label="Sao đánh giá">
          <InputNumber
            name="danhGia"
            onChange={handleChangeInputNumber("danhGia")}
            min={0}
            max={10}
            value={formik.values.danhGia}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh" valuePropName="checked">
          <div>
            <div>
              <img
                src={
                  selectedImage === null
                    ? ThongTinPhim.hinhAnh
                    : URL.createObjectURL(selectedImage)
                }
                width="250px"
                alt="hinh anh"
              />

              <br />
            </div>
            <br />
            <input
              type="file"
              name="hinhAnh"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
                formik.setFieldValue("hinhAnh", event.target.files[0]);
              }}
            />
          </div>
        </Form.Item>
        <Form.Item label="Thêm phim">
          <button type="submit" className="bg-gray-500 rounded-lg px-8 py-1">
            Thêm phim mới
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Edit;
