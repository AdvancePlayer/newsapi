import "./home.css";
import Container from "./container";
import { Context } from "../../context/Context";
import { useContext } from "react";


const Home = () =>{
    const {news} = useContext(Context);
    return(
        <div className="home-main">
            <div className="home-layout">
                <div className="home-left">
                <h3>Latest News</h3>
                    {news && news.map((article, index) => {
                        if (article.urlToImage) {
                            return <Container key={index} image={article.urlToImage} headline={article.title} read={article.url} desc={article.description} />;
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    )
}
export default Home;
