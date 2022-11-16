import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Planets = (props) => {
  const { store, actions } = useContext(Context);

  let favIcon = "";

  return (
    <div className="container">
      <h1 className="text-light">Planets</h1>
      <div className="row row-cols-5 g-3 justify-content-center">

        {store.planets.map((i) => {
          if (i.favorite == false) {
            favIcon = "far fa-heart";
          } else {
            favIcon = "fas fa-heart";
          }

          return (
            <div key={i.index} className="col">
              <div className="card m-3 text-light border-light">
                <img
                  src={
                    "https://starwars-visualguide.com/assets/img/planets/" +
                    i.uid +
                    ".jpg"
                  }
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{i.name}</h5>
                  <div className="d-flex justify-content-between">
                  <Link to={"/planets/" + i.uid}>
                    <button className="btn btn-outline-light">
                        Learn More
                    </button>
                  </Link>

                  <button
                    className="btn btn-warning"
                    onClick={() =>
                      actions.addToFavorites(
                        i.uid,
                        "/planets/" + i.uid,
                        i.name,
                        i.type,
                        i.index
                      )
                    }
                  >
                    <i className={favIcon} />
                  </button>
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Planets;
