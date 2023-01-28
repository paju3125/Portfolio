import React from "react";

export default function ProjectCard({ params }) {
  return (
    <div className="card   text-light mb-3" style={{ maxWidth: "600px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{params.projectTitle}</h5>
            <p className="card-text">{params.desc}</p>
            <p className="card-text">
              <span>
                <span className="badge bg-info p-1">HTML</span>
                <span className="badge bg-success p-1">CSS</span>
                <span className="badge bg-danger p-1">Bootstrap</span>
                <span className="badge bg-light text-dark p-1">JavaScript</span>
                <span className="badge bg-secondary p-1">Ajax</span>
                <span className="badge bg-primary p-1">PHP</span>
                <span className="badge bg-warning p-1">phpMyAdmin</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
