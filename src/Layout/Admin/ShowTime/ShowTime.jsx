import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Cascader,
  Select,
  InputNumber,
} from "antd";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import {
  QuanLyLayThongTinCumRapTheoHeThong,
  QuanLyLayThongTinHeThongRap,
  QuanLyTaoLichChieu,
} from "../../../services/QuanLyDatVeServices";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import moment from "moment";

const ShowTime = () => {
  useEffect(() => {
    LayThongTinHeThongRap();
  }, []);
  const [heThongRapvaCumRap, setHeThongRapvaCumRap] = useState({
    heThongRap: [],
    cumRap: [],
  });

  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      maPhim: id,
      ngayChieuGioChieu: "",
      maRap: "BHDStar",
      giaVe: 75000,
    },
    onSubmit: async (values) => {
      try {
        const response = await QuanLyTaoLichChieu(values);
        console.log(response);
        alert("ban da submit");
      } catch (error) {
        console.log("error", error.response);
      }
    },
  });
  console.log("values", formik.values);

  const onChangeCumRap = (values) => {
    // console.log("valuesCumRap", values);
    formik.setFieldValue("cumRap", values);
  };
  const onChangeHeThongRap = async (values) => {
    // console.log("valuesHeThongRap", values);
    try {
      const response = await QuanLyLayThongTinCumRapTheoHeThong(values);
      console.log("response", response.data.content);
      setHeThongRapvaCumRap({
        ...heThongRapvaCumRap,
        cumRap: response.data.content,
      });
    } catch (error) {
      console.log("Error", error.response.data);
    }
  };

  const onChangeDatePicker = (values) => {
    console.log(values);
    const modifiedValues = moment(values).format("DD/MM/YYYY hh:mm:ss");
    formik.setFieldValue("ngayChieuGioChieu", modifiedValues);
  };
  const onOk = (values) => {
    // console.log("onOk: ", values);
    const modifiedValues = moment(values).format("DD/MM/YYYY hh:mm:ss");
    formik.setFieldValue("ngayChieuGioChieu", modifiedValues);
  };
  const onChangeGiaVe = (values) => {
    formik.setFieldValue("giaVe", values);
  };

  async function LayThongTinHeThongRap() {
    try {
      const response = await QuanLyLayThongTinHeThongRap();
      setHeThongRapvaCumRap({
        ...heThongRapvaCumRap,
        heThongRap: response.data.content,
      });
    } catch (error) {
      console.log("errorThongTinHeThongRap: ", error);
    }
  }

  // console.log("responseHeThongRap: ", heThongRapvaCumRap);

  const heThongRapList = () => {
    return heThongRapvaCumRap.heThongRap.map((item) => {
      return {
        value: item.maHeThongRap,
        label: item.maHeThongRap,
      };
    });
  };
  console.log(heThongRapList());

  const cumRapList = () => {
    return heThongRapvaCumRap.cumRap.map((item) => {
      return {
        value: item.tenCumRap,
        label: item.tenCumRap,
      };
    });
  };

  const { tenPhim } = useParams();
  return (
    <div className="container">
      <Form
        onSubmitCapture={formik.handleSubmit}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <h2>
          C??c b???n ??ang ?????t v?? phim{" "}
          <span className="text-red-300 text-4xl">{tenPhim}</span>
        </h2>

        <Form.Item label="H??? th???ng r???p" name="heThongRap">
          <Select
            options={heThongRapList()}
            onChange={onChangeHeThongRap}
            placeholder="H??? Th???ng R???p"
          />
        </Form.Item>

        <Form.Item label="C???m R???p" name="cumRap">
          <Select
            options={cumRapList()}
            onChange={onChangeCumRap}
            placeholder="Ch???n C???m R???p"
          />
        </Form.Item>
        <Form.Item label="Ng??y chi???u, gi??? chi???u">
          <DatePicker showTime onChange={onChangeDatePicker} onOk={onOk} />
        </Form.Item>

        <Form.Item label="Gi?? v??">
          <InputNumber onChange={onChangeGiaVe} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-300 hover:bg-blue-400"
          >
            T???o l???ch chi???u
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ShowTime;
