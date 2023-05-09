import React from "react";

const aboutme = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-screen justify-center space-x-10">
        <img
          className="w-16 md:w-32 lg:w-48 rounded-xl justify-self-end"
          src="/IMG_0209 Medium.png"
        />
        <div className="grid grid-rows-5">
          <div className="card card-normal text-md text-accent">
            Adharsh Rajendran is a software engineer. He studied Computer
            Science at the University of Texas at Dallas. His goal is to become
            well versed in all the areas of the software lifecycle. Starting his
            career at Infosys as an associate programmer while completing his
            graduate studies, he then migrated his knowledge and skills to IBM
            as a Cloud Engineer. Here he started peeling the many layers of the
            software onion and learned about front-end, back-end, cloud
            architecture, deployment strategies and cloud native concepts.
          </div>
          <div className="divider">Details</div>
          <div className="grid grid-cols-2">
            <div className="text-md text-secondary">Skills</div>
            <ul className="list-none">
              <li>Web Development - UI Design and Content Population</li>
              <li>Cloud Computing for Application Deployment and Management</li>
              <li>Scripting using APIs and Useful Frameworks</li>
              <li>Automation on Cloud Platforms</li>
              <li>Containerization with Docker</li>
            </ul>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-md text-secondary">Work Experience</div>
            <ul className="list-none">
              <li>IBM - Client Engineering</li>
              <li> - JS front-end and back-end ( Node, Express, Next )</li>
              <li> - Python scripting</li>
              <li>
                {" "}
                - Red Hat Openshift and Kubernetes ( Deployments, Routing,
                Standard Cloud Configuration ... )
              </li>
              <li> - Watson Studio ( Watson Assistant, Watson Discovery )</li>
              <li> - Other IBM Technology ( Instana, Aspera ) </li>
              <li>Infosys</li>
              <li> - ServiceNow, Javascript</li>
            </ul>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-md text-secondary">Eduction</div>
            <ul className="list-none">
              <li>University of Texas at Dallas ( UTD )</li>
              <li>Computer Science</li>
              <li>Master of Science</li>
              <li>Bachelor of Science</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="divider">Hobbies and Pictures</div>
      <div className="grid grid-rows-2 w-screen justify-center">
        <div>PC Building and Parts Scavenging</div>
        <div>Cooking and Trying New Recipes</div>
        <div>Software and Hardware Exploration</div>
        <div>Working Out and Fitness</div>
        <div>
          “No man has the right to be an amateur in the matter of physical
          training. It is a shame for a man to grow old without seeing the
          beauty and strength of which his body is capable.”
        </div>
        <div className="text-xl">More Content coming soon</div>
      </div>
    </>
  );
};

export default aboutme;
