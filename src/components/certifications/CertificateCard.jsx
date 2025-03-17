import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function CertificateCard({ params }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="certificate-card" onClick={handleShow}>
        <div className="card-header">
          <img
            src={params.certificate}
            alt={params.certificate_name}
            className="certificate-img"
          />
        </div>
        <div className="card-body">
          <h3 className="certificate-title">{params.certificate_name}</h3>
          <p className="certificate-org">{params.organization}</p>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{params.certificate_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={params.certificate}
            alt={params.certificate_name}
            style={{ width: "100%" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
