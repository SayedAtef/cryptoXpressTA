import { Breadcrumb } from "antd";

const BreadCrumbComp = () => {
  return (
    <Breadcrumb separator=">" className="breadContainer">
      <Breadcrumb.Item className="bread">Home</Breadcrumb.Item>
      <Breadcrumb.Item className="bread">Andaman Travel Guide</Breadcrumb.Item>
      <Breadcrumb.Item className="itemBold">Havelock</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbComp;
