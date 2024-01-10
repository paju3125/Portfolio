import React, { useEffect } from "react";
import AOS from "aos";
import "./internship.css"
import InternshipCard from "./InternshipCard";

export default function Internships() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="component container">
      <div className="internship">
        <h2 className="text-light heading" data-aos="fade-up" data-aos-duration="500">
          <span>Internships / Experiences</span>
        </h2>

        <div className="row row-cols-1 row-cols-lg-2 g-4 mt-3 mb-5 px-2 aos-init aos-animate" >

          <div className="col px-4" >
            <InternshipCard logo="" companyName="Result Software Development" title="Lead Coordinator" desc={[`Led intern team in completing "Automation in Recruitment Process" project.`, "Utilized Flask, ReactJS, and Machine Learning for efficient project execution."]} techs={[["Flask", "primary"], ["ReactJS", "success"], ["NLP", "warning"], ["SQL", "info"], ["HTML", "danger"], ["CSS", "secondary"]]} link="https://github.com/answersindustries/recruitment-automation-system/tree/recruitment-automation-v1.0" />
          </div>

          <div className="col px-4" >
            <InternshipCard logo="/pixelstatLogo.jpg" companyName="PixelStat eSolutions Development" title="Full Stack Intern" desc={[`Engineered a web app for "AKHIL BHARATIYA MARATHI CHITRAPAT MAHAMANDAL".`, "Enhanced data management, business logic, and reporting using Flask, SQL, and JavaScript."]} techs={[["Flask", "primary"], ["MySQL", "success"], ["JavaScript", "warning"], ["Bootstrap", "info"], ["HTML", "danger"], ["CSS", "secondary"]]} link="https://github.com/paju3125/PixelStat_ERP" />
          </div>

          <div className="col px-4" >
            <InternshipCard logo="/rbtechLogo.png" companyName="R B Tech Services" title="Trainee PHP Developer" desc={[`Engineered a web-based "Notice Management System" using PHP language.`, "Acquired proficiency in PHP programming through hands-on experience on a live project during the internship."]} techs={[["PHP", "primary"], ["SQL", "success"], ["JavaScript", "warning"], ["Bootstrap", "info"], ["HTML", "danger"], ["CSS", "secondary"]]} />
          </div>


        </div>
      </div>
    </div >
  );
}
