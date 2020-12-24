import React from 'react';
import { Link } from 'react-router-dom';
import "../TestItem/TestItem.css"

function TestItem(props) {
    return (
        <div>
            <div className="col">
                <div className="card " style={{ width: '18rem' }}>
                    <img src="https://noidung.tienganh123.com/file/luyen-thi-toeic//part3%20practice/Retai1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Part 1 - Test 1</h5>
                        <p className="card-text">Học viên luyện tập part 3 Conversations với chủ đề Career </p>
                        <Link href="#" className="btn btn-primary">Làm Bài Ngay</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestItem