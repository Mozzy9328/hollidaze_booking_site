import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

function About() {
    return (
        <>
            <Navbar />
            <Header />
            <div className="container">
                <div className="row m-5">
                    <div className="col">
                        <h1>About Hollidaze</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod nisi assumenda debitis quam iusto est! Laborum earum assumenda tenetur optio ea incidunt molestias odio. Repellendus explicabo nesciunt reprehenderit sequi?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod nisi assumenda debitis quam iusto est! Laborum earum assumenda tenetur optio ea incidunt molestias odio. Repellendus explicabo nesciunt reprehenderit sequi?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod nisi assumenda debitis quam iusto est! Laborum earum assumenda tenetur optio ea incidunt molestias odio. Repellendus explicabo nesciunt reprehenderit sequi?</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;