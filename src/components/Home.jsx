import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";



export const Home = () => {
  return (
    <>
      <div>
        <div id="cont1" style={{ height: "411px" }}>
          {/* <img
          src="../cityview8.jpg"
          alt="your-image-alt-text-here"
          style={{ width: "1896",height:"422" }}
        /> */}

          <div>
            <center>
              <div id="cont2">
                <Row>
                  <div className="mx-auto">
                    <Col md={4} style={{ width: "70%" }}>
                      <Card>
                        <Card.Body>
                          {/* <Card.Title>Card 1</Card.Title> */}
                          <Card.Text style={{ color: "gray" }}></Card.Text>
                          <Card.Text
                            style={{ fontSize: "20px", fontWeight: "800px" }}
                          >
                            <Row>
                              <Col>Buy</Col>
                              <Col>Rent</Col>
                              <Col>PG/Co-living</Col>
                              <Col>Commercial</Col>
                              <Col>Plots/Land</Col>
                              <Col>Project</Col>
                            </Row>
                            <Row>
                              <Col>
                                {" "}
                                <DropdownButton
                                  id="dropdown-basic-button"
                                  title="Dropdown button"
                                >
                                  <Dropdown.Item href="#/action-1">
                                    Action
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#/action-2">
                                    Another action
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">
                                    Something else
                                  </Dropdown.Item>
                                </DropdownButton>
                              </Col>
                            </Row>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </div>
                </Row>
              </div>
            </center>
          </div>
        </div>

        <div className="mt-5"></div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{ width: "1000px" }}>
          <center>
            <h3>Recommended Insights</h3>
          </center>
          <hr className="mx-auto" style={{ width: "50%" }} />
          <div>
            <Container>
              <Row className="mt-3">
                <Col xs={{ order: "last" }}>
                  <div class="col-sm">
                    <Card style={{ width: "13rem" }}>
                      <Card.Img variant="top" src="../hoodie.webp" />
                      <Card.Body>
                        <Card.Title>Hinjewadi</Card.Title>
                        <Card.Text>
                          <h6>Locality Insight</h6>
                        </Card.Text>
                        {/* <Button variant="primary">Buy Now</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col xs={{ order: "last" }}>
                  <div class="col-sm">
                    <Card style={{ width: "13rem" }}>
                      <Card.Img variant="top" src="../frocks.webp" />
                      <Card.Body>
                        <Card.Title>Baner</Card.Title>
                        <Card.Text>
                          <h6>Locality Insight</h6>
                        </Card.Text>
                        {/* <Button variant="primary">Buy Now</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col>
                  <div class="col-sm">
                    <Card style={{ width: "13rem" }}>
                      <Card.Img variant="top" src="../top.webp" />
                      <Card.Body>
                        <Card.Title>Karve Nagar</Card.Title>
                        <Card.Text>
                          <h6>Locality Insight</h6>
                        </Card.Text>
                        {/* <Button variant="primary">Buy Now</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col xs={{ order: "first" }}>
                  <div class="col-sm">
                    <Card style={{ width: "13rem" }}>
                      <Card.Img variant="top" src="../kurta.jpg" />
                      <Card.Body>
                        <Card.Title>Wakad</Card.Title>
                        <Card.Text>
                          <h6>Locality Insight</h6>
                        </Card.Text>
                        {/* <Button variant="primary">Buy Now</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        
      </div>
    </>
  );
};
