import React from "react";
import Heading from "./Heading";
import "../index.css";
import "../style/project.css";
import Projectcard from "./projects/Projectcard";
import p1Image from "../assets/project_images/p1.webp";
import p2Image from "../assets/project_images/p2.webp";
import p3Image from "../assets/project_images/p3.webp";
import p4Image from "../assets/project_images/p4.webp";
import p5Image from "../assets/project_images/p5.webp";
import p6Image from "../assets/project_images/p6.webp";
import p7Image from "../assets/project_images/p7.webp";
import p8Image from "../assets/project_images/p8.webp";
import p9Image from "../assets/project_images/p9.webp";
import p10Image from "../assets/project_images/p10.webp";
import p11Image from "../assets/project_images/p11.webp";
import p12Image from "../assets/project_images/p12.webp";

const Projects = ({ theme }) => {
  return (
    <>
      <main className={`${theme === "dark" ? "dark" : "light"} projects`}>
        <Heading
          heading="project"
          description="A selection of my favorite works."
        />
        <section className="project_container">
          <Projectcard
            projectImage={p12Image}
            projectTitle="Full-Stack MERN  Blogging Site"
            projectDescription="Developed a fully functional and responsive blogging website using MERN stack, hosted on Render.com for back-end and Vercel for front-end. Implemented features allowing users to write, edit, and share their blog posts, as well as add high-quality images.
"
            liveLinkUrl="https://dotblogs.vercel.app"
            linkBtnText="Preview Link"
            githubLink="https://github.com/shyamtala003/blogging-site"
          />
          <Projectcard
            projectImage={p6Image}
            projectTitle="Financial dashboard(Figma to Code)"
            projectDescription="🎊I designed Financial dashboard for bank using just Htm,Css and JavaScript. The page Design is fully responsive.I uses swiper JS for bank cards Slider🎉
"
            liveLinkUrl="https://finance-dashboard-seven.vercel.app"
            linkBtnText="Preview Link"
            githubLink="https://github.com/shyamtala003/finance_dashboard"
          />

          <Projectcard
            projectImage={p7Image}
            projectTitle="Marketplace dashboard(Figma to Code)"
            projectDescription="🎊Marketplace dashboard UI Desing build by using HTML,CSS and JS🎉
"
            liveLinkUrl="https://dashboard-ui-lake.vercel.app/"
            linkBtnText="Preview Link"
            githubLink="https://github.com/shyamtala003/dashboard_ui"
          />

          <Projectcard
            projectImage={p8Image}
            projectTitle="Rode.com - Homepage(Clone)"
            projectDescription="I made rode.com home page clone using Tailwind css and flowbites ui component library.
"
            liveLinkUrl="https://rrode.netlify.app/"
            linkBtnText="Preview Link"
            githubLink="https://github.com/shyamtala003/rode-clone"
          />

          <Projectcard
            projectImage={p9Image}
            projectTitle="paytm.com - Homepage(Clone)"
            projectDescription="I made PAYTM home page clone using Tailwind css  and flowbites ui component library.It is fully responsive"
            liveLinkUrl="https://paytm-cln.netlify.app/"
            linkBtnText="Preview Link"
            githubLink="https://github.com/shyamtala003/paytm-clone"
          />

          <Projectcard
            projectImage={p1Image}
            projectTitle="Monogradient"
            projectDescription="Monogradient is a web-based gradient solutiuon currently in beta
            that allows you to find, save and craft gradients with a creative
            community!"
            liveLinkUrl="https://monogradient.vercel.app/"
            linkBtnText="Visit Monogradient"
            githubLink="https://github.com/shyamtala003/gradient_container"
          />

          <Projectcard
            projectImage={p11Image}
            projectTitle="Daily News App"
            projectDescription="I Build Daily News App using ReactJs and TailwindCss.I uses Newsapi for getting news content.
            🚫Note~ Live link doesn't work because newsapi isn't free for deployments"
            liveLinkUrl="https://dailynewsindia.vercel.app/"
            linkBtnText="Visit DailyNews"
            githubLink="https://github.com/shyamtala003/DailyNewsApp"
          />
          <Projectcard
            projectImage={p2Image}
            projectTitle="The Palettes"
            projectDescription="Find inspiration from 50 website color themes that you can try. From bold to minimal and every color scheme in between we show you designer-approved color schemes to try."
            liveLinkUrl="https://thepalette.vercel.app/"
            linkBtnText="Visit ThePalletes"
            githubLink="https://github.com/shyamtala003/the_palettes"
          />
          <Projectcard
            projectImage={p3Image}
            projectTitle="Shopify Clone"
            projectDescription="I build this Shopify.in home page clone using TailwindCss and FlowBites(library of UI components)"
            liveLinkUrl="https://shopify-cl.netlify.app/"
            linkBtnText="See Shopify Clone"
            githubLink="https://github.com/shyamtala003/shopify-clone"
          />
          <Projectcard
            projectImage={p4Image}
            projectTitle="Redesign Codercommunity.io"
            projectDescription="I redesign codercommunity.io home page using HTML,CSS and JavaScript. It's fully responsive.In this landing page I used swiper js . By using this JS plugins I learned how can make responsive slider and responsive card slider."
            liveLinkUrl="https://codercomm.netlify.app/"
            linkBtnText="Preview Link"
            githubLink="https://github.com/shyamtala003/CoderCom"
          />
          <Projectcard
            projectImage={p5Image}
            projectTitle="Cella(Figma To Code)"
            projectDescription="Conver figma template in to Code. I desing this stuff using Tailwindcss and Flowbites ui component library"
            liveLinkUrl="https://beautifull.netlify.app/"
            linkBtnText="Preview Link"
            githubLink="https://github.com/shyamtala003/cella-redesign"
          />

          <Projectcard
            projectImage={p10Image}
            projectTitle="BelairMaternity(Figma To Code)"
            projectDescription="Conver figma template in to Code. I desing this blog page for BelairmAternity using HTML,CSS,JS"
            liveLinkUrl="https://belair-maternity.vercel.app/"
            linkBtnText="Preview Link"
            githubLink="https://github.com/shyamtala003/Belair_Maternity"
          />
        </section>
      </main>
    </>
  );
};

export default Projects;
