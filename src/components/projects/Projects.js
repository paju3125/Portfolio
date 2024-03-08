import React from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="component container">
      <div className="projects">
        <h2 className="text-light heading" data-aos="fade-up" data-aos-duration="500">
          <span>Projects</span>
        </h2>

        <div className="row row-cols-1 row-cols-lg-2 g-2 mt-3" data-aos-duration="2000">

          <div className="col ">
            <ProjectCard img="/project-thumbnails/facevibes.png" title="FaceVibes - Facial Emotion Recognition System" desc="Created FaceVibes system using VGG16 for intuitive computer interactions. Improved emotion recognition accuracy with method comparison (CNN, VGG16, LSTM, MobileNetV2)." techs={[["Python", "info"], ["Deep Learning Models", "danger"], ["OpenCV", "secondary"], ["Streamlit", "primary"]]} link="https://github.com/paju3125/FaceMood" />
          </div>
          <div className="col">
            <ProjectCard img="/project-thumbnails/pixelstat-erp.png" title="PixelStat ERP System" desc="Flask Project developed for Pixelstat eSolutions Development Pvt. Ltd. <br /><br />Users: Admin and Manager. <br />Purpose: Handling the membership details. <br /><ul><li>Retrieving data from excel files and storing in database.</li><li>Able to add/edit/delete data.</li><li>Apply business logics and make reports available to download.</li></ul>" techs={[["Flask", "info"], ["SQL", "success"], ["Pandas", "danger"], ["JavaScript", "secondary"], ["Bootstrap", "primary"]]} link="https://github.com/paju3125/PixelStat_ERP" />
          </div>

          <div className="col">
            <ProjectCard img="/project-thumbnails/wms.png" title="Daily Wage Worker Management System" desc="The project “Daily wage worker management system” aims to keep daily based records of wage workers working in various departments. This system maintains the information about number of workers entering and exiting the plant and the particular department and their entry and exit time collected from the security and supervisors. The reports generated from the data stored by security and supervisors will be available to the plant head, so the frauds/cheats at the supervisors/manager level can be detected easily." techs={[["Django", "info"], ["MySQL", "success"], ["JavaScript", "danger"], ["Bootstrap", "secondary"], ["HTML", "primary"], ["CSS", "warning"]]} link="https://github.com/paju3125/Wage-Worker-Management" />
          </div>

          <div className="col">
            <ProjectCard img="/project-thumbnails/summarize-me.png" title="SUMMARIZE.ME - Text Summarization Tool" desc="Developed a user-friendly text summarization system utilizing NLP and Pegasus model for accurate summaries from text/URL inputs.Implemented comparative analysis to enhance system versatility by evaluating multiple summarization techniques." techs={[["Flask", "info"], ["Machine Learning", "success"], ["NLP", "danger"], ["Bootstrap", "secondary"], ["JavaScript", "primary"]]} link="https://github.com/paju3125/summarize.me" />
          </div>

          <div className="col">
            <ProjectCard img="/project-thumbnails/multiplex.png" title="Online Multiplex Ticket Booking System" desc="A web-based project. Similar bookmyshow website with some additional innovative features.<br />Facility to store the information of the new customer, different types of movie show timing, ticket rates of different types on show class etc.<br /> Ability to the admin to add or remove slides of slider, add/update/delete movies, apply or social distancing to multiplexes, apply coupon codes to users<br /><br /> Modules : <br /> 1. User <br />2. Admin" techs={[["PHP", "info"], ["SQL", "success"], ["JavaScript", "danger"], ["Bootstrap", "secondary"], ["HTML", "primary"], ["CSS", "warning"]]} link="https://github.com/paju3125/My-Shows" />
          </div>


        </div>
      </div >
    </div >
  );
}
