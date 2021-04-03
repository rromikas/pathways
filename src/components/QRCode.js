import QRCode from "qrcode.react";

const Component = ({ size = 91, value }) => {
  return <QRCode size={size} value={value} />;
};

export default Component;
