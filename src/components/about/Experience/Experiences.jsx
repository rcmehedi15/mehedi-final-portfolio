import React, { useContext } from "react";
import AboutMeContext from "../../../context/AboutMeContext";
import { BiSolidShoppingBagAlt } from "react-icons/bi";

const Experiences = () => {
  const { aboutExperience } = useContext(AboutMeContext);

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-ternary-dark dark:text-ternary-light mt-4 ">
        # <span className="ml-2">Work Experiance 👨‍💼</span>
      </h2>{" "}
      <br />
      <ul className="w-full">
        <li className="w-full mb-8 flex ">
          <h5 className="text-2xl  text-ternary-dark dark:text-ternary-light">
            4.{" "}
          </h5>
          <div className="flex-1 ml-8">
            <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
              Graphic Designer | Digital Marketer | Technical Call Support |
              Website Maintainer
            </h5>
            <span className="w-full text-lg md:text-xl mb-4 text-ternary-dark dark:text-ternary-light flex items-center  gap-2">
              <BiSolidShoppingBagAlt />
              FASTNETBD | Sector 11, Road -16,House- 03 ,Uttara -Dhaka,
              Bangladesh | (Sep 2023 – Present)
            </span>

            <p className="w-full text-lg mt-3 text-ternary-dark dark:text-ternary-light">
            ⭐ The ISP Company Essential My Work <br />
              - Social Media and Offline Graphic Design <br />
              - Video Making <br />
              - Meta Digital Marketing <br />
              - Attractive SEO Friendly Content Writing <br />
              - Website Up to date and Maintain <br />
              - Customer Technical Problem Solving <br />- Helping Accountants
            </p>
          </div>
        </li>
        <li className="w-full mb-8 flex ">
          <h5 className="text-2xl  text-ternary-dark dark:text-ternary-light">
            3.{" "}
          </h5>
          <div className="flex-1 ml-8">
            <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
              Software Engineering (Intern)
            </h5>
            <span className="w-full text-lg md:text-xl mb-4 text-ternary-dark dark:text-ternary-light flex items-center  gap-2">
              <BiSolidShoppingBagAlt />
              Divine IT LTD | Sector 10, Road - 12, House - 29 , Uttara-Dhaka,
              Bangladesh | (OCT 2022 – DEC 2022)
            </span>

            <p className="w-full text-lg mt-3 text-ternary-dark dark:text-ternary-light">
                
            ⭐ My Work <br />
              - Teamwork  <br />
              - Software and Website Problem Solving <br /> 
              - New Topic Learning <br />
              - Company ERP Software solution learning <br />
              - per day small task complete <br />
              - task management system Project front-end building <br />
              - project presentation 
            </p>
          </div>
        </li>

        <li className="w-full mb-8 flex ">
          <h5 className="text-2xl  text-ternary-dark dark:text-ternary-light">
            2.{" "}
          </h5>
          <div className="flex-1 ml-8">
            <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
              Assistant General Manager -IT (Remote)
            </h5>
            <span className="w-full text-xl   mb-4 text-ternary-dark dark:text-ternary-light flex items-center gap-2">
              <BiSolidShoppingBagAlt />
              Travel Til Dawn | South California, USA | (July 2021 – Aug 2022)
            </span>

            <p className="w-full text-lg mt-3 text-ternary-dark dark:text-ternary-light">
            ⭐ Assisting in <br />
              - Social media post design, <br />
              - Website maintenance, <br />
              - Video editing and <br />
              - Digital marketing and  <br />
              providing guidance on various business development issues
            </p>
          </div>
        </li>

        <li className="w-full mb-8 flex ">
          <h5 className="text-2xl  text-ternary-dark dark:text-ternary-light">
            1.{" "}
          </h5>
          <div className="flex-1 ml-8">
            <h5 className="w-full text-2xl   text-ternary-dark dark:text-ternary-light ">
              Full Stack Web Developer And Graphic Designer (Remote)
            </h5>
            <span className="w-full text-xl   mb-4 text-ternary-dark dark:text-ternary-light flex items-center gap-2">
              <BiSolidShoppingBagAlt />
              Fiverr - Upwork | World Wide | (July 2020 – Present)
            </span>

            <p className="w-full text-lg mt-3 text-ternary-dark dark:text-ternary-light">
            
            ⭐ Graphic Design Service - <br />
                - Logo Design <br />
                - Business card Design <br />
                - Social Media Post Design <br />
                - Ads Design <br />
                - Flyer Design <br />
                - Brochure Design <br />
                - Brand identity Design etc <br />
            ⭐ Web Development Service <br />
                - eCommerce website. <br />
                - Business website. <br />
                - Blog website. <br />
                - Portfolio website. <br />
                - Event website. <br />
                - Personal website. <br />
                - Membership website. <br />
                - Nonprofit website. <br />
                - Media website. <br />
                - Website bug solve.  <br />
                - Custom website build. <br />
            ⭐ Other Service - <br />
                - FB/Instagram ads managing <br />
                - SEO Friendly Content Writing <br />
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Experiences;
