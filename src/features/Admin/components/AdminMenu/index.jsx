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
          <li className="nav-item ">
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
                Manage Exercise
                
              </p>
            </p>
            <div className="collapse collapse-slider" id="company">
              <ul className="nav d-block">
                <NavLink
                  activeClassName="nav-link--active"
                  to="dashboard/list_exercise"
                  className="nav-link"
                >
                  <span className="material-icons nav-icons">
                    
                  </span>
                  List Exercise
                </NavLink>
                <NavLink
                  activeClassName="nav-link--active"
                  to="/dashboard/edit"
                  className="nav-link"
                >
                  <span className="material-icons nav-icons">
                    
                  </span>
                  Edit Exercise
                </NavLink>

                <NavLink
                  activeClassName="nav-link--active"
                  to="/dashboard/question"
                  className="nav-link"
                >
                  <span className="material-icons nav-icons">
                    
                  </span>
                  Manage Question
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
                FULL TOIEC
               
              </p>
            </p>
            
          </li>

          
        </ul>
      </div>
    </div>
  );
}

export default AdminMenu;
