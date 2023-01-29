import React from "react";

import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useState } from "react";
import { useFormik } from "formik";
import moment from "moment";

const AddFilms = (props) => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      console.log("value", values);
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
          <Input onChange={formik.handleChange} name="tenPhim" />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input onChange={formik.handleChange} name="trailer" />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input onChange={formik.handleChange} name="moTa" />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            name="ngayKhoiChieu"
            format={"DD/MM/YYYY"}
            onChange={handleChangeDatePicker}
          />
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch onChange={handleChangeSwitch("dangChieu")} />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch
            onChange={(value) => {
              formik.setFieldValue("sapChieu", value);
            }}
          />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch name="hot" onChange={handleChangeSwitch("hot")} />
        </Form.Item>

        <Form.Item label="Sao đánh giá">
          <InputNumber
            name="danhGia"
            onChange={handleChangeInputNumber("danhGia")}
            min={0}
            max={10}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh" valuePropName="checked">
          <input type="file" name="hinhAnh" />
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

export default AddFilms;
