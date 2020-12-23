import React from 'react';
import { Link } from 'react-router-dom';


import "../Menu/styles.css"



function Menu(props) {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col menu">
                            <div className="menu">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ÔN THI TOIEC
                                </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" >Action</Link>
                                        <Link className="dropdown-item" >Another action</Link>
                                        <Link className="dropdown-item" >Something else here</Link>
                                    </div>
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