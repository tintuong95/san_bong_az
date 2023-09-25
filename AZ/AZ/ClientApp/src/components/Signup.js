import React from 'react'
import PropTypes from 'prop-types'

function Signup(props) {
    return (
        <div >
            <form style={{ display: "flex", flexDirection: "column", width: 300, margin: 'auto', marginTop: 20 }}>
                <label>Họ và tên</label>
                <input style={{ marginBottom: 10 }} />
                <label>Số điện thoại</label>
                <input style={{ marginBottom: 10 }} />
                <label>Email</label>
                <input style={{ marginBottom: 10 }} />
                <label>Tên đăng nhập</label>
                <input style={{ marginBottom: 10 }} />
                <label>Mật khẩu</label>
                <input style={{ marginBottom: 10 }} />
                <button style={{ marginTop: 10 }}>ĐĂNG KÝ MỚI</button>
            </form>
        </div>
    )
}

Signup.propTypes = {}

export default Signup
