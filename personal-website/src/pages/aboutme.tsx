import React from "react";

const aboutme = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-screen justify-center space-x-10">
        <img
          className="w-16 md:w-32 lg:w-48 rounded-xl justify-self-end"
          src="/IMG_0209 Medium.png"
        />
        <div className="grid grid-rows-4">
          <div className="text-md text-accent">Summary</div>
          <div className="text-md text-secondary">Skills</div>
          <ul>
            <li>Web Development</li>
            <li>Cloud Compunting</li>
            <li>Scripting</li>
            <li>Automation</li>
            <li>Containerization</li>
          </ul>
          <div className="text-md text-secondary">Work Experience</div>
          <div className="text-md text-secondary">Eduction</div>
        </div>
      </div>
      <div className="flex w-screen justify-center text-lg text-accent">
        Hobbies and Pictures
      </div>
    </>
  );
};

export default aboutme;
