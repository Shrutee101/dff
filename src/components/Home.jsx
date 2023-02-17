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
import { useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Skeleton, Switch } from "antd";




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
        </div>

        <div className="mt-5"></div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{ width: "1000px" }}>
          <h3>Recommended Properties</h3>
          <h5>Curated especially for you</h5>

          <hr className="mx-auto" style={{ width: "100%" }} />
          <div id="cardc" style={{ width: "1000px" }}>
            <Container>
              <Row className="mt-3">
                <Col xs={{ order: "last" }}>
                  <div class="col-sm">
                    <Card style={{ width: "13rem" }}>
                      <Card.Img variant="top" src="../banglow.webp" />
                      <Card.Body>
                        <Card.Title>Kothrud</Card.Title>
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
                      <Card.Img variant="top" src="../blueb.jpeg"  />
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
                      <Card.Img variant="top" src="../bluebuilding.jpeg" />
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
                      <Card.Img variant="top" src="../pinkb.jpeg" />
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
              </Row>
            </Container>
          </div>
        </div>

        <div className="mt-5" style={{ width: "1000px" }}>
          <h3>Homes by furnishing</h3>
          <h5>Choose your preferred furnishing</h5>

          <hr className="mx-auto" style={{ width: "100%" }} />
        </div>

        <div style={{ width: "1000px" }}>
          <Container>
            <Row className="mt-3">
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "18rem", border: "none" }}>
                    <Card.Img variant="top" src="../furnished.webp" />
                    <Card.Body>
                      <Card.Title>Furnished</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "18rem", border: "none" }}>
                    <Card.Img variant="top" src="../semifurnished.webp" />
                    <Card.Body>
                      <Card.Title>Semifurnished</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "18rem", border: "none" }}>
                    <Card.Img variant="top" src="../unfurnished.webp" />
                    <Card.Body>
                      <Card.Title>Unfurnished</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>



        <div className="mt-5" style={{ width: "1000px" }}>
          <h3>Homes by furnishing</h3>
          <h5>Choose your preferred furnishing</h5>

          <hr className="mx-auto" style={{ width: "100%" }} />
        </div>


        <div style={{ width: "1000px" }}>
          <Container>
            <Row className="mt-3">
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "18rem", border: "none" }}>
                    <Card.Img variant="top" src="../1stcard1.png" style={{width:"315px",height:"400px"}} />
                    
                  </Card>
                </div>
              </Col>
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "18rem", border: "none" }}>
                    <Card.Img variant="top" src="../2ndcard2.png" style={{width:"315px",height:"400px"}}/>
                    
                  </Card>
                </div>
              </Col>
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "18rem", border: "none" }}>
                    <Card.Img variant="top" src="../3rdcard2.png" style={{width:"315px",height:"400px"}}/>
                    
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="mt-5" style={{ width: "1000px" }}>
          <h3>Localities you may like</h3>
          <h5>based on the localities you have explored in Pune</h5>

          <hr className="mx-auto" style={{ width: "100%" }} />
        </div>

        <div style={{ width: "1000px" }}>
          <Container>
            <Row className="mt-3">
              <Col >
                <div class="col-sm">
                  <Card style={{ width: "13rem" }}>
                    <Card.Img variant="top" src="../pic1.jpeg" />
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
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "13rem" }}>
                    <Card.Img variant="top" src="../pic4.webp" />
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
                    <Card.Img variant="top" src="../pic2.jpeg" />
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
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "13rem" }}>
                    <Card.Img variant="top" src="../pic3.jpeg" />
                    <Card.Body>
                      <Card.Title>Balewadi</Card.Title>
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

        <div className="mt-5" style={{ width: "1000px" }}>
          <h3>Homes with AC, food and more</h3>
          <h5>Choose your prefered amenities and services</h5>

          <hr className="mx-auto" style={{ width: "100%" }} />
        </div>

        <div style={{ width: "1000px" }}>
          <Container>
            <Row className="mt-3">
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "18rem", border: "none" }}>
                    <Card.Img variant="top" src="../wifi.webp" />
                    <Card.Body>
                      <Card.Title>Wifi</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "18rem", border: "none" }}>
                    <Card.Img variant="top" src="../foodservice.webp" />
                    <Card.Body>
                      <Card.Title>Food Service</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "18rem", border: "none" }}>
                    <Card.Img variant="top" src="../acroom.webp" />
                    <Card.Body>
                      <Card.Title>AC Room</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="mt-5" style={{paddingLeft:"100px"}}>
          <h3>Top articles on home buying</h3>
          

        </div>
        <div className="mt-5"></div>
        <div className="mt-5"></div>

        <div>
          <Container>
            <Row className="mt-3">
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "18rem", border: "none" }}>
                    <Card.Img variant="top" src="../3buildings.jpeg" />
                    <Card.Body>
                      <Card.Title>
                        <h5>Nestaway Technologies Pvt Ltd</h5>
                      </Card.Title>
                      <Card.Text>70+ Listings in this city</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col>
                <div class="col-sm">
                  <Card style={{ width: "18rem", border: "none" }}>
                    <Card.Img variant="top" src="../metrowork.jpeg" />
                    <Card.Body>
                      <Card.Title>
                        <h5>Nestaway Technologies Pvt Ltd</h5>
                      </Card.Title>
                      <Card.Text>70+ Listings in this city</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col>
                <div class="col-sm">
                  <Card style={{ width: "18rem", border: "none" }}>
                    <Card.Img variant="top" src="../train2.jpeg" />
                    <Card.Body>
                      <Card.Title>
                        <h5>Nestaway Technologies Pvt Ltd</h5>
                      </Card.Title>
                      <Card.Text>70+ Listings in this city</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col>
                <div class="col-sm">
                  <Card style={{ width: "18rem", border: "none" }}>
                    <Card.Img variant="top" src="../railwaylines.jpeg" />
                    <Card.Body>
                      <Card.Title>
                        <h5>Nestaway Technologies Pvt Ltd</h5>
                      </Card.Title>
                      <Card.Text>70+ Listings in this city</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>




            </Row>
          </Container>
        </div>



        <div className="mt-5" style={{ width: "1000px" ,paddingLeft:"100px"}}>
          <h3>Explore Real Estate in Popular Indian Cities</h3>
          <h5>Top cities</h5>

        </div>
        <div className="mt-5"></div>
        
        <div id="cities">
          <Row>
        <Container>
            <Row className="mt-3">
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "12rem", border: "none" }}>

                    <Row>
                      <Col style={{padding:0}}>
                    <Card.Img variant="top" src="../pune.jpg" style={{width:"100px",height:"100px"}}/>
                    </Col>
                    <Col  style={{padding:0}}>
                    <Card.Body>
                      <Card.Title>
                        <h5>Pune</h5>
                      </Card.Title>
                      <Card.Text>33k+ Properties</Card.Text>
                    </Card.Body>
                    </Col>
                    </Row>
                  </Card>
                </div>
              </Col>

              <Col>
                <div class="col-sm">
                  <Card style={{ width: "12rem", border: "none" }}>
                  <Row>
                      <Col  style={{padding:0}}>
                    <Card.Img variant="top" src="../delhi.jpg" style={{width:"100px",height:"100px"}}/>
                    </Col>
                    <Col  style={{padding:0}}>
                    <Card.Body>
                      <Card.Title>
                        <h5>Delhi</h5>
                      </Card.Title>
                      <Card.Text>40k+ Properties</Card.Text>
                    </Card.Body>
                    </Col>
                    </Row>
                  </Card>
                </div>
              </Col>

              <Col>
                <div class="col-sm">
                  <Card style={{ width: "12rem", border: "none" }}>
                  <Row>
                      <Col  style={{padding:0}}>
                    <Card.Img variant="top" src="../chennai.jpg" style={{width:"100px",height:"100px"}}/>
                    </Col>
                    <Col  style={{padding:0}}>
                    <Card.Body>
                      <Card.Title>
                        <h5>Chennai</h5>
                      </Card.Title>
                      <Card.Text>20k+ Properties</Card.Text>
                    </Card.Body>
                    </Col>
                    </Row>
                  </Card>
                </div>
              </Col>

              <Col>
                <div class="col-sm">
                  <Card style={{ width: "12rem", border: "none" }}>
                  <Row>
                      <Col  style={{padding:0}}>
                    <Card.Img variant="top" src="../banglore.jpg" style={{width:"100px",height:"100px"}}/>
                    </Col>
                    <Col  style={{padding:0}}>
                    <Card.Body>
                      <Card.Title>
                        <h5>Banglore</h5>
                      </Card.Title>
                      <Card.Text>20k+ Properties</Card.Text>
                    </Card.Body>
                    </Col>
                    </Row>
                  </Card>
                </div>
              </Col>


            </Row>
          </Container>
          
          </Row>

          <Row>
        <Container>
            <Row className="mt-3">
              <Col>
                <div class="col-sm">
                  <Card style={{ width: "12rem", border: "none" }}>

                    <Row>
                      <Col  style={{padding:0}}>
                    <Card.Img variant="top" src="../kolkata.jpg" style={{width:"100px",height:"100px"}}/>
                    </Col>
                    <Col  style={{padding:0}}>
                    <Card.Body>
                      <Card.Title>
                        <h5>Kolkata</h5>
                      </Card.Title>
                      <Card.Text>15k+ Properties</Card.Text>
                    </Card.Body>
                    </Col>
                    </Row>
                  </Card>
                </div>
              </Col>

              <Col>
                <div class="col-sm">
                  <Card style={{ width: "14rem", border: "none" }}>
                  <Row>
                      <Col  style={{padding:0}}>
                    <Card.Img variant="top" src="../hyderabad.jpg" style={{width:"100px",height:"100px"}}/>
                    </Col>
                    <Col  style={{padding:0}}>
                    <Card.Body>
                      <Card.Title>
                        <h5>Hyderabad</h5>
                      </Card.Title>
                      <Card.Text>10k+ Properties</Card.Text>
                    </Card.Body>
                    </Col>
                    </Row>
                  </Card>
                </div>
              </Col>

              <Col>
                <div class="col-sm">
                  <Card style={{ width: "12rem", border: "none" }}>
                  <Row>
                      <Col  style={{padding:0}}>
                    <Card.Img variant="top" src="../mumbai.jpg" style={{width:"100px",height:"100px"}}/>
                    </Col>
                    <Col  style={{padding:0}}>
                    <Card.Body>
                      <Card.Title>
                        <h5>Mumbai</h5>
                      </Card.Title>
                      <Card.Text>40k+ Properties</Card.Text>
                    </Card.Body>
                    </Col>
                    </Row>
                  </Card>
                </div>
              </Col>

              <Col>
                <div class="col-sm">
                  <Card style={{ width: "14rem", border: "none" }}>
                  <Row>
                      <Col  style={{padding:0}}>
                    <Card.Img variant="top" src="../ahmedabad.jpg" style={{width:"100px",height:"100px"}}/>
                    </Col>
                    <Col  style={{padding:0}}>
                    <Card.Body>
                      <Card.Title>
                        <h5>Ahmedabad</h5>
                      </Card.Title>
                      <Card.Text>26k+ Properties</Card.Text>
                    </Card.Body>
                    </Col>
                    </Row>
                  </Card>
                </div>
              </Col>


            </Row>
          </Container>
          
          </Row>

        </div>


        <div className="mt-5"></div>
        <div className="mt-5"></div>
        <div className="mt-4"></div>
        <div >
          <Row className="mx-auto" style={{paddingLeft:"220px"}}>
            <Col>
              <img src="appstore.webp"  />
            </Col>
          </Row>
        </div>
        <div className="mt-4"></div>
      </div>
    </>
  );
};
