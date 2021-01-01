import React from 'react';
import '../DetailTestPage/styles.css'
import AudioPlay from 'react-audio-player';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Translate from '../../components/Translate';


function DetailTestPage(props) {
    const [value, setValue] = React.useState('female');
    

    const handleChange = (event) => {

        var target = event.target;
        var name = target.name;
        var valuee = target.value;
        setValue({
            [name]: valuee
        })

        console.log(name, value)


        setValue(event.target.value);
        
        console.log(event.target)


    };


    return (
        <div className="container bg_trang">
            <div className="container-fliud">


                <section className="bd">
                    <div> di toi dau toi dau</div>
                </section>

                <section className="bd">
                    <div className="row tieu_de">
                        
                            <h2> Part1 - in the office</h2>
                        
                    </div>

                    <div className="row">
                        <div className="col ">
                            <p>học viên tuej luyện tập Paet 1 Photographs với chủ đề office 2 </p>
                        </div>

                    </div>

                    <div className="row d-flex justify-content-between">
                        <h5>In the ofice 2</h5>
                       <h5> questions 1-3/ 10</h5>

                    </div>
                    <div className="row">
                        <div className="col">
                            <img src="https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/images.jpg" alt="#" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <AudioPlay
                                src="http://toeicspeakingmsngoc.com/images/audio/audio-1546316975_mozilgeecolc1000ver4at10part-1cutted.mp3"
                                
                                controls
                            />
                        </div>
                    </div>


                </section>

                <section className="bd">
                    <div className="row">
                        <div className="col">Cau hoi</div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <img alt="" height="250px" width="380px" src="https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/1.jpg" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="cau1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="a" control={<Radio />} label="A" />
                                    <FormControlLabel value="b" control={<Radio />} label="B" />
                                    <FormControlLabel value="c" control={<Radio />} label="C" />
                                    <FormControlLabel value="d" control={<Radio />} label="D" />
                                </RadioGroup>

                                
                            </FormControl>
                        </div>


                    </div>

                    <div className="row">
                        <div className="col">
                            {/* <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="cau2" value={value2} onChange={handleChange}>
                                    <FormControlLabel value="a" control={<Radio />} label="A" />
                                    <FormControlLabel value="b" control={<Radio />} label="B" />
                                    <FormControlLabel value="c" control={<Radio />} label="C" />
                                    <FormControlLabel value="d" control={<Radio />} label="D" />
                                </RadioGroup>
                            </FormControl> */}
                        </div>
                    </div>
                </section>


                <section>
                    <div className="row">
                        <div className="col">Phan trang</div>
                    </div>

                    <div className="row">
                        <div className="col">
                        <h6> Sau Khi Hoàn Thành Bài Thi Nhấn Nút Nộp Bài</h6>
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