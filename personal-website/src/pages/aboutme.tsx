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
              <li>Web Development</li>
              <li>Cloud Computing</li>
              <li>Scripting</li>
              <li>Automation</li>
              <li>Containerization</li>
            </ul>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-md text-secondary">Work Experience</div>
            <ul className="list-none">
              <li>IBM - Client Engineering</li>
              <li>Infosys</li>
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
        <div>PC Building and Scavenging</div>
      </div>
    </>
  );
};

export default aboutme;
