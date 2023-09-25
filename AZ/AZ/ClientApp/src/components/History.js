import React, { Component } from 'react';

export class History extends Component {
  static displayName = History.name;

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <table style={{ marginTop: 20, margin: "auto", width: 700 }}>
          <tr>
            <th>STT</th>
            <th>THỜI GIAN</th>
            <th>SÂN BÓNG</th>
            <th>NGƯỜI ĐẶT</th>
            <th>SỐ ĐIỆN THOẠI</th>
            <th>THAO TÁC</th>
          </tr>
          <tr>
            <td>1</td>
            <td>10H-11H30</td>
            <td>Sân bóng 1</td>
            <td>Nguyễn Văn A</td>
            <td>092343247</td>
            <td><button>Sửa</button><button>Xóa</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>10H-11H30</td>
            <td>Sân bóng 1</td>
            <td>Nguyễn Văn A</td>
            <td>092343247</td>
            <td><button>Sửa</button><button>Xóa</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>10H-11H30</td>
            <td>Sân bóng 1</td>
            <td>Nguyễn Văn A</td>
            <td>092343247</td>
            <td><button>Sửa</button><button>Xóa</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>10H-11H30</td>
            <td>Sân bóng 1</td>
            <td>Nguyễn Văn A</td>
            <td>092343247</td>
            <td><button>Sửa</button><button>Xóa</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>10H-11H30</td>
            <td>Sân bóng 1</td>
            <td>Nguyễn Văn A</td>
            <td>092343247</td>
            <td><button>Sửa</button><button>Xóa</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>10H-11H30</td>
            <td>Sân bóng 1</td>
            <td>Nguyễn Văn A</td>
            <td>092343247</td>
            <td><button>Sửa</button><button>Xóa</button></td>
          </tr>

        </table>
      </div>
    );
  }
}
