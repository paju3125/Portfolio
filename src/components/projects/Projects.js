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

          <div className="col ">
            <ProjectCard img="/project-thumbnails/Tic Tac Toe.png" title="Tic Tac Toe" desc="An Android app for playing tic tac toe game with Minimax AI algorithm." techs={[["Android Studio", "info"], ["Java", "danger"]]} link="https://github.com/paju3125/Tic-Tac-Toe" />
          </div>

          <div className="col">
            <ProjectCard img="/project-thumbnails/pixelstat-erp.png" title="PixelStat ERP System" desc="Flask Project developed for Pixelstat eSolutions Development Pvt. Ltd. <br />Purpose: Handling the membership details. <br /><ul><li>Retrieving data from excel files and storing in database.</li><li>Able to add/edit/delete data.</li><li>Apply business logics and make reports available to download.</li></ul>" techs={[["Flask", "info"], ["SQL", "success"], ["Pandas", "danger"], ["JavaScript", "secondary"], ["Bootstrap", "primary"]]} link="https://github.com/paju3125/PixelStat_ERP" />
          </div>

          <div className="col">
            <ProjectCard img="/project-thumbnails/wms.png" title="Daily Wage Worker Management System" desc="Revolutionized daily-wage workforce management with a streamlined system powered by Django, MySQL, JavaScript, and Bootstrap." techs={[["Django", "info"], ["MySQL", "success"], ["JavaScript", "danger"], ["Bootstrap", "secondary"], ["HTML", "primary"], ["CSS", "warning"]]} link="https://github.com/paju3125/Wage-Worker-Management" />
          </div>

          <div className="col">
            <ProjectCard img="/project-thumbnails/summarize-me.png" title="SUMMARIZE.ME - Text Summarization Tool" desc="Developed a user-friendly summarization system using Flask utilizing NLP and the Pegasus model for precise text/URL summaries." techs={[["Flask", "info"], ["Machine Learning", "success"], ["NLP", "danger"], ["Bootstrap", "secondary"], ["JavaScript", "primary"]]} link="https://github.com/paju3125/summarize.me" />
          </div>

          <div className="col">
            <ProjectCard img="/project-thumbnails/MyShows.png" title="Online Multiplex Ticket Booking System" desc="Crafted a standout web project surpassing typical booking websites.Unique features and modern design ensure a delightful user experience." techs={[["PHP", "info"], ["SQL", "success"], ["JavaScript", "danger"], ["Bootstrap", "secondary"], ["HTML", "primary"], ["CSS", "warning"]]} link="https://github.com/paju3125/My-Shows" />
          </div>


        </div>
      </div >
    </div >
  );
}
