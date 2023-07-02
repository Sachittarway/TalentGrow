import "./card.css"

function Card(props){
    return(
        <div className="card">
            <figure>
                <figcaption>
                    <h2>Hey,</h2><span>{props.name}</span>
                    <h3>{props.job}</h3>
                    <h4>{props.location}</h4>
                    <p>Seeking an exceptional talent to join your team? Look no further! With my skills, dedication, and drive for success, I am the perfect candidate to contribute to your organization's growth and achieve remarkable results. Hire me today and let's create success together!</p>
                    <a href="#">
                        <span>Read More</span>
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </figcaption>
                <img src="https://picsum.photos/300/400" alt="random image" />
            </figure>
        </div>
    )
}
export default Card;