import "./container.css";


const Container = ({image,headline,read,desc}) =>{
    return(
        <a href={read} target="_blank" rel="noreferrer"><div className="container-main">
            <div className="container-layout">
                <div className="image">
                    <img src={image} alt="news"/>
                </div>
                <div className="news-info">
                    <p className="headlines"><b>{headline}</b></p>
                    <p className="description">{desc}</p>
                </div>
            </div>
        </div>
        </a>
    )
}

export default Container;