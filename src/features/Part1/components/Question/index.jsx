import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

function Question(props) {

    const [danhdau, setDanhdau] = React.useState('e');
    const [cau2, setCau2] = React.useState('e');


    const handleChange = (event) => {

        console.log(event.target)




    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(danhdau, cau2)
    };

    return (
        <section className="bd">
            <div className="row">
                <div className="col">
                    <Button variant="contained" color="secondary">
                        Secondary
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
                        <FormControl component="fieldset" name="cau1" >                            
                            <RadioGroup  aria-label="gender" name="danhdau" value={danhdau} onChange={handleChange}>
                                <FormControlLabel value="a" control={<Radio />} label="A" />
                                <FormControlLabel value="b" control={<Radio />} label="B" />
                                <FormControlLabel value="c" control={<Radio />} label="C" />
                                <FormControlLabel value="d" control={<Radio />} label="D" />
                            </RadioGroup>
                        </FormControl>



                    </form>

                </div>


            </div>


        </section>

    );
}

export default Question;