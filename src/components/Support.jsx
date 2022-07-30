import React, { Component } from "react";
import { Button, Dropdown, Menu } from "antd";
import "./style.css";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

export default class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Dropdown
          overlay={menu}
          placement="bottomLeft"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown
          overlay={menu}
          placement="bottom"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown
          overlay={menu}
          placement="bottomRight"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button>bottomRight</Button>
        </Dropdown>
        <br />
        <Dropdown
          overlay={menu}
          placement="topLeft"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown
          overlay={menu}
          placement="top"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button>top</Button>
        </Dropdown>
        <Dropdown
          overlay={menu}
          placement="topRight"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button>topRight</Button>
        </Dropdown>
      </div>
    );
  }
}
