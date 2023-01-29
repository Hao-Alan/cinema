import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Films from "../../Components/Films";
import Dashboard from "../../Layout/Admin/Users/Users";
import FilmsAdmin from "../../Layout/Admin/Films/FilmsAdmin";
import CheckOutTemplate from "../CheckOutTemplate/CheckOutTemplate";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to="/admin/users">Users</Link>, "1", <PieChartOutlined />),
  getItem("Add Film", "2", <FileOutlined />, [
    getItem(<Link to="/admin/films">Films</Link>, "3"),
    getItem(<Link to="/admin/films/addFilms">Add Film</Link>, "4"),
  ]),
  getItem(
    <Link to="/admin/showtimes">Show time</Link>,
    "6",
    <DesktopOutlined />
  ),
];
const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            backgroundImage:
              "url(https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {/* <FilmsAdmin /> */}
            {/* <Dashboard /> */}
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminTemplate;
