import React from "react";

export default function ProjectCard(props) {

  return (
    <div className="card mx-2" data-aos="zoom-in-up" data-aos-duration="1000">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg> */}
      <div className="overlay"></div>
      <img src={props.img} alt="" />
      <div className="card-img-overlay d-flex align-items-center justify-content-center">
        <h5 className="card-title">{props.title}</h5>
      </div>
      <div className="card__content">
        <p className="card__title">{props.title}</p>
        <p className="card__description" dangerouslySetInnerHTML={{ __html: props.desc }}></p>

        <p className="card-footer mt-1 p-0 pt-3">
          <span>
            {props.techs.map((tech, index) => (
              <span key={index} className={`badge bg-${tech[1]} p-1 m-1`} > {tech[0]}</span>
            ))}
          </span>
        </p>
        <div className="col-span-1 mt-1">
          <button className="icon-container" onClick={() => { window.open(props.link, "_blank") }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="40" height="40">
              <defs>
                <linearGradient id="gh-mark-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="5%" stop-color="#efcc74" />
                  <stop offset="80%" stop-color="#dba622" />
                </linearGradient>
              </defs>
              <path class="gh-mark" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </button>
        </div>
      </div>

    </div >
  );
}
