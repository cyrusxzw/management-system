import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from "antd";

const SideBar = () => {
    const { Sider } = Layout;
    return (
        <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
            <Link to="/">
              <Icon type="home" />
              <span>Home</span>
            </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/topping">
              <Icon type="pie-chart" />
              <span>Topping</span>
            </Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="/size">
              <Icon type="desktop" />
              <span>Size</span>
            </Link>
            </Menu.Item>
          </Menu>
        </Sider>
    )
}

export default SideBar;