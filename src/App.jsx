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
      I'm a passionate software developer with a keen interest in crafting efficient and innovative solutions to complex problems. My journey in the realm of coding began with a fascination for turning lines of code into functional, user-friendly applications.

      With a solid foundation in [Programming Languages/Frameworks], I thrive in dynamic environments where I can apply my skills to create robust and scalable software. From designing elegant algorithms to troubleshooting intricate bugs, I find joy in every step of the development process.

      My commitment to staying abreast of the latest industry trends and technologies ensures that my work is not only cutting-edge but also aligns seamlessly with the ever-evolving landscape of software development. I have hands-on experience in [specific technologies, tools, or methodologies] and a proven track record of delivering high-quality software solutions within deadlines.

      Collaboration is at the heart of my approach to development. I enjoy working with cross-functional teams, drawing on diverse perspectives to create software that not only meets but exceeds expectations. Whether it's front-end design, back-end development, or anything in between, I am driven by the challenge of turning conceptual ideas into tangible, user-centric products.

      In addition to my technical skills, I understand the importance of effective communication in translating complex technical concepts into layman's terms. I take pride in my ability to articulate ideas clearly and concisely, fostering a collaborative and inclusive environment for all stakeholders involved.

      Outside the realm of coding, you'll likely find me exploring new technologies, contributing to open-source projects, or immersed in a good book on software architecture. I am continually seeking opportunities to learn, grow, and contribute my skills to projects that make a meaningful impact.


    </p>

    <h3 class="font-semibold text-center mt-3 -mb-2">Find me on</h3>
    <div class="flex justify-center items-center gap-6 my-6">
      <a
        class="text-gray-700 hover:text-orange-600"
        aria-label="Visit TrendyMinds LinkedIn"
        href=""
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="h-6"
        >
          <path
            fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
          ></path>
        </svg>
      </a>
      <a
        class="text-gray-700 hover:text-orange-600"
        aria-label="Visit TrendyMinds YouTube"
        href=""
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="h-6"
        >
          <path
            fill="currentColor"
            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
          ></path>
        </svg>
      </a>
      <a
        class="text-gray-700 hover:text-orange-600"
        aria-label="Visit TrendyMinds Facebook"
        href=""
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          class="h-6"
        >
          <path
            fill="currentColor"
            d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          ></path>
        </svg>
      </a>
      <a
        class="text-gray-700 hover:text-orange-600"
        aria-label="Visit TrendyMinds Instagram"
        href=""
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="h-6"
        >
          <path
            fill="currentColor"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          ></path>
        </svg>
      </a>
      <a
        class="text-gray-700 hover:text-orange-600"
        aria-label="Visit TrendyMinds Twitter"
        href=""
        target="_blank"
      >
        <svg
          class="h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
          ></path>
        </svg>
      </a>
    </div>

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
