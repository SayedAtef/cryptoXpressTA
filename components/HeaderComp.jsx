import { Layout, Image } from "antd";
const { Header } = Layout;
const HeaderComp = () => {
  return (
    <Header className="topbar">
      <Image height={27} src="/menu.svg" />
      <Image width={100} src="/logo.svg" />
      <img src="/travel-guide.png" alt="travel-guide" className="travelImage" />
    </Header>
  );
};

export default HeaderComp;
