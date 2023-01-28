import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function CertificateCard({ params }) {
  const [currentCertificate, setCertificate] = useState(null);
  const [show, setShow] = useState(false);
  function showCertificate(image, name, org) {
    setCertificate({ image: image, name: name, organization: org });
    setShow(true);
    console.log(image);
    console.log(currentCertificate);
  }
  const handleClose = () => setShow(false);
  return (
    <>
      <div className="card  text-light">
        <div className="card-header">{params.certificate_name}</div>
        <div className="card-body">
          <img
            src={params.certificate}
            className="card-img-top"
            alt="Item not found :("
            onClick={() =>
              showCertificate(
                params.certificate,
                params.certificate_name,
                params.organization
              )
            }
          />
          <h5 className="card-title">{params.organization}</h5>
          <p className="card-text"></p>
        </div>
        <div className="card-footer"></div>
      </div>

      {currentCertificate && show && (
        <Modal show={show} size="lg" onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {currentCertificate.name} by {currentCertificate.organization}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={currentCertificate.image}
              className="card-img-top"
              alt="Item not found :("
              style={{ width: "100%" }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
