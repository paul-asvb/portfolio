import React from "react";
import content from "./projects.toml";

const projects = content.projects;

const App = () => (
  <div class="container mx-auto py-8 flex flex-col w-2/3 print:w-full">
    <div class="col-span-4 sm:col-span-3 bg-white ">
      <div class="flex flex-col items-center">
        <img
          src="/paul_mayer.png"
          class="w-32 h-32 object-cover bg-gray-300 rounded-full mb-4 shrink-0"
        ></img>
        <h1 class="text-xl font-bold">Paul Mayer</h1>
        <p class="text-gray-600">Software Developer</p>
      </div>
    </div>
    <h2 class="text-xl font-bold mb-4">About Me</h2>
    <p class="text-gray-700">
      I am a passionate software developer and entrepreneur with a keen interest in crafting efficient and innovative solutions to complex problems.
      My journey in the realm of coding began as a young boy with writing programs for my own entertainment.
      Besides my interest in computers i always had a strong pull towards entrepreneurship, i started multiple companies with variying levels of success.
      My latest company deepc, based here in munich, has grown to around 60 people with over 2 Mio. € in ARR.
      My commitment to staying abreast of the latest industry trends and technologies ensures that my work is not only cutting-edge
      but also aligns seamlessly with the ever-evolving landscape of software development and tech management.
      In addition to my technical skills, I understand the importance of effective communication in translating complex technical concepts into layman's terms.
      Articulating ideas and concepts clearly and concisely, fostering a collaborative and inclusive environment and motivating my peers and students will help
      me to not only transfer knowledge, but spark the entrepreneurial spirit in a dynamic environments where innovation brings a sense of joy and accomplishment.
      I enjoy working with cross-functional teams, drawing on diverse perspectives to create products that not only meets but exceeds expectations.
      Seeking for opportunities to learn, grow, and contribute my skills in a way that make a meaningful impact is my goal for every project i start.
    </p>

    <h2 class="text-xl font-bold mt-6 mb-4">Experience</h2>
    {
      projects.map((p) => (
        <div class="mb-6">
          <div class="flex justify-between">
            <span class="text-gray-600 font-bold">{p.partner} - {p.position}</span>
            <p>
              <span class="text-gray-600">{p.from} - {p.to}</span>
            </p>
          </div>
          <p class="mt-2">
            {p.description}
          </p>
        </div>
      ))
    }

  </div>
);

export default App;
