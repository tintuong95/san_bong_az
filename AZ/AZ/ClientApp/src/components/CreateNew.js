import React from 'react'

export default function CreateNew() {
    return (
        <div >
            <form style={{ display: "flex", flexDirection: "column", width: 300, margin: 'auto', marginTop: 20 }}>

                <label>Tên sân bóng</label>
                <input style={{ marginBottom: 10 }} />
                <label>Giá sân</label>
                <input style={{ marginBottom: 10 }} />
                <button style={{ marginTop: 10 }}>TẠO MỚI SÂN</button>
            </form>
        </div>
    )
}
