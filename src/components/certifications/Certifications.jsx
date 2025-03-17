import React from "react";
import "./certificates.css";
import CertificateCard from "./CertificateCard";

export default function Certifications() {
  return (
    <section className="component dev-certificates">
      <div className="container">
        <div className="workspace-header">
          <div className="workspace-controls">
            <div className="workspace-title">
              <span className="workspace-label">Certifications</span>
              <span className="workspace-path">~/portfolio/certifications</span>
            </div>
          </div>
        </div>
        <div className="vscode-explorer">
          <div className="vscode-explorer-header">
            <div className="actions">
              <div className="action red"></div>
              <div className="action yellow"></div>
              <div className="action green"></div>
            </div>
            <span className="title">CERTIFICATES</span>
          </div>
          <div className="certifications">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-5 m-1">
              <div className="col">
                <CertificateCard
                  params={{
                    certificate_name: "Persistent Martial Program 2023",
                    organization: "Persistent",
                    certificate: "/certificates/persistent.jpg",
                  }}
                />
              </div>
              <div className="col">
                <CertificateCard
                  params={{
                    certificate_name: "Full Stack Web Development",
                    organization: "Udemy",
                    certificate:
                      "/certificates/Full Stack Web Devlopment Certificate.jpg",
                  }}
                />
              </div>

              <div className="col">
                <CertificateCard
                  params={{
                    certificate_name: "Virtual Internship on Front-end Development",
                    organization: "IBM SkillBuild - Edunet Foundation",
                    certificate:
                      "/certificates/edunet foundation_frontend development.jpg",
                  }}
                />
              </div>
              <div className="col">
                <CertificateCard
                  params={{
                    certificate_name: "Azure Fundamentals",
                    organization: "Microsoft",
                    certificate:
                      "/certificates/Microsoft Azure Fundamentals Certificate.jpg",
                  }}
                />
              </div>
              <div className="col">
                <CertificateCard
                  params={{
                    certificate_name: "Networking Essentials",
                    organization: "CISCO Networking Academy",
                    certificate: "/certificates/cisco networking essentials.jpg",
                  }}
                />
              </div>
              <div className="col">
                <CertificateCard
                  params={{
                    certificate_name: "Programming in C",
                    organization: "AICPE",
                    certificate: "/certificates/C certificate.jpg",
                  }}
                />
              </div>
              <div className="col">
                <CertificateCard
                  params={{
                    certificate_name: "Internship - PHP Developer",
                    organization: "RB Tech Services",
                    certificate:
                      "/certificates/industrial training Certificate.jpg",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
