import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ margin: 0 }}>QUẢN LÝ SÂN BÒNG</h2>
          <small>0293.478.2343</small>
        </div>
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          <NavLink to={'/danh-sach-san'}>  <button>Danh sách sân</button></NavLink>
          <NavLink to={'/lich-su'}>  <button>Lịch sử đặt sân</button></NavLink>

          <NavLink to={'/tao-moi-san'}><button>Tạo mới sân</button></NavLink>

          <NavLink to={'/dang-nhap'}>

            <button>Đăng nhập</button>
          </NavLink>

          <NavLink to={'/dang-ky'}>
            <button>Đăng ký</button>
          </NavLink>
        </div>
      </header>
    );
  }
}
