import React from 'react';


import Button from '@material-ui/core/Button';
import "../Header/styles.css"





function Header(props) {


  return (
    <header>
      <section className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="logo">
                <img src="https://toeic4u.com/home/img/TOEIC4U.png" alt="#" />
              </div>
            </div>

            <div className="col">
              <div className="col__right">
                <Button>ĐĂNG KÝ</Button>

                <Button color="primary">ĐĂNG NHẬP</Button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;