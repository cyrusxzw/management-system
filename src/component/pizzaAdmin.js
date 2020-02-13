import React from "react";
import { Route, Switch } from "react-router-dom";
import Topping from "./topping";
import { Layout, Typography } from "antd";
import SideBar from "./sideBar";

const PizzaAdmin = () => {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar></SideBar>

      <Layout>
        <Header style={{ background: "#fff" }}>
          <Title level={3} style={{ marginTop: "1rem" }}>
            Hello
          </Title>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Switch>
            <Route
              exact
              path="/topping"
              render={() => (<Topping></Topping>)}
            />
            <Route exact path="/" render={() => (<div>Welcome to Admin Panel</div>)}/>
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Pizza Management Sytstem
        </Footer>
      </Layout>
    </Layout>
  );
};

export default PizzaAdmin;
