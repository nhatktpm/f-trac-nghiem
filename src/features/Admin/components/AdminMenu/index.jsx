import React from "react";
import "../AdminMenu/styles.css"

import { NavLink } from "react-router-dom";

function AdminMenu() {
  return (
    <div className="sidebar" >
      <div className="logo">
        <div className="simple-text logo-normal">DASHBOARD</div>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item">
            <NavLink
              activeClassName="nav-link--active"
              to="/"
              className="nav-link"
            >
              
              <p>Về Trang Chủ</p>
            </NavLink>
          </li>

          {/* Manage Company */}
          <li className="nav-item d-inline">
            <p  //nay la the a
              //activeClassName="nav-link--active"
              href="#company"
              className="nav-link"
              data-toggle="collapse"
              aria-haspopup="true"
              aria-expanded="false"
            >
              
              <p>
                Manage Company
                
              </p>
            </p>
            <div className="collapse collapse-slider" id="company">
              <ul className="nav d-block">
                <NavLink
                  activeClassName="nav-link--active"
                  to="/home/company/list-company"
                  className="nav-link"
                >
                  <span className="material-icons nav-icons">
                    
                  </span>
                  List My Company
                </NavLink>
                <NavLink
                  activeClassName="nav-link--active"
                  to="/home/company/create-company"
                  className="nav-link"
                >
                  <span className="material-icons nav-icons">
                    
                  </span>
                  Create Company
                </NavLink>

                <NavLink
                  activeClassName="nav-link--active"
                  to="/home/company/list-deleted-company"
                  className="nav-link"
                >
                  <span className="material-icons nav-icons">
                    
                  </span>
                  List Delete Company
                </NavLink>
              </ul>
            </div>
          </li>

          {/* Manage Product */}
          <li className="nav-item">
            <p 
              href="#products"
              className="nav-link"
              data-toggle="collapse"
              aria-haspopup="true"
              aria-expanded="false"
            >
            
              <p>
                Manage Product
               
              </p>
            </p>
            
          </li>

          
        </ul>
      </div>
    </div>
  );
}

export default AdminMenu;
