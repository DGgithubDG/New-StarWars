import React, { useEffect, useState, useContext}from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const VehiclesDetails = () => {

	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
        actions.getSingleVehicle(params.theid)
    }, []);

  return (
		<div className="jumbotron">

			<div className="card mb-3" style={{ maxWidth: "20%", margin: "auto", background: "#282727" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + params.theid + ".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title"></h2>
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus lobortis mi ut tempor. Curabitur ultrices dapibus nisl. Sed dictum tempor ligula, eget varius enim dignissim eu. Maecenas ut sapien sagittis odio elementum eleifend convallis sollicitudin erat. Praesent finibus ligula turpis, ac placerat enim euismod ut. Maecenas laoreet dolor leo, ut ultricies ex ultricies vel.</p>
						</div>
					</div>
				</div>
				<div className="container text-center">
  <div className="row row-cols-6">
    <div className="col text-danger"><h5>Name</h5><h5>{store.singleVehicle.name}</h5></div>
    <div className="col text-danger"><h5>Model</h5><h5>{store.singleVehicle.model}</h5></div>
    <div className="col text-danger"><h5>Manufacturer</h5><h5>{store.singleVehicle.manufacturer}</h5></div>
    <div className="col text-danger"><h5>Passengers</h5><h5>{store.singleVehicle.passengers}</h5></div>
	<div className="col text-danger"><h5>Cargo capacity</h5><h5>{store.singleVehicle.cargo_capacity}</h5></div>
	<div className="col text-danger"><h5>Vehicle class</h5><h5>{store.singleVehicle.vehicle_class}</h5></div>
  </div>
</div>
			</div>
		</div>
	);
}

export default VehiclesDetails