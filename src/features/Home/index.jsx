import React from 'react';


import "../Home/styles.css"
import TestItem from './components/TestItem/TestItem';



function HomeFeature(props) {
    return (
        <section className="home container" >


            
                <div className="row test__contai  ">
                    <TestItem />
                    <TestItem />
                    <TestItem />


                </div>
            
            <div className="home__2">
                <div className="row">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                ads
            </div>
        </section>


    );
}

export default HomeFeature;