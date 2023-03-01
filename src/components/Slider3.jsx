import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Slider3 = () => {
  return (
    <>
      <div>
        <Carousel responsive={responsive}>
          <div>
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../1stcard1.png"
                    style={{ height: "18rem", borderRadius: "5px" }}
                  />
                </Card>
              </div>
            </Col>
          </div>

          <div>
            {" "}
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../2ndcard2.png"
                    style={{ height: "18rem", borderRadius: "5px" }}
                  />
                </Card>
              </div>
            </Col>
          </div>
          <div>
            {" "}
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../6thcard.png"
                    style={{ height: "18rem", borderRadius: "5px" }}
                  />
                </Card>
              </div>
            </Col>
          </div>
          <div>
            {" "}
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../5thcard.png"
                    style={{ height: "18rem", borderRadius: "5px" }}
                  />
                </Card>
              </div>
            </Col>
          </div>

          <div>
            {" "}
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../3rdcard1.png"
                    style={{ height: "18rem", borderRadius: "5px" }}
                  />
                </Card>
              </div>
            </Col>
          </div>

          <div>
            {" "}
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../3rdcard2.png"
                    style={{ height: "18rem", borderRadius: "5px" }}
                  />
                </Card>
              </div>
            </Col>
          </div>

          <div>
            {" "}
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../4thcard.png"
                    style={{ height: "18rem", borderRadius: "5px" }}
                  />
                </Card>
              </div>
            </Col>
          </div>
        </Carousel>
      </div>
    </>
  );
};
