import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Col, Image, Row } from "react-bootstrap";

const Gallery = (props) => {
  const data = [
    {
      image:
        "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg",
      text: "img1",
    },
    {
      image:
        "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg",
      text: "img2",
    },
    {
      image:
        "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg",
      text: "img3",
    },
  ];
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "100px auto",
            justifyContent: "space-around",
          }}
        >
          {data.map((item) => (
            <div
              style={{
                margin: "10px",
              }}
            >
              <Image
                src={item.image}
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "10px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
