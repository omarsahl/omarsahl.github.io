import Socials from './components/socials';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Footer from './components/footer';
import MouseTracker from './components/mousetracker';
import NavTabs from './components/nav';

export default function Home() {
  return (
    <div className="relative">
      <div
        title="Hello!"
        className="page-label fixed z-[-1] hidden whitespace-pre text-[22vmin] font-bold text-strawberry-400 opacity-[0.03] lg:block"
      >
        <h1 aria-hidden="true">Hello!</h1>
      </div>
      <MouseTracker />
      <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="pb-10 pt-3 lg:sticky lg:top-0 lg:max-h-screen lg:px-8 lg:py-24">
            <img
              className="mx-auto aspect-square w-32 min-w-20 drop-shadow-[0_0_0.3rem_#ffffff70] lg:w-20"
              src="/os.svg"
              alt="Omar Sahl"
            />
          </div>

          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-4/12 lg:flex-col lg:justify-between lg:py-24">
            <About />
            <NavTabs />
            <Socials />
          </header>

          <main className="pt-24 lg:w-6/12 lg:py-24">
            <Experience />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
