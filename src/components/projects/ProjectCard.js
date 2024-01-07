import React from "react";

export default function ProjectCard(props) {

  console.log(props)
  return (
    <div className="card mx-2">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg> */}
      <img src={props.img} alt="" />
      <div className="card__content">
        <p className="card__title">{props.title}</p>
        <p className="card__description" dangerouslySetInnerHTML={{ __html: props.desc }}></p>

        <p className="card-footer mt-1">
          <span>
            {props.techs.map((tech, index) => (
              <span key={index} className={`badge bg-${tech[1]} p-1 m-1`} > {tech[0]}</span>
            ))}
          </span>
        </p>
        <div className="col-span-1 mt-1">
          <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2" onClick={() => { window.location.href = props.link }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </button>
        </div>
      </div>

    </div >
  );
}
