import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import Card from "./Card";
 
const ViewUsers = () => {
    const { store, actions } = useContext(Context);
    const { users } = store;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card my-5">
                        
                            <div className="card-header">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="card-title">
                                        Contact List
                                    </h2>
                                    <Link to="/newuser" className="btn btn-success">
                                        <i className="fas fa-plus"></i> Add
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body">

                                {
                                    !!users &&
                                    users.length > 0 &&
                                    users.map((user, index) => {
                                        return (
                                            <div key={index} className="col-12">
                                                <Card
                                                    fullname={user.name+' '+user.lastname}
                                                    address={user.address}
                                                    phone={user.phone}
                                                    email={user.email}
                                                    id={user.id}
                                                />
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewUsers;