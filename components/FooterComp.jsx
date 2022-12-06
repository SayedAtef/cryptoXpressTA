import { Image } from "antd";

const FooterComp = () => {
  return (
    <footer>
      <Image width={100} src="/logo.svg" style={{ alignSelf: "center" }} />
      <p style={{ padding: "0 20px" }}>
        We’re a small crew of locals and Andaman-lovers helping you make the
        most of your trip to the Andamans.
      </p>
      <Image width={200} src="/startup.svg" />
    </footer>
  );
};

export default FooterComp;
