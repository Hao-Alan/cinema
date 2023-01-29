import React from "react";
import { Select, Space } from "antd";
import i18n from "../i18n";

const handleChange = (value) => {
  console.log(`selected ${value}`);
  i18n.changeLanguage(value);
};

const SelectButton = () => (
  <Space wrap>
    <Select
      defaultValue="en"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: "en", label: "English" },
        { value: "chi", label: "China" },
        { value: "vi", label: "VietNam" },
        { value: "fr", label: "France" },
      ]}
    />
  </Space>
);

export default SelectButton;
