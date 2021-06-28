import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = prop => {
    const { store, actions } = useContext(Context);
    const { users } = store;

    return (
        <>
            <div className="card mb-1">
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <img src="https://picsum.photos/id/257/150/150" className="img-fluid" alt="" />
                        </div>
                        <div className="col-6">
                            <div className="row d-flex align-items-center font-weight-bold">
                                {!!prop.fullname ? prop.fullname : 'Name' }
                            </div>
                            <div className="row d-flex align-items-center">
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                {!!prop.address ? prop.address : 'address' } 
                            </div>
                            <div className="row d-flex align-items-center">
                                <i className="fas fa-phone mr-2"></i>
                                {!!prop.phone ? prop.phone : 'phone' } 
                            </div>
                            <div className="row d-flex align-items-center">
                                <i className="fas fa-envelope mr-2"></i>
                                {!!prop.email ? prop.email : 'email' }
                            </div>
                        </div>
                        <div className="col-3">
                            <Link to={`/${prop.id}/edit`} className="btn btn-success m-1">
                                {/* <i className="fa fa-edit"></i> */}
                                Edit
                            </Link>
                            <button type="button" className="btn btn-danger m-1" onClick={()=>{actions.handleUsers(prop.id)}}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;