import React, { useState } from 'react';
import Exercise from '../Exercise';
import "../ListExrcise/styles.css"
import swal from "sweetalert";

function ListExercise(props) {

    var initElement = [
        {
            id: 0,
            name: "In the office 2",
            description: "Học viên luyện tập Part 1 Photographs với chủ đề In the office 2",
            img: "xoa"
        },
        {
            id: 1,
            name: "In The Room",
            description: "Học viên luyện tập Part 1 - Photographs với chủ đề At a restauran",
            img: "xoa"
        },
        {
            id: 2,
            name: "At The Bus Top",
            description: "Học viên luyện tập Part 1 - Photographs với chủ đề At the bus stop",
            img: "xoa"
        },        
        {
            id: 3,
            name: "Outdoor Activies",
            description: "Học viên luyện nghe part 1 - Photographs với chủ đề Outdoor activities",
            img: "xoa"
        }
        ,        
        {
            id: 3,
            name: "Communications",
            description: "Học viên luyện nghe part 1 - Photographs với chủ đề Communications",
            img: "xoa"
        }
        ,        
        {
            id: 3,
            name: "On The Street",
            description: "Học viên luyện nghe part 1 - Photographs với chủ đề On the street",
            img: "xoa"
        }
    ];


    const [element, setElement] = useState(initElement)





    const handleEdit = (exer, id) => {


        console.log(exer, id)
    }

    const handleDelete = (exer, id) => {

        swal({
            title: "Không thành công!",
            text: "lỗi",
            icon: "warning",
            button: "OK",
          });
        var newElement = [...initElement]

        var newexer = newElement.splice(2, 1)
        setElement(newexer);  
        console.log(initElement,newexer)
    }

    return (
        <div className="row w100">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header card-header-primary">
                        <h4 className="card-title "> Danh Sách Bài Tập </h4>
                        <p className="card-category"> danh sách bài tập part 1 </p>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead className=" text-primary">
                                    <tr>
                                        <th>#</th>
                                        <th>Tên bài tập</th>
                                        <th>Hình Đại Điện</th>
                                        <th>Mô Tả </th>
                                        <th>Sửa</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Exercise exercise={element} onDelete={handleDelete} onEdit={handleEdit} />
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListExercise;