import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/coin.png";

const menuItems = [
  {
    key: "Home",
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: "Coins",
    icon: <FundOutlined />,
    label: <Link to="/cryptocurrencies">Cyrptocurrencies</Link>,
  },
  {
    key: "Exchanges",
    icon: <MoneyCollectOutlined />,
    label: <Link to="/exchanges">Exchanges</Link>,
  },
  {
    key: "News",
    icon: <BulbOutlined />,
    label: <Link to="/news">News</Link>,
  },
];

const Navbar = () => {
  
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Coin</Link>
        </Typography.Title>
        <Button className='menu-control-container' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}>
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && <Menu theme="dark" items={menuItems} />}
    </div>
  );
};

export default Navbar;
