import React, { useEffect, useState, useContext}from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



const PlanetsDetails = () => {

	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
        actions.getSinglePlanet(params.theid)
    }, []);


  return (
		<div className="jumbotron">

			<div className="card mb-3" style={{ maxWidth: "100%", margin: "auto", background: "#282727" }}>
				<div className="row g-0">
					<div className="col-lg-4">
						<img src={"https://starwars-visualguide.com/assets/img/planets/" + params.theid + ".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title text-light"></h2>
							<p className="card-text text-light">orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus lobortis mi ut tempor. Curabitur ultrices dapibus nisl. Sed dictum tempor ligula, eget varius enim dignissim eu. Maecenas ut sapien sagittis odio elementum eleifend convallis sollicitudin erat. Praesent finibus ligula turpis, ac placerat enim euismod ut. Maecenas laoreet dolor leo, ut ultricies ex ultricies vel.</p>
						</div>
					</div>
				</div>
				<div className="container text-center">
					<div className="row row-cols-6">
						<div className="col text-light"><h5>Name</h5><h5>{store.singlePlanet.name}</h5></div>
						<div className="col text-light"><h5>Population</h5><h5>{store.singlePlanet.population}</h5></div>
						<div className="col text-light"><h5>Rotation Period</h5><h5>{store.singlePlanet.rotation_period}</h5></div>
						<div className="col text-light"><h5>Surface Water</h5><h5>{store.singlePlanet.surface_water}</h5></div>
						<div className="col text-light"><h5>Gravity</h5><h5>{store.singlePlanet.gravity}</h5></div>
						<div className="col text-light"><h5>Climate</h5><h5>{store.singlePlanet.climate}</h5></div>
					</div>
				</div>
			</div>
			
		</div>
	);
}

export default PlanetsDetails