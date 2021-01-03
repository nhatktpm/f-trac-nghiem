import React, { useState } from 'react';
import '../DetailTestPage/styles.css'
import AudioPlay from 'react-audio-player';
import swal from "sweetalert";

import Translate from '../../components/Translate';
import Question from '../../components/Question';
import Pagination from "react-js-pagination";

function DetailTestPage(props) {

    const [showAnswer, setShowAnswer] = useState(true)


    var elementTranslate = showAnswer ? <Translate /> : '';

    const toggoTranslate = () => {
        swal({
            title: "Bạn Có Chắc Nộp Bài ?",
            text: "Bài thi sẻ được chấm điểm và không được chỉnh sửa",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    setShowAnswer(!showAnswer)
                }
            });


    }


    return (
        <div className="container bg_trang">
            <div className="container-fliud">


                <section className="">
                    <div> di toi dau toi dau</div>
                </section>

                <section className="">
                    <div className="row tieu_de">

                        <h2> Part1 - in the office</h2>

                    </div>

                    <div className="row">
                        <div className="col ">
                            <p className="text-center">Học viên luyện tập Part 1 Photographs với chủ đề In the office 2 </p>
                        </div>

                    </div>
                    <div className="toiec_title">
                        <div className="row d-flex justify-content-between m05 ">
                            <h5>In The Ofice 2</h5>

                            <h5> Questions 1-3/ 10</h5>

                        </div>
                        <div className="row " >
                            <div className="col fl_mr20">
                                <img src="https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/images.jpg" alt="#" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col con_audio">
                                <AudioPlay
                                    src="http://toeicspeakingmsngoc.com/images/audio/audio-1546316975_mozilgeecolc1000ver4at10part-1cutted.mp3"

                                    controls
                                />
                            </div>
                        </div>
                    </div>



                </section>

                <Question />




                <section>
                    <div className="row">
                        <Pagination
                            activePage={1}
                            itemsCountPerPage={4}
                            totalItemsCount={5}
                            pageRangeDisplayed={6}

                        />
                    </div>

                    <div className="row">
                        <div className="col">
                            <h6 className="text-center"> Sau Khi Hoàn Thành Bài Thi Nhấn Nút Nộp Bài</h6>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col f_btn">
                            <div onClick={toggoTranslate} className="btn_nopbai">
                                Nộp Bài
                            </div>
                        </div>
                    </div>

                    {elementTranslate}
                </section>
            </div>
        </div>
    );
}

export default DetailTestPage;