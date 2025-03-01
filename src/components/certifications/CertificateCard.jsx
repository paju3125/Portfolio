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
  // console.log(params);
  const handleClose = () => setShow(false);
  return (
    <>
      <div
        className="card text-light"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={Math.random() * 300}
      >
        <div className="card-header text-center">
          <span style={{
            background: 'linear-gradient(45deg, rgb(231 201 129), var(--text-color))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: '700',
            letterSpacing: '0.5px'
          }}>
            {params.certificate_name}
          </span>
        </div>
        <div className="card-body">
          <img
            src={params.certificate}
            className="card-img"
            alt="Item not found :("
            onClick={() =>
              showCertificate(
                params.certificate,
                params.certificate_name,
                params.organization
              )
            }
            style={{
              transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
              transform: 'translateZ(0)',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateZ(30px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateZ(0)'}
          />
        </div>
        <h5 className="card-footer text-center">{params.organization}</h5>
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
