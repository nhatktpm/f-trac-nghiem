import React from 'react';
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";

function EditExercise(props) {
    const history = useHistory();

    const handleInput = () => {

    }
    const handleToggo = () => {
        swal({
            title: "Thêm Thành Công",

            icon: "success",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    history.push("/dashboard");
                } else {
                    swal("Your imaginary file is safe!");

                }
            });
    }


    const handleEdit = () => {
        swal({
            title: "Sửa Thành Công",

            icon: "success",
            buttons: true,

        })
            .then((willDelete) => {
                if (willDelete) {
                    history.push("/dashboard");
                } else {
                    swal("Your imaginary file is safe!");

                }
            });
    }

    const handleSubmit = () => {

    }

    var tienganh = "September 30, 2010 Ms. Josephine Boss Chief Executive Officer Acme Company 456 Main St. Philadelphia, PA 12345 Dear Mr. Boss, I am writing to formally notify you that I am resigning from my position as Administrative Assistant with Acme Company";
    var tiengviet = "Ngày 30 tháng 9 năm 2010 Bà Josephine Boss Giám đốc điều hành Công ty Acme 456 Main St. Philadelphia, PA 12345 Thưa ông chủ, Tôi viết thư này để chính thức thông báo với bạn rằng tôi sẽ thôi giữ chức vụ Trợ lý Hành chính của Công ty Acme. Ngày làm việc cuối cùng của tôi sẽ là ngày 14 tháng 10, theo các điều";
    var name = "In The Ofice 2";
    var mota = "Học viên tìm hiểu về part 1 - Photographs trước khi bước vào các bài luyện tập"



    return (
        <div>
            <div className="col-md-8 ">
                <div className="card w100">
                    <div className="card-header card-header-primary">
                        <h4 className="card-title">
                            Thêm Bài Thi Part 1
                </h4>
                    </div>
                    <div className="card-body">
                        <form encType="multipart/form-data">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label> Tên Bài Thi </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="store_name"
                                            value={name}
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label> Mô Tả</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            value={mota}
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="form-group">
                                        <label> Đáp Án Câu 1</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone_number"
                                            value="a"
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group">
                                        <label> Đáp Án Câu 2</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="legal_name"
                                            value="b"
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="form-group">
                                        <label> Đáp Án Câu 3 </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone_number"
                                            value="a"
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group">
                                        <label> Đáp Án Câu 4 </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="legal_name"
                                            value="c"
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="form-group">
                                        <label> Đáp Án Câu 5 </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone_number"
                                            value="b"
                                            onChange={handleInput}
                                        />

                                    </div>
                                </div>

                            </div>




                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label> Site </label>


                                        <input
                                            type="file"
                                            className="form-control"
                                            name="site"

                                        />



                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label> Bài Dịch Tiếng Việt </label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            name="about"
                                            value={tiengviet}
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label> Bài Dịch Tiếng Anh </label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            name="about"
                                            value={tienganh}
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <button onClick={handleToggo} type="button" class="btn btn-primary">Thêm Đề Thi</button>
                                </div>

                                <div className="col-md-6">
                                    <button onClick={handleEdit} type="button" class="btn btn-btn-info">Sửa Bài Thi</button>
                                </div>
                            </div>


                            <div className="clearfix" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditExercise;