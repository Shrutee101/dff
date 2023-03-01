import React from "react";
import { Card } from "antd";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";

const { Meta } = Card;

const tabListNoTitle = [
  {
    key: "article",
    tab: "News",
  },
  {
    key: "app",
    tab: "Tax & Legal",
  },
  {
    key: "project",
    tab: "Help Guide",
  },
];
const contentListNoTitle = {
  article: (
    <div>
      <Row>
        
          <Card
            style={{ width:"18rem", border: "none" }}
            cover={<img alt="example" src="statelaunch.jpg" />}
          >
            <Meta
              title="State launches online lottery under MHADA"
              description="Aug 19, 2022"
            />
          </Card>
        
          <Card
            style={{ width: "18rem", border: "none" }}
            cover={<img alt="example" src="navimumbai.jpg"  height={"145px"}/>}
          >
            <Meta
              title="Navi Mumbai metro back on track"
              description="May 15, 2021"
            />
          </Card>
        
          <Card
            style={{ width: "18rem", border: "none" }}
            cover={<img alt="example" src="pmrda.gif" height={"145px"} />}
          >
            <Meta
              title="PMRDA to grant building plan in 23 villages"
              description="Jul 20, 2021"
            />
          </Card>
        
          <Card
            style={{ width:"18rem", border: "none" }}
            cover={<img alt="example" src="pmc.jpg" height={"145px"} />}
          >
            <Meta
              title="PMC acquires land for Pune metro"
              description="Jun 08, 2021"
            />
          </Card>
        
      </Row>
    </div>
  ),
  app: <div>
    <Row>
        
        <Card
            style={{ width:"18rem", border: "none" }}
            cover={<img alt="example" src="tax.jpg" height={"145px"} />}
          >
            <Meta
              title="Stamp duty and registration charges in Pune"
              description="Feb 08, 2023"
            />
          </Card>
        
        <Card
            style={{ width:"18rem", border: "none" }}
            cover={<img alt="example" src="tax2.jpg" height={"145px"} />}
          >
            <Meta
              title="How to register property in Pune?"
              description="Nov 10, 2022"
            />
          </Card>
       
        

    </Row>
  </div>,
  project:<div>
  <Row>
      
      <Card
          style={{ width:"18rem", border: "none" }}
          cover={<img alt="example" src="help1.jpg" height={"145px"} />}
        >
          <Meta
            title="All about property card in Pune"
            description="Jan 10, 2023"
          />
        </Card>
      
      <Card
          style={{ width:"18rem", border: "none" }}
          cover={<img alt="example" src="help2.jpg" height={"145px"} />}
        >
          <Meta
            title="What is the cost of living in Pune?"
            description="Jan 10, 2023"
          />
        </Card>
     
      

  </Row>
</div>,
};

export const Articles = () => {
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const [activeTabKey2, setActiveTabKey2] = useState("app");
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };
  return (
    <>
      <Card
        style={{
          width: "100%",
          border: "none",
        }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a href="#">More</a>}
        onTabChange={onTab2Change}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
      <hr/>
    </>
  );
};
