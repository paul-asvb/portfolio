import content from "./projects.toml";

const projects = content.projects;
const email = content.email.text;
const App = () => (
  <div className="bg-paul-100 container mx-auto py-8 flex flex-col w-2/3 print:w-full">
    <div className="flex flex-row w-full justify-between border-b border-paul-900 pb-8 mb-4 items-end">
      <div className="flex flex-row items-end">
        <img
          src="/paul_mayer.jpg"
          className="w-32 h-32 object-cover bg-gray-300 shrink-0"
        ></img>
        <div className="ml-4 flex flex-col items-left ">
          <h1 className="text-xl font-bold text-paul-900">Paul Mayer</h1>
          <p className="text-gray-600">Software Developer</p>
          <div className="flex flex-row items-left">
            <a
              className="mr-2 text-paul-700 underline"
              href="https://www.linkedin.com/in/paul-mayer-0b9457ba/"
            >
              linkedin
            </a>
            <a
              className="text-paul-700 underline"
              href="https://github.com/paul-asvb"
            >
              github
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-right text-right ">
        <p>Bazeillesstr.21</p>
        <p>81669 München</p>
        <p>0176 636 52 814</p>
        <a
          className=" text-paul-700 underline"
          href={
            "mailto:paul@paul-mayer.eu?subject=Invitation for Interview at MBS&body=" +
            email
          }
        >
          paul@paul-mayer.eu
        </a>
      </div>
    </div>

    <h2 className="text-2xl font-bold mb-4 text-paul-900">About Me</h2>
    <p>
      I am a passionate software developer and entrepreneur with a keen interest
      in crafting efficient and innovative solutions to complex problems. My
      journey in the realm of coding began as a young boy with writing programs
      for my own entertainment. Besides my interest in computers i always had a
      strong pull towards entrepreneurship, i started multiple companies with
      variying levels of success. My latest company deepc, based here in munich,
      has grown to around 60 people and offices in the UK, US and Australia.
    </p>
    <p>
      My commitment to staying abreast of the latest industry trends and
      technologies ensures that my work is not only cutting-edge but also aligns
      seamlessly with the ever-evolving landscape of software development and
      tech management. In addition to my technical skills, I understand the
      importance of effective communication in translating complex technical
      concepts into layman's terms.
    </p>
    <p className="">
      Articulating ideas and concepts clearly and concisely, fostering a
      collaborative and inclusive environment and motivating my peers and
      students will help me to not only transfer knowledge, but spark the
      entrepreneurial spirit. We all want work in dynamic environments where
      innovation brings a sense of joy and accomplishment. I enjoy working with
      cross-functional teams, drawing on diverse perspectives to create products
      and services that not only meets but exceeds expectations. I want to
      learn, grow, and contribute my skills in a way that make a meaningful
      impact.
    </p>
    <h2 className="text-2xl font-bold mt-6 mb-4">Education</h2>
    <div className="mt-4 pt-4 mb-6 border-double border-paul-950 border-t">
      <div className="flex justify-between">
        <span className="font-bold">Akademie U5</span>
        <p>
          <span className="text-gray-600">2010-2013</span>
        </p>
      </div>
      <p className="mt-2">Kommunikationsdesign</p>
    </div>
    <div className="mt-4 pt-4 mb-6 border-double border-paul-950 border-t">
      <div className="flex justify-between">
        <span className="font-bold">LMU München</span>
        <p>
          <span className="text-gray-600">2007-2010</span>
        </p>
      </div>
      <p className="mt-2">
        Volkswirtschaft mit Nebenfach Politik und Soziologie
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6 mb-4">Experience</h2>
    {projects.map((p) => (
      <div
        key={p.partner}
        className="mt-4 pt-4 mb-6 border-double border-paul-950 border-t"
      >
        <div className="flex justify-between">
          <span className="font-bold">{p.partner}</span>
          <p>
            <span className="">
              {p.from} - {p.to}
            </span>
          </p>
        </div>
        <p className="text-gray-600 ">{p.position}</p>
        <p className="mt-2">{p.description}</p>
        <div className="mt-4 justify-left select-none flex">
          {p.tech.map((t) => (
            <div
              key={t}
              className="py-1 px-3 mr-2 no-underline border border-paul-600 rounded-full  text-paul-600 text-sm "
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default App;
