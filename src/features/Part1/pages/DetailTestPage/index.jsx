import React from 'react';
import '../DetailTestPage/styles.css'
import AudioPlay from 'react-audio-player';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Translate from '../../components/Translate';
import Question from '../../components/Question';


function DetailTestPage(props) {
    const [danhdau, setDanhdau] = React.useState('e');
    const [cau2, setCau2] = React.useState('e');


    const handleChange = (event) => {

        console.log(event.target)


        setDanhdau(event.target.value);
        setCau2(event.target.value);



    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(danhdau, cau2)
    };


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

                {/* <section className="bd">
                    <div className="row">
                        <div className="col">Cau hoi</div>
                    </div>

                    <div className="row">
                        <div className="col fl_g0">
                            <img alt="" height="250px" width="380px" src="https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/1.jpg" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <form onSubmit={handleSubmit}>
                                <FormControl component="fieldset" name="cau1" >
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup aria-label="gender" name="danhdau" value={danhdau} onChange={handleChange}>
                                        <FormControlLabel value="a" control={<Radio />} label="A" />
                                        <FormControlLabel value="b" control={<Radio />} label="B" />
                                        <FormControlLabel value="c" control={<Radio />} label="C" />
                                        <FormControlLabel value="d" control={<Radio />} label="D" />
                                    </RadioGroup>
                                </FormControl>





                                <div className="row ">
                                    <div className="col f_btn">
                                        <div onClick={handleSubmit} className="btn_nopbai">
                                            Nộp Bài
                                         </div>
                                    </div>
                                </div>


                            </form>
                           

                        </div>


                    </div>


                </section> */}

                <Question />
                
                <section>
                    <div className="row">
                        <div className="col">Phan trang</div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h6 className="text-center"> Sau Khi Hoàn Thành Bài Thi Nhấn Nút Nộp Bài</h6>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col f_btn">
                            <div className="btn_nopbai">
                                Nộp Bài
                            </div>
                        </div>
                    </div>

                    <Translate />
                </section>
            </div>
        </div>
    );
}

export default DetailTestPage;