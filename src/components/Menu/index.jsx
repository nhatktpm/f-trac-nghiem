import React from 'react';
import { Link } from 'react-router-dom';
import "../Menu/styles.css"
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
// }));


function Menu(props) {

    // const classes = useStyles();

    return (
        <>
            <section className="menu-top">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="menu">

                                <div className="menu__item">
                                    <Link to="/">
                                        <HomeIcon className="fontSizeLarge" />
                                        <Button>TRANG CHỦ</Button>
                                    </Link>

                                </div>

                                <div className="menu__item">
                                    <div className="dropdown">
                                        <Button className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            ÔN THI TOIEC
                                </Button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <Link to="/part1" className="dropdown-item" >Part 1</Link>
                                            <Link className="dropdown-item" >Part 2</Link>
                                            <Link className="dropdown-item" >Part 3</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="menu__item">
                                    <Link to="/todofeature">
                                        <Button>ĐỀ THI TOIEC FULL</Button>
                                    </Link>

                                </div>




                            </div>


                        </div>


                    </div>

                </div>
            </section>
        </>
    );
}

export default Menu;