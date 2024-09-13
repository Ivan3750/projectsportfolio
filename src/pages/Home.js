import ProjectBlock from "../ProjectBlock";
import FrontEndImg from "../images/FrontDevelopment.png"
import SoftDevelopmentImg from "../images/Software Development.png"
import ReactImg from "../images/best-react-component-libraries.webp"
import projects from "../projects.json"
import '../App.css';
const HomePage = () => {
    return ( <div>
    <header>
        <p className="header-logoName">Projects</p>
    </header>
        <div className="hero">
            <h1 className="title"><span className="React-txt">React</span> projects by Ivan Kohan</h1>
            <div className="images-block">
                <img src={FrontEndImg} alt="" className="FrontEndImg"/>
                <img src={SoftDevelopmentImg} alt="" className="SoftDevelopmentImg"/>
                <img src={ReactImg} alt=""  className="ReactImg"/>
            </div>
        </div>
        <section className="projects-section">
            {projects.map((project)=>{
                return <ProjectBlock key={project.id} project={project} />
            })}
        </section>    
    </div>

);
}
 
export default HomePage;