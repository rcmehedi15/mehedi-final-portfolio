import "./Project.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiReactrouter,
  SiMongodb,
  SiNodedotjs,
  SiFirebase,
  SiReact,
  SiReacttable,
} from "react-icons/si";

const Project = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="section">
          <h2 className="text-4xl font-bold text-ternary-dark dark:text-ternary-light mt-4">
            🎗<span className="ml-2"> Projects </span>
          </h2>{" "}
          <br />
          <div className="allProjects">
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/fn5kqN7/nextgen.jpg"
                      alt="NextGen Toy Shop"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>NextGen Toy Shop</h2>
                  <p style={{ textAlign: "left" }}>
                    <li>Product Buy and Selling</li>
                    <li>Product Managment System</li>
                    <li>Without Login No Purchase Product</li>
                  </p>
                  <span className="techColor">Technology Used </span>
                  <p>
                    HTML,CSS,Tailwincss,React Js,Firebase,Express Js,MongoDB
                  </p>{" "}
                  <br />
                  <div>
                    <a
                      href="https://nextgen-toy.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/rcmehedi15/NextGen-AI-Toy-House"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btnSrc onbt">
                        Source Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/MD0bkmg/smhunt.jpg"
                      alt="Tech Blogger"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Tech Blogger</h2>
                  <p style={{ textAlign: "left" }}>
                    <li>Reading New Tech News</li>
                    <li>Reading Time Count</li>
                    <li>Blog Reading Bookmark</li>
                  </p>
                  <span className="techColor ">Technology Used </span>
                  <p>HTML,Bootstrap 5,React Js </p> <br /> <br />
                  <div>
                    <a
                      href="https://sm-hunt-blog-react-js.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/rcmehedi15/SM-Hunt-Blog-React-Js"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btnSrc onbt">
                        Source Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/KGHFTm8/smfitness.jpg"
                      alt="SM Fitness Center"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>SM Fitness Center</h2>
                  <p style={{ textAlign: "left" }}>
                    <li>Online Course Selling </li>
                    <li>Popular Classes Define</li>
                    <li>Admin User Managment</li>
                  </p>
                  <span className="techColor">Technology Used </span>
                  <p>
                    HTML,CSS,Tailwincss,React Js,Firebase,Express Js,MongoDB
                  </p>{" "}
                  <br />
                  <div>
                    <a
                      href="https://sm-fitcenter.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/rcmehedi15/SM-FitShop-Client"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btnSrc onbt">
                        Source Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/vcs32gZ/Computer-networking-product-bangladesh.jpg"
                      alt="Social media Post design"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2> Graphic Design  </h2>

                  <br />

                  <div>
                    <a
                      href="https://www.behance.net/MehediDesigner_"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        Live
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FB Marketing  */}
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/0yCVc1k/ads-boosting.jpg"
                      alt="Digital Marketing"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2> Facebook Ads Campaigns </h2>

                  <br />

                  <div>
                    <a
                      href="https://ibb.co/0yCVc1k"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        Live
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO   */}
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/V3tjHN4/SEO.jpg" alt="SEO"
                      
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2> SEO  Keyword Ranking & GMB </h2>

                  <br />

                  <div>
                    <a
                      href="https://ibb.co/V3tjHN4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        Live
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
