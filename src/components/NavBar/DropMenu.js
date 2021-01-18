import React from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


function DropMenu() {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/mission">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            Our Mission        </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          about us        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          Patners        </a>
      </Menu.Item>
      {/* <Menu.Item danger>a danger item</Menu.Item> */}
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <DownOutlined style={{
            color: "black"
          }} />
        </a>
      </Dropdown>
    </div>
  )
}

export default DropMenu
