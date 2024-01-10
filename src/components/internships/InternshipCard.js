import React from 'react'

export default function InternshipCard(props) {
    return (
        <>
            <div class="card" data-aos="zoom-in" data-aos-duration="1000">
                <div class="img">
                    <img src={props.logo} alt={props.companyName} />
                </div>
                <div class="card-details mt-2">
                    <p class="text-title">{props.title}</p>
                    <p class="text-body">
                        <ul className="card-text text-justify mt-3">
                            {props.desc.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <span>
                            {props.techs.map((tech, index) => (
                                <span key={index} className={`badge bg-${tech[1]} p-1 mx-1`}>{tech[0]}</span>

                            ))}
                        </span>
                    </p>
                </div>
                <button class="card-button" onClick={() => window.open(props.link, "_blank")}>More info</button>
            </div>
        </>
    )
}
