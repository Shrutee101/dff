import React from 'react'
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
    items: 4,
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

export const Slider4 = () => {
  return (
    <>
    <div>
    <Carousel responsive={responsive}>
              <div>
              <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "19rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pic1.jpeg"
                    style={{ height: "13rem", borderRadius: "10px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h5>
                        <b>Furnished</b>
                      </h5>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            
              </div>

              <div>
              <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "19rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pic2.jpeg"
                    style={{ height: "13rem", borderRadius: "10px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h5>
                        <b>Furnished</b>
                      </h5>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            
              </div>
              <div>
              <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "19rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pic3.jpeg"
                    style={{ height: "13rem", borderRadius: "10px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h5>
                        <b>Furnished</b>
                      </h5>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            
              </div>

              <div>
              <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "19rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pic4.webp"
                    style={{ height: "13rem", borderRadius: "10px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h5>
                        <b>Furnished</b>
                      </h5>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            
              </div>
              <div>
              <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "25rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pic1.jpeg"
                    style={{ height: "13rem", borderRadius: "10px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h5>
                        <b>Furnished</b>
                      </h5>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            
              </div>
              
            </Carousel>
    </div>
    </>
  )
}
