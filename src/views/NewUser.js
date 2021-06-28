import { useContext, useState } from "react";
import { useHistory,  } from "react-router";
import { Context } from "../store/appContext";

const NewUser = () => {
    const { store, actions } = useContext(Context);
    const { users } = store;
    const history = useHistory();

    const [data,setData]=useState({
        id:"",
        name:"",
        lastname:"",
        phone:""
    })

    const nid = ()=>{
        if (users=== null || users ===undefined){
             const id=1;
             return id;
        }
        else {   
            const id= users.length;
            return id+1;
         }
    }
    const handleChangeEvent= (e)=>{
        setData({
                ...data,
                [e.target.name]: e.target.value,
                id: nid()
            })
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            actions.addUsers("http://localhost:3001/users",data)
                        }}>
                            <div className="card my-5">
                                <div className="card-header">
                                    <h2 className="card-title">
                                        Add new contact
                                </h2>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Enter name"
                                                    className="form-control mb-3"   
                                                    onChange={handleChangeEvent}
                                               />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="lastname">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="lastname"
                                                    name="lastname"
                                                    placeholder="Enter last name"
                                                    className="form-control mb-3"
                                                    onChange={handleChangeEvent}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Enter Email"
                                                    className="form-control mb-3"
                                                    onChange={handleChangeEvent}
                                                />
                                            </div>
                                        </div>
                                     
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Enter phone"
                                                    className="form-control mb-3"
                                                    onChange={handleChangeEvent}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="adress">Address</label>
                                                <input
                                                    type="text"
                                                    id="adress"
                                                    name="adress"
                                                    placeholder="Enter adress"
                                                    className="form-control mb-3"
                                                    onChange={handleChangeEvent}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    <button className="btn btn-success mx-1">Save</button>
                                    <button className="btn btn-warning mx-1" onClick={() => history.push('/')}>Go back!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewUser;