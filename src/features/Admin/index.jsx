import React from 'react';
import AdminMenu from './components/AdminMenu';

function Admin(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">

                    <AdminMenu />
                </div>
                <div className="col-9">
                    main
                </div>

            </div>
        </div>
    );
}

export default Admin;