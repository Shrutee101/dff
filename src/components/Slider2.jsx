import React from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
     items: 3,
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

export const Slider2 = () => {
  return (
    <>
      <Carousel responsive={responsive}>
        <div style={{marginRight:"10px"}}>
          <Card
            style={{ width: "18rem"}}
            actions={[
              <h6 style={{color:"blue"}}>
                <b>Insights</b>
              </h6>,
              <h6 style={{color:"blue"}}>
                <b>Properties</b>
              </h6>,
            ]}
          >
            <Meta
              avatar={
                <Avatar
                  src="slider21.jpeg"
                  style={{ width: "60px", height: "60px" }}
                />
              }
              title="Kharadi"
              description="Rs.5,000-10,000/month "
            />
          </Card>
        </div>

        <div>
          {" "}
          <Card
            style={{ width: "18rem" }}
            actions={[
              <h6 style={{color:"blue"}}>
                <b>Insights</b>
              </h6>,
              <h6  style={{color:"blue"}}>
                <b>Properties</b>
              </h6>,
            ]}
          >
            <Meta
              avatar={
                <Avatar
                  src="slider22.jpeg"
                  style={{ width: "60px", height: "60px" }}
                />
              }
              title="Hadapsar"
              description="Rs.6,550-20,000/month "
            />
          </Card>
        </div>
        <div>
          {" "}
          <Card
            style={{ width: "18rem" }}
            actions={[
              <h6 style={{color:"blue"}}>
                <b>Insights</b>
              </h6>,
              <h6 style={{color:"blue"}}>
                <b>Properties</b>
              </h6>,
            ]}
          >
            <Meta
              avatar={
                <Avatar
                  src="slider23.jpeg"
                  style={{ width: "60px", height: "60px" }}
                />
              }
              title="Wagholi"
              description="Rs.9,000-12,000/month "
            />
          </Card>
        </div>
        <div>
          {" "}
          <Card
            style={{ width: "18rem"}}
            actions={[
              <h6 style={{color:"blue"}}>
                <b>Insights</b>
              </h6>,
              <h6 style={{color:"blue"}}>
                <b>Properties</b>
              </h6>,
            ]}
          >
            <Meta
              avatar={
                <Avatar
                  src="slider25.webp"
                  style={{ width: "60px", height: "60px" }}
                />
              }
              title="Chinchwad" 
              description="Rs.8,550-15,000/month "
              
            />
            
          </Card>
        </div>
        <div>
          {" "}
          <Card
            style={{ width: "18rem"}}
            actions={[
              <h6 style={{color:"blue"}}>
                <b>Insights</b>
              </h6>,
              <h6 style={{color:"blue"}}>
                <b>Properties</b>
              </h6>,
            ]}
          >
            <Meta
              avatar={
                <Avatar
                  src="slider26.jpeg"
                  style={{ width: "60px", height: "60px" }}
                />
              }
              title="Aundh" 
              description="Rs.5,550-15,000/month "
              
            />
            
          </Card>
        </div>
      </Carousel>
    </>
  );
};
