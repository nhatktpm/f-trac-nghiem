import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import "../Question/styles.css"
import Button from '@material-ui/core/Button';

function Question(props) {
    const [data, setData] = useState({
        cau1: "",
        cau2: "",
        cau3: "",
        cau4: "",
        cau5: ""
       

    })


    console.log(data)

    // const [value, setValue] = useState('female');
    // const [cau2, setCau2] = useState('e');

    var mQuestion = [
        {
            nameform: "cau1",
            nameQuestion: "Cau 1",
            srImg: " https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/2.jpg",
            dt: "kkkk"

        },
        {
            nameform: "cau2",
            nameQuestion: "Câu 2",
            srImg: "https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/2.jpg ",
            dt: "data.cau2"
        },
        {
            nameform: "cau3",
            nameQuestion: "Câu 3",
            srImg: "https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/2.jpg ",
            dt: "data.cau3"
        },
        {
            nameform: "cau4",
            nameQuestion: "Câu 4",
            srImg: "https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/2.jpg ",
            dt: "data.cau4"
        },
        {
            nameform: "cau4",
            nameQuestion: "Câu 4",
            srImg: "https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/2.jpg ",
            dt: "ll"

        },
    ];



    const handleChange = (event) => {

        let name = event.target.name,
            value = event.target.value;
        setData({
            ...data,
            [name]: value
        });
        console.log(data);

        // setValue(event.target.value);


    };
    const handleSubmit = (event) => {
        event.preventDefault();

    };


    // const mapQuestion = mQuestion.map((question, i) => {
    //     return (

    //     );
    // });






    console.log(props);

    return (
        <section className="bd">

            <div>
                <div className="row">
                    <div className="col">
                        <Button variant="contained" color="secondary">
                            Câu 1
                    </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col fl_g0">
                        <img alt="" height="250px" width="380px" src="https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/1.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="gender" name="cau1" value={data.cau1} onChange={handleChange}>
                                    <div className="fl_question">
                                        <FormControlLabel value="a" control={<Radio />} label="A" />
                                        <FormControlLabel value="b" control={<Radio />} label="B" />
                                        <FormControlLabel value="c" control={<Radio />} label="C" />
                                        <FormControlLabel value="d" control={<Radio />} label="D" />
                                    </div>
                                </RadioGroup>
                            </FormControl>
                        </form>
                    </div>
                </div>
            </div>



        {/* cau2 */}

            <div>
                <div className="row">
                    <div className="col">
                        <Button variant="contained" color="secondary">
                            Câu 2
                    </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col fl_g0">
                        <img alt="" height="250px" width="380px" src="https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/2.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="gender" name="cau2" value={data.cau2} onChange={handleChange}>
                                    <div className="fl_question">
                                        <FormControlLabel value="a" control={<Radio />} label="A" />
                                        <FormControlLabel value="b" control={<Radio />} label="B" />
                                        <FormControlLabel value="c" control={<Radio />} label="C" />
                                        <FormControlLabel value="d" control={<Radio />} label="D" />
                                    </div>
                                </RadioGroup>
                            </FormControl>
                        </form>
                    </div>
                </div>
            </div>


        {/* cau3 */}

        <div>
                <div className="row">
                    <div className="col">
                        <Button variant="contained" color="secondary">
                            Câu 3
                    </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col fl_g0">
                        <img alt="" height="250px" width="380px" src="https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/3.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="gender" name="cau3" value={data.cau3} onChange={handleChange}>
                                    <div className="fl_question">
                                        <FormControlLabel value="a" control={<Radio />} label="A" />
                                        <FormControlLabel value="b" control={<Radio />} label="B" />
                                        <FormControlLabel value="c" control={<Radio />} label="C" />
                                        <FormControlLabel value="d" control={<Radio />} label="D" />
                                    </div>
                                </RadioGroup>
                            </FormControl>
                        </form>
                    </div>
                </div>
            </div>


            {/* cau 4 */}

            <div>
                <div className="row">
                    <div className="col">
                        <Button variant="contained" color="secondary">
                            Câu 4
                    </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col fl_g0">
                        <img alt="" height="250px" width="380px" src="https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/4.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="gender" name="cau4" value={data.cau4} onChange={handleChange}>
                                    <div className="fl_question">
                                        <FormControlLabel value="a" control={<Radio />} label="A" />
                                        <FormControlLabel value="b" control={<Radio />} label="B" />
                                        <FormControlLabel value="c" control={<Radio />} label="C" />
                                        <FormControlLabel value="d" control={<Radio />} label="D" />
                                    </div>
                                </RadioGroup>
                            </FormControl>
                        </form>
                    </div>
                </div>
            </div>


            {/* cau 5 */}
            <div>
                <div className="row">
                    <div className="col">
                        <Button variant="contained" color="secondary">
                            Câu 5
                    </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col fl_g0">
                        <img alt="" height="250px" width="380px" src="https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/5.jpg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="gender" name="cau5" value={data.cau5} onChange={handleChange}>
                                    <div className="fl_question">
                                        <FormControlLabel value="a" control={<Radio />} label="A" />
                                        <FormControlLabel value="b" control={<Radio />} label="B" />
                                        <FormControlLabel value="c" control={<Radio />} label="C" />
                                        <FormControlLabel value="d" control={<Radio />} label="D" />
                                    </div>
                                </RadioGroup>
                            </FormControl>
                        </form>
                    </div>
                </div>
            </div>



        </section>

    );
}

export default Question;