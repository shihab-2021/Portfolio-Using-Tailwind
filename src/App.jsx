function App() {
  return (
    <>
      <div className="fixed inset-0 bg-[url(https://play.tailwindcss.com/img/beams.jpg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <main
        id="home"
        className="relative bg-[url('./assets/blur_bg.png')] min-h-screen"
      >
        {/* navbar code start */}
        <nav className="sticky top-0 p-2 w-fit mx-auto">
          <menu className="bg-[url('./assets/blur_bg.png')] backdrop-blur flex items-center justify-center gap-3 md:gap-8 p-2.5 md:px-5 rounded-lg font-[Arima] font-bold text-lg text-[var(--primaryColor1)] shadow-lg border border-[var(--primaryColor4)]">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </menu>
        </nav>
        {/* navbar code end */}
        {/* Main body section code start */}
        <section className="container mx-auto px-2 md:px-4 py-4 mt-5 md:mt-[-66px] flex flex-col md:flex-row items-center gap-2 md:max-h-screen">
          {/* Primary Information Start */}
          <div className="basis-full md:basis-1/2">
            <h1 className="text-4xl md:text-6xl font-[Carattere] font-medium text-[var(--primaryColor1)]">
              Shajibul Alam Shihab
            </h1>
            <h1 className="text-4xl md:text-6xl font-[Carattere] font-medium text-[var(--primaryColor2)]">
              Web developer
            </h1>
            <div className="mt-8 flex gap-4 items-center font-[Arima]">
              <a
                className="bg-[var(--primaryColor4)] hover:bg-[var(--primaryColor3)] border border-[var(--primaryColor3)] hover:border-[var(--primaryColor4)] text-[var(--primaryColor2)] hover:text-[var(--primaryColor4)] font-bold py-2 px-4 rounded-lg inline-flex items-center shadow-lg transition-all duration-700"
                href="#download"
              >
                <svg
                  className="fill-current w-4 h-4 mr-2 animate-bounce"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                className="bg-[var(--primaryColor4)] hover:bg-[var(--primaryColor3)] border border-[var(--primaryColor3)] hover:border-[var(--primaryColor4)] text-[var(--primaryColor2)] hover:text-[var(--primaryColor4)] font-bold py-2 px-4 rounded-lg inline-flex items-center shadow-lg transition-all duration-700"
              >
                Hire me
              </a>
            </div>
          </div>
          {/* Primary Information End */}
          {/* Core Information Start */}
          <div className="basis-full md:basis-1/2 md:max-h-screen overflow-scroll no-scrollbar scroll-smooth">
            {/* About section start */}
            <div id="about" className="pt-14 md:pt-[90px]">
              <h1 className="text-3xl font-[Lobster] underline text-[var(--primaryColor2)]">
                About
              </h1>
              <p className="py-2 font-[Arima] text-[var(--primaryColor1)] font-medium">
                Hi! I am Shihab, a Fullstack Developer specializing in web
                development I have extensive experience in creating websites
                using HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind, and
                the MERN stack, having completed numerous projects I am highly
                adaptable to innovative technologies and new programming
                features Additionally, I possess knowledge in C, C++, Java, and
                Python, along with a solid understanding of Object-Oriented
                Programming, Data Structures, Algorithms, and database
                management systems, with experience in both MongoDB and MySQL.
              </p>
            </div>
            {/* About section end */}
            {/* Skills section start */}
            <div id="skills" className="pt-14">
              <div>
                <h1 className="text-3xl font-[Lobster] underline text-[var(--primaryColor2)]">
                  Languages
                </h1>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4 px-2 py-4">
                  <div className="bg-[url('./assets/blur_bg.png')] p-4 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex items-center justify-center">
                    <img src="https://i.ibb.co/prHB3RX/image.png" alt="" />
                  </div>
                  <div className="bg-[url('./assets/blur_bg.png')] p-4 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex items-center justify-center">
                    <img src="https://i.ibb.co/26PrkZq/image.png" alt="" />
                  </div>
                  <div className="bg-[url('./assets/blur_bg.png')] p-4 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex items-center justify-center">
                    <img src="https://i.ibb.co/JzhV560/image.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="pt-9">
                <h1 className="text-3xl font-[Lobster] underline text-[var(--primaryColor2)]">
                  Frontend & Backend
                </h1>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4 px-2 py-4">
                  <div className="bg-[url('./assets/blur_bg.png')] p-4 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex items-center justify-center">
                    <img src="https://i.ibb.co/fC6kDLH/image.png" alt="" />
                  </div>
                  <div className="bg-[url('./assets/blur_bg.png')] p-4 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex items-center justify-center">
                    <img src="https://i.ibb.co/tP1YsXX/image.png" alt="" />
                  </div>
                  <div className="bg-[url('./assets/blur_bg.png')] p-4 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex items-center justify-center">
                    <img src="https://i.ibb.co/Q9YVBdm/image.png" alt="" />
                  </div>
                  <div className="bg-[url('./assets/blur_bg.png')] p-4 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex items-center justify-center">
                    <img src="https://i.ibb.co/VvBgC4c/image.png" alt="" />
                  </div>
                  <div className="bg-[url('./assets/blur_bg.png')] p-4 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex items-center justify-center">
                    <img src="https://i.ibb.co/qgKwHZf/image.png" alt="" />
                  </div>
                  <div className="bg-[url('./assets/blur_bg.png')] p-4 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex items-center justify-center">
                    <img
                      src="https://i.ibb.co/ZKdFTJD/480px-Status-iucn-EX-icon-svg.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pt-9">
                <h1 className="text-3xl font-[Lobster] underline text-[var(--primaryColor2)]">
                  UI Framework
                </h1>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4 px-2 py-4">
                  <div className="bg-[url('./assets/blur_bg.png')] p-4 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex items-center justify-center">
                    <img src="https://i.ibb.co/h2wtH1X/image.png" alt="" />
                  </div>
                  <div className="bg-[url('./assets/blur_bg.png')] p-4 rounded-lg shadow-lg transition-all duration-700 hover:scale-110 flex items-center justify-center">
                    <img src="https://i.ibb.co/sHZJtnb/image.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Skills section end */}
            {/* Contact section start */}
            <div id="contact" className="py-14">
              <h1 className="text-3xl font-[Lobster] underline text-[var(--primaryColor2)]">
                Contact
              </h1>
              <form className="p-2 md:p-4 mt-4 bg-[url('./assets/blur_bg.png')] font-[Arima] text-[var(--primaryColor1)] shadow-lg rounded-md font-medium">
                <div className="flex flex-col pb-2">
                  <label htmlFor="email" className="font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="p-2 rounded-md bg-[var(--primaryColor4)] shadow-sm"
                    placeholder="Email"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="name" className="font-bold">
                    Name
                  </label>
                  <input
                    className="p-2 rounded-md bg-[var(--primaryColor4)] shadow-sm"
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="font-bold">
                    Subject
                  </label>
                  <input
                    className="p-2 rounded-md bg-[var(--primaryColor4)] shadow-sm"
                    type="text"
                    id="subject"
                    placeholder="subject"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="font-bold">
                    Message
                  </label>
                  <textarea
                    className="p-2 rounded-md bg-[var(--primaryColor4)] shadow-sm"
                    type="text"
                    id="message"
                    placeholder="Message"
                    rows="7"
                    name="message"
                  />
                </div>

                <div className="py-2">
                  <button className="bg-[var(--primaryColor4)] hover:bg-[var(--primaryColor3)] border border-[var(--primaryColor3)] hover:border-[var(--primaryColor4)] text-[var(--primaryColor2)] hover:text-[var(--primaryColor4)] font-bold py-2 px-4 rounded-lg inline-flex items-center shadow-lg transition-all duration-700">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            {/* Contact section end */}
            {/* Footer section start */}
            <footer>
              <p className="font-[Arima] text-[var(--primaryColor1)] py-2">
                <span className="font-[Lobster]">Shihab</span> © 2024 | All
                Rights Reserved
              </p>
            </footer>
            {/* Footer section end */}
          </div>
          {/* Core Information End */}
        </section>
        {/* Main body section code end */}
      </main>
    </>
  );
}

export default App;
