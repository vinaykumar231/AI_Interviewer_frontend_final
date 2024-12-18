import React from "react";
import Header from "./Header";
import InnovativeCard from "./innovativecard";
import MetricsSection from "./metriscsection";
import ServiceSection from "./servicesection";

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  return (
    <>
      <Header />
      <main className="flex overflow-hidden flex-col px-20 pt-32 bg-black -pb-[715px] max-md:px-5 max-md:py-24">
        <header className="sr-only  ">
          <h1>The easier way to attract, hire, and retain top talent</h1>
        </header>
        <section className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full font-extrabold max-md:mt-10 max-md:max-w-full">
              <h1 className="grad-text self-stretch text-5xl xl:text-[2.5rem] tracking-tighter leading-10 uppercase max-md:max-w-full max-md:text-4xl max-md:leading-10 text-white">
                The easier way to attract, hire, and retain top talent
              </h1>
              <p className="mt-9 text-base xl:text-[13px] tracking-wide leading-6 text-white w-[389px]">
                Our Team consists of young and passionate designers, 3D Experts
                and developers. this way we will provide highly modern designs
                with the best tech stacks available.
              </p>
              <div className="flex flex-wrap gap-5 mt-8 max-w-full text-xl text-white uppercase w-[545px]">
                <button className="grad-btn flex-auto gap-3.5 self-stretch px-16 xl:px-8 py-2.5 rounded-3xl min-h-[43px] max-md:px-5">
                  Get started
                </button>
                <button className="grad-btn flex-auto gap-3.5 self-stretch px-16 xl:px-8 py-2.5 rounded-3xl min-h-[43px] max-md:px-5">
                  learn more
                </button>
              </div>
            </div>
          </div>
          <div className=" relative flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            {/* Blurry Dot */}
            <div className="blurry-dot"></div>

            {/* Saturn Image */}
            <img
              src="/saturn.png"
              alt="Saturn"
              className="absolute inset-0 w-full h-full object-cover z-10 xl:ml-[80px]"
            />

            {/* Cards */}
            <div className="flex flex-col grow items-end text-white max-md:mt-10 max-md:max-w-full z-20">
              <InnovativeCard
                title="Innovative"
                description="Always using the best technologies"
              />
              <InnovativeCard
                title="Innovative"
                description="Always using the best technologies"
                additionalClasses="self-start mt-7"
              />
              <InnovativeCard
                title="Effective"
                description="Productive paired with great communication"
                additionalClasses="mt-8"
              />
            </div>
          </div>
        </section>
        <MetricsSection />
        <ServiceSection />
      </main>
    </>
  );
};

export default MyComponent;
