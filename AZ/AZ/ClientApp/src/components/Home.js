import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <table style={{ marginTop: 20, margin: "auto", width: 500 }}>
          <tr>
            <th>STT</th>
            <th>TÊN SÂN</th>
            <th>GIÁ</th>
            <th>NGÀY TẠO</th>
            <th>THAO TÁC</th>
          </tr>
          <tr>
            <td>1</td>
            <td>SÂN BÓNG 1</td>
            <td>10000</td>
            <td>10-20-2023</td>
            <td><button>Sửa</button><button>Xóa</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>SÂN BÓNG 1</td>
            <td>10000</td>
            <td>10-20-2023</td>
            <td><button>Sửa</button><button>Xóa</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>SÂN BÓNG 1</td>
            <td>10000</td>
            <td>10-20-2023</td>
            <td><button>Sửa</button><button>Xóa</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>SÂN BÓNG 1</td>
            <td>10000</td>
            <td>10-20-2023</td>
            <td><button>Sửa</button><button>Xóa</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>SÂN BÓNG 1</td>
            <td>10000</td>
            <td>10-20-2023</td>
            <td><button>Sửa</button><button>Xóa</button></td>
          </tr>
        </table>
      </div>
    );
  }
}
