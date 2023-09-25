import React from 'react'
import PropTypes from 'prop-types'

function Signin(props) {
    return (
        <div >
            <form style={{ display: "flex", flexDirection: "column", width: 300, margin: 'auto', marginTop: 20 }}>

                <label>Tên đăng nhập</label>
                <input style={{ marginBottom: 10 }} />
                <label>Mật khẩu</label>
                <input style={{ marginBottom: 10 }} />
                <button style={{ marginTop: 10 }}>ĐĂNG KÝ MỚI</button>
            </form>
        </div>
    )
}

Signin.propTypes = {}

export default Signin
