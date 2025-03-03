import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./journey.css";
import ProjectCard from "../projects/ProjectCard";
import '../projects/projects.css'

const projects = [
    { thumbnail: "/project-thumbnails/facevibes.png", title: "FaceVibes - Facial Emotion Recognition System", description: "Created FaceVibes system using VGG16 for intuitive computer interactions. Improved emotion recognition accuracy with method comparison (CNN, VGG16, LSTM, MobileNetV2).", link: "https://github.com/paju3125/FaceMood", techs: [["Python", "info"], ["Deep Learning Models", "danger"], ["OpenCV", "secondary"], ["Streamlit", "primary"]] },
    { thumbnail: "/project-thumbnails/Tic Tac Toe.png", title: "Tic Tac Toe", description: "An Android app for playing tic tac toe game with Minimax AI algorithm.", link: "https://github.com/paju3125/Tic-Tac-Toe", techs:[["Android Studio", "info"], ["Java", "danger"]] },
    { thumbnail: "/project-thumbnails/pixelstat-erp.png", title: "PixelStat ERP System", description: "Purpose: Handling the membership details. <br /><ul><li>Retrieving data from excel files and storing in database.</li><li>Able to add/edit/delete data.</li><li>Apply business logics and make reports available to download.</li></ul>", link: "https://github.com/paju3125/PixelStat_ERP" ,techs:[["Flask", "info"], ["SQL", "success"], ["Pandas", "danger"], ["JavaScript", "secondary"], ["Bootstrap", "primary"]]},
    { thumbnail: "/project-thumbnails/wms.png", title: "Daily Wage Worker Management System", description: "Revolutionized daily-wage workforce management with a streamlined system powered by Django, MySQL, JavaScript, and Bootstrap.", link: "https://github.com/paju3125/Wage-Worker-Management", techs:[["Django", "info"], ["MySQL", "success"], ["JavaScript", "danger"], ["Bootstrap", "secondary"], ["HTML", "primary"], ["CSS", "warning"]] },
    { thumbnail: "/project-thumbnails/summarize-me.png", title: "SUMMARIZE.ME - Text Summarization Tool", description: "Developed a user-friendly summarization system using Flask utilizing NLP and the Pegasus model for precise text/URL summaries.", link: "https://github.com/paju3125/summarize.me", techs: [["Flask", "info"], ["Machine Learning", "success"], ["NLP", "danger"], ["Bootstrap", "secondary"], ["JavaScript", "primary"]] },
    { thumbnail: "/project-thumbnails/MyShows.png", title: "Online Multiplex Ticket Booking System", description: "Crafted a standout web project surpassing typical booking websites.Unique features and modern design ensure a delightful user experience.", link: "https://github.com/paju3125/My-Shows", techs: [["PHP", "info"], ["SQL", "success"], ["JavaScript", "danger"], ["Bootstrap", "secondary"], ["HTML", "primary"], ["CSS", "warning"]] }
];

export default function Journey() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const selectProject = (index) => {
        if (index !== currentIndex) {
            setCurrentIndex(index);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length),
        onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <section id="journey">
            <div className="container">
                <h1 className="text-light heading" 
                    data-aos="fade-up" 
                    data-aos-duration="800">
                    <span>Projects</span>
                </h1>
            </div>
            <div className="wrapper" data-aos="fade-up" data-aos-delay="200">
                <div className="carousel-container"
                    {...handlers}
                >
                    <div className="main-carousel projects" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {projects.map((project, index) => (
                            <div 
                                className={`carousel__item ${index === currentIndex ? 'active' : ''}`}
                                key={index}
                                style={{
                                    transform: index === currentIndex ? 
                                        'translateZ(50px)' : 'translateZ(0) scale(0.95)'
                                }}>
                                <ProjectCard 
                                    img={project.thumbnail} 
                                    title={project.title} 
                                    desc={project.description} 
                                    techs={project.techs} 
                                    link={project.link} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="thumbnail-container" data-aos="fade-up" data-aos-delay="400">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className={`thumbnail ${index === currentIndex ? "active" : ""}`} 
                            onClick={() => selectProject(index)}
                            style={{
                                transform: `translateZ(${index === currentIndex ? 20 : 0}px)`
                            }}>
                            <img src={project.thumbnail} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}