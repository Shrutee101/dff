import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";

import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Skeleton, Switch } from "antd";
import { Slider } from "antd";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { Slider2 } from "./Slider2";
import { Projects } from "./Projects";

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

export const Home = () => {
  return (
    <>
      <div>
        <div id="cont1">
          <img
            // src="../greyb1.jpg"
            src="../blueb2.jpg"
            alt="your-image-alt-text-here"
            style={{ width: "100%", height: "350px" }}
          />

          {/* <div style={{paddingLeft:"300px",paddingTop:"150px"}}>
          <img
          src="../map.jpg"
          alt="your-image-alt-text-here"
          style={{ width: "18rem",height:"9rem" }}
        />
        </div> */}

          <div>
            <div className="cont2">
              <div style={{ margin: "20px", paddingLeft: "40px" }}>
                <Row style={{ height: "30px" }}>
                  <Col>
                    <b>Buy</b>
                  </Col>
                  <Col>
                    <b>Rent</b>
                  </Col>

                  <Col>
                    <b>Co-Living</b>
                  </Col>
                  <Col>
                    <b>Plots & Land</b>
                  </Col>

                  <Col>
                    <b>Projects</b>
                  </Col>
                </Row>
              </div>
              <hr />
              <div style={{ margin: "12px" }}>
                <Row>
                  <Col>
                    <Form className="d-flex">
                      <div
                        style={{
                          paddingTop: "5px",
                          color: "blue",
                          marginLeft: "10px",
                          paddingLeft: "5px",
                        }}
                      >
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </div>

                      <Form.Control
                        type="search"
                        placeholder="Search Property Here"
                        className="me-2"
                        aria-label="Search"
                        style={{ marginLeft: "20px", border: "0px" }}
                      />

                      <div
                        style={{
                          paddingTop: "5px",
                          marginLeft: "20px",
                          // marginRight: "20px",
                          color: "blue",
                        }}
                      >
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                      </div>
                      <div
                        style={{
                          paddingTop: "5px",
                          marginLeft: "20px",
                          marginRight: "20px",
                          color: "blue",
                        }}
                      >
                        <i class="fa fa-microphone" aria-hidden="true"></i>
                      </div>

                      <Button variant="primary">Search</Button>
                    </Form>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "90px", marginLeft: "490px" }}>
          <Form className="d-flex">
            <div style={{ margin: "5px", paddingTop: "10px" }}>
              <h5> Recent searches:</h5>
            </div>
            <div>
              <Button
                variant="light"
                style={{ margin: "5px", borderRadius: "20px" }}
              >
                <i class="fa fa-undo" aria-hidden="true"></i>&ensp;PG in
                Hinjewadi Phase1....
              </Button>
            </div>
            <div>
              <Button
                variant="light"
                style={{ margin: "5px", borderRadius: "20px" }}
              >
                <i class="fa fa-clock-o" aria-hidden="true"></i>&ensp;View all
                searches
              </Button>
            </div>
          </Form>
        </div>

        <div className="mt-4"></div>

        <div>
          <div>
            <Row>
              <Col sm={8} style={{ width: "900px", marginLeft: "120px" }}>
                <Row>
                  <div>
                    <div>
                      <h5>
                        <b>Continue browsing...</b>
                      </h5>
                      <Form className="d-flex">
                        <div>
                          <Button
                            variant="light"
                            style={{ margin: "5px", borderRadius: "20px" }}
                          >
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                              style={{ color: "blue" }}
                            ></i>
                            &ensp;Buy in Pune
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant="light"
                            style={{ margin: "5px", borderRadius: "20px" }}
                          >
                            <i
                              class="fa fa-bed"
                              aria-hidden="true"
                              style={{ color: "blue" }}
                            ></i>
                            &ensp;PG in Pune
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant="light"
                            style={{ margin: "5px", borderRadius: "20px" }}
                          >
                            <i
                              class="fa fa-location-arrow"
                              aria-hidden="true"
                              style={{ color: "blue" }}
                            ></i>
                            &ensp;Explore New City
                          </Button>
                        </div>
                      </Form>
                      <hr />
                    </div>
                  </div>
                </Row>
                <Row>
                  <div className="mt-3"></div>
                  <h3>
                    <b>Recommended Properties</b>
                  </h3>
                  <h5>Curated especially for you</h5>
                  <div className="mt-3"></div>
                  <Carousel responsive={responsive}>
                    <div>
                      <Col xs={{ order: "last" }}>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../banglow.webp"
                              style={{ height: "12rem",borderRadius:"10px" }}
                            />
                            <Card.Body>
                              <Card.Title>
                                <b>Kothrud</b>
                                <h6>3BHK Luxury Villa</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>

                    <div>
                      {" "}
                      <Col xs={{ order: "last" }}>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../blueb.jpeg"
                              style={{ height: "12rem",borderRadius:"10px" }}
                            />
                            <Card.Body>
                              <Card.Title>
                                <b>Baner</b>
                                <h6>1BHK , 2BHK Homes</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>

                    <div style={{ paddingLeft: "0px" }}>
                      <Col>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../bluebuilding.jpeg"
                              style={{ height: "12rem" ,borderRadius:"10px"}}
                            />
                            <Card.Body>
                              <Card.Title>
                                <b>Karvenagar</b>
                                <h6>1BHK Homes</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>

                    <div>
                      {" "}
                      <Col xs={{ order: "first" }}>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../pinkb.jpeg"
                              style={{ height: "12rem",borderRadius:"10px" }}
                            />
                            <Card.Body>
                              <Card.Title>
                                <b>Hinjewadi</b>
                                <h6>Locality Insight</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>

                    <div>
                      <Col xs={{ order: "last" }}>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../slidern3.webp"
                              style={{ height: "12rem",borderRadius:"10px" }}
                            />
                            <Card.Body>
                              <Card.Title>
                                <b>Wakad</b>
                                <h6>Locality Insight</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>

                    <div>
                      <Col xs={{ order: "last" }}>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../slidern2.jpeg"
                              style={{ height: "12rem" ,borderRadius:"10px"}}
                            />
                            <Card.Body>
                              <Card.Title>
                                <b>Shivajinagar</b>
                                <h6>Locality Insight</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>

                    <div>
                      {" "}
                      <Col xs={{ order: "first" }}>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../slidern1.jpeg"
                              style={{ height: "12rem" ,borderRadius:"10px"}}
                            />
                            <Card.Body>
                              <Card.Title>
                                <b>Balewadi</b>
                                <h6>Locality Insight</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>

                    <div>
                      {" "}
                      <Col xs={{ order: "first" }}>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../slider4.webp"
                              style={{ height: "12rem" ,borderRadius:"10px"}}
                            />
                            <Card.Body>
                              <Card.Title>
                                <b>Katraj</b>
                                <h6>Locality Insight</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>
                  </Carousel>
                </Row>

                <Row>
                  <div className="mt-5"></div>
                  <h3>
                    <b>Localities you may like</b>
                  </h3>
                  <h5>based on the localities you have explored in Pune</h5>
                  <div className="mt-3"></div>
                  <Slider2 />
                </Row>

                <Row>
                  <div className="mt-5"></div>
                  <h3>
                    <b>Recommended Insights</b>
                  </h3>
                  <h5>based on your search results & history</h5>
                  <div className="mt-3"></div>
                  <Carousel responsive={responsive}>
                    <div>
                      <Col xs={{ order: "last" }}>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../Rinsight1.png"
                              style={{ height: "13rem" }}
                            />
                            <Card.Body style={{paddingLeft:"0px",paddingTop:"10px"}}>
                              <Card.Title>
                                <h6>Lotus Urban Homes,Charoli</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>

                    <div>
                      {" "}
                      <Col xs={{ order: "last" }}>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../Rinsight2.png"
                              style={{ height: "13rem" }}
                            />
                            <Card.Body style={{paddingLeft:"0px",paddingTop:"10px"}}>
                              <Card.Title>
                                <h6>Amarnath River,Charoli</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>

                    <div style={{ paddingLeft: "0px" }}>
                      <Col>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../Rinsight3.png"
                              style={{ height: "13rem" }}
                            />
                            <Card.Body style={{paddingLeft:"0px",paddingTop:"10px"}}>
                              <Card.Title>
                                <h6>Prapti Homes,Hinjewadi</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>

                    <div>
                      {" "}
                      <Col xs={{ order: "first" }}>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../Rinsight4.png"
                              style={{ height: "13rem" }}
                            />
                            <Card.Body style={{paddingLeft:"0px",paddingTop:"10px"}}>
                              <Card.Title>
                                <h6>Wagholi Reviews</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>

                    <div>
                      <Col xs={{ order: "last" }}>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../Rinsight7.png"
                              style={{ height: "13rem" }}
                            />
                            <Card.Body style={{paddingLeft:"0px",paddingTop:"10px"}}>
                              <Card.Title>
                                <h6>Wagholi Price Insights</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>

                    <div>
                      <Col xs={{ order: "last" }}>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../Rinsight6.png"
                              style={{ height: "13rem" }}
                            />
                            <Card.Body style={{paddingLeft:"0px",paddingTop:"10px"}}>
                              <Card.Title>
                                <h6>Wagholi Transaction Price</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>

                    <div>
                      {" "}
                      <Col xs={{ order: "first" }}>
                        <div class="col-sm">
                          <Card style={{ width: "13rem", border: "none" }}>
                            <Card.Img
                              variant="top"
                              src="../Rinsight8.png"
                              style={{ height: "13rem" }}
                            />
                            <Card.Body style={{paddingLeft:"0px",paddingTop:"10px"}}>
                              <Card.Title>
                                <h6>Buyer's Guide</h6>
                              </Card.Title>

                              {/* <Button variant="primary">Buy Now</Button> */}
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </div>
                  </Carousel>
                </Row>

                <div className="mt-5"></div>
              </Col>
              <Col sm={4}>
                <div
                  className="sidefilter"
                  style={{
                    marginLeft: "100px",
                    width: "350px",
                    borderRadius: "10px",
                  }}
                >
                  <Row style={{ margin: "10px" }}>
                    <Form className="d-flex">
                      <div style={{ marginRight: "80px" }}>
                        <b>Verified Properties</b>
                      </div>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        // label="Verified Properties"
                      />
                    </Form>
                  </Row>
                  <hr />
                  <Row style={{ margin: "10px" }}>
                    <Form className="d-flex">
                      <div style={{ marginRight: "90px" }}>
                        <b>Hide already seen</b>
                      </div>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        // label="Verified Properties"
                      />
                    </Form>
                  </Row>
                  <hr />
                  <Row style={{ margin: "10px" }}>
                    <div>
                      <Form>
                        <h5>
                          <b>Localities</b>
                        </h5>
                        <Row>
                          <Col>
                            {["checkbox"].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={`Kharadi`}
                                />
                              </div>
                            ))}
                          </Col>
                          <Col>
                            {["checkbox"].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={`Wakad`}
                                />
                              </div>
                            ))}
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            {["checkbox"].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={`Kothrud`}
                                />
                              </div>
                            ))}
                          </Col>
                          <Col>
                            {["checkbox"].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={`Wagholi`}
                                />
                              </div>
                            ))}
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            {["checkbox"].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={`Hadapsar`}
                                />
                              </div>
                            ))}
                          </Col>
                          <Col>
                            {["checkbox"].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={`Baner`}
                                />
                              </div>
                            ))}
                          </Col>
                        </Row>
                      </Form>
                      <Button
                        variant="light"
                        style={{
                          height: "30px",
                          borderRadius: "10px",
                          padding: "2px",
                          marginLeft: "70px",
                        }}
                      >
                        <i class="fa fa-search" aria-hidden="true"></i>
                        &ensp;Explore more
                      </Button>
                    </div>
                  </Row>
                  <hr />
                  <Row style={{ margin: "10px" }}>
                    <h5>
                      <b>Property Price</b>
                    </h5>
                    <Slider
                      range
                      defaultValue={[20, 50]}
                      style={{ width: "300px", marginLeft: "10px" }}
                    />
                  </Row>
                  <hr/>
                  <Row style={{ margin: "10px" }}>
                    
                  <h5>
                      <b>Furnished or Not</b>
                    </h5>
                    <div className="mt-2">
                    {["checkbox"].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={`Semifurnished`}
                                />
                              </div>
                            ))}
                    </div>

                    <div>
                    {["checkbox"].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={`Furnished`}
                                />
                              </div>
                            ))}
                    </div>

                    <div>
                    {["checkbox"].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type={type}
                                  id={`default-${type}`}
                                  label={`Unfurnished`}
                                />
                              </div>
                            ))}
                    </div>

                  </Row>
                  <hr/>


                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <div style={{ marginLeft: "120px", width: "1250px" }}>
            <Row>
              <h3>
                <b>Projects in high demand</b>
              </h3>
              <h5>The most explored projects in Pune</h5>
              <div className="mt-3"></div>

              <Projects />
            </Row>
          </div>
        </div>

        <div className="mt-4"></div>
        <div>
          <Row className="mx-auto" style={{ paddingLeft: "200px" }}>
            <Col>
              <img src="appstore.webp" style={{ width: "1100px" }} />
            </Col>
          </Row>
        </div>
        <div className="mt-4"></div>
      </div>
    </>
  );
};
