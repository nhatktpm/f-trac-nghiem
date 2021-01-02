import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import "../Question/styles.css"
import Button from '@material-ui/core/Button';

function Question(props) {
    

    // const [value, setValue] = useState('female');
    // const [cau2, setCau2] = useState('e');

    var mQuestion = [
        {
            nameform : "cau1",
            nameQuestion : "Cau 1",
            srImg: " https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/2.jpg"

        },
        {
            nameform : "cau2",
            nameQuestion : "Câu 2",
            srImg: "https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/2.jpg "

        },
        {
            nameform : "cau3",
            nameQuestion : "Câu 3",
            srImg: "https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/2.jpg "

        },
        {
            nameform : "cau4",
            nameQuestion : "Câu 4",
            srImg: "https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/2.jpg "

        },
        {
            nameform : "cau4",
            nameQuestion : "Câu 4",
            srImg: "https://noidung.tienganh123.com/file/luyen-thi-toeic/part1%20practice/in%20the%20office%202/2.jpg "

        },
        
    ];



    const [data, setData] = useState({
        cau1: "",
        cau2: "",
        cau3: "",
        cau4: "",
        cau5: "",
        cau6: "",
        cau7: "",
        cau8: "",
        cau9: "",
        cau10: ""

    })


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


    console.log(props);

    return (
        <section className="bd">
            <>
                <div className="row">
                    <div className="col">
                        <Button variant="contained" color="secondary">
                            Câu 1
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
            </>




        </section>

    );
}

export default Question;