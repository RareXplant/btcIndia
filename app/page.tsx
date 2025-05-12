import { ContactUs } from "@/components/contactUs";
import { Navigation } from "@/components/navigation";
import Image from "next/image";
import { ReactNode } from "react";
import { BiEdit, BiRecycle } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
import { FaComputer } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <div className=" md:h-[120vh] lg:pb-[30vh] h-[90vh] w-full pb-12 pt-[4rem] px-4 flex flex-col relative z-0 ">
        <Navigation />
        <div className="flex-[1] flex justify-center flex-col">
          <div>
            <p className="text-[#b42322] text-xl font-extrabold ">
              Consrtuction / Marketing Agency
            </p>
            <p className="md:text-[6rem] leading-[50px] md:leading-normal md:mt-0 mt-5 text-4xl pr-3 font-semibold">
              Unlock Growth With BTC India
            </p>
            <p className="text-sm mt-3 max-w-2x1">
              BTC India is a forward-thinking company specializing in utility and infrastructure construction, while also operating as a full-service marketing agency. <span> We build strong foundations — both in the ground and in the digital world — combining hands-on construction expertise with powerful branding, </span> digital campaigns, and strategic marketing solutions.
            </p>
          </div>
        </div>
        <div className=" flex md:flex-row flex-col gap-x-18 md:gap-y-0 gap-y-6">
          <button className=" w-fit bg-[#b42322] text-black p-3 px-4">
            OUR SERVICES
          </button>
          <button className=" w-fit border-2 text-white p-3 px-5.5">
            CONTACT US
          </button>
        </div>
        <Image
          src="/home_bg.jpg"
          alt="home bg"
          fill
          className="-z-[1] object-cover object-top"
        />

        {/* Red Overlay Mask */}
        <div className="absolute inset-0 bg-[#141a1f] opacity-90 -z-[1]"></div>

      </div>
      <div className="w-full relative z-10 lg:-mt-30">
        <div className="mx-auto max-w-[1200px]">
          <div className="lg:flex">
            <div className="bg-[#b42322] p-10 text-gray-800 space-y-4 flex-1">
              <p className="text-2xl font-bold">Build Your Dream</p>
              <p className="text-5xl text-balance font-bold">Smart Construction Meets Bold Marketing</p>
              <p className="text-sm">
                BTC India is a dual-force company specializing in utility construction and strategic marketing. We bring expertise both on-site and online — building strong infrastructure and bold brand presence. With innovation and precision, BTC India helps businesses grow from the ground up, literally.
              </p>
              <button type="button" className="px-4 mt-8 py-2 text-slate-50 bg-gray-800">WORK WITH US</button>
            </div>
            <div className="bg-white md:grid-cols-2 grid divide-x-2 divide-y-2 grid-cols-1 flex-1">
              <GridItem heading="999+" subHeading="Successfully Project Finished." />
              <GridItem heading="16+" subHeading="Years of experience with proud." />
              <GridItem heading="2000+" subHeading="Happy clients." />
              <GridItem heading="98%" subHeading="Client Satisfaction Ratio." />
            </div>
          </div>
        </div>
      </div>
      <WelcomeSection />
      <GrowthSection />
      <ProjectsSection />
      <Testimonials />
      <ContactUs />
    </main>

  );
}



function Testimonials() {
  const Testimonial: React.FC<{
    src: string,
    heading: string,
    subHeading: string,
    subSubHeading: string
  }> = ({ heading, src, subHeading, subSubHeading }) => {
    return (
      <div className=" bg-[#141a1f] border-b-8 border-[#b42322] p-8 z-0 w-full rounded-md  relative">
        <div className="h-15 w-15 rounded-full relative overflow-clip">
          <Image src={src} fill alt={heading} className="-z-1 object-cover" />
        </div>
        <div className="z-2 mt-5">
          <p className="text-2xl text-[#b42322] font-bold">{heading}</p>
          <p className="text-lg mt-3 font-bold">{subHeading}</p>
          <p className="text-sm text-slate-50 mt-1">{subSubHeading}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="md:px-10 px-5 bg-slate-50 py-20">
      <div className="text-center">
        <p className="text-2xl font-semibold text-gray-950">What our Clients Say</p>
        <p className="text-4xl font-extrabold text-gray-950 mt-9">Testimonials</p>
      </div>
      <div className="grid gap-2 lg:gap-4 md:grid-cols-2 m-4 mt-12 grid-cols-1">
        <Testimonial heading="Exceptional Service and Results" subHeading="Priya Menon" subSubHeading="Partnering with BTC India was the best decision for our business. Their expertise in digital marketing brought in more leads than we imagined. Highly recommend!" src="/testimonial_av_1.png" />
        <Testimonial heading="A Game-Changer for Our Growth!" subHeading="Amit Sharma" subSubHeading="From Building development to strategies, BTC India exceeded our expectations. They truly understood our goals and delivered beyond what we thought possible." src="/testimonial_av_2.png" />
        <Testimonial heading="Creative, Reliable, and Professional" subHeading="Ravi Gupta" subSubHeading="The team at BTC India transformed our social media presence. Our engagement rates skyrocketed, and we finally feel connected to our audience." src="/testimonial_av_3.png" />
        <Testimonial heading="Outstanding Support and Expertise!" subHeading="Neha Patel" subSubHeading="What sets BTC India apart is their dedication and transparency. Their analytics reports were detailed and insightful, helping us make informed decisions." src="/testimonial_av_4.png" />
      </div>
    </div>
  )
}

function ProjectsSection() {

  const ProjectCard: React.FC<{
    src: string,
    heading: string,
    subHeading: string
  }> = ({ heading, src, subHeading }) => {
    return (
      <div className="h-[400px] z-0 w-full rounded-md flex items-end overflow-hidden relative">
        <Image src={src} fill alt={heading} className="-z-1 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141a1f]/80 to-transparent z-0"></div>
        <div className="p-8 z-2">
          <p className=" text-xl font-bold">{heading}</p>
          <p className="text-md font-bold">{subHeading}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="md:px-10 px-5 bg-slate-50 py-20">
      <p className="text-2xl font-semibold text-gray-950">About Project</p>
      <div className="md:flex space-y-4 justify-between items-center pr-8">
        <p className="text-4xl font-extrabold text-gray-950 mt-9">Our Latest Works</p>
        <button className="bg-[#b42322] px-4 py-2 text-black">
          VIEW SERVICE
        </button>
      </div>
      <div className="grid gap-x-2 gap-y-2 md:grid-cols-4 m-4 mt-12 grid-cols-1">
        <ProjectCard heading="Building Future" subHeading="Processing" src="/cont1.jpg" />
        <ProjectCard heading="Techno Hub" subHeading="Processing" src="/cont2.jpg" />
        <ProjectCard heading="Yoga Class" subHeading="Marketing" src="/yoga_class.png" />
        <ProjectCard heading="Medical" subHeading="Adv." src="/medical.png" />
      </div>
    </div>
  )
}

function GrowthSection() {
  const Button: React.FC<{
    startIcon: ReactNode,
    label: string
  }> = ({ startIcon, label }) => {
    return (
      <div className="flex gap-x-4 text-2xl items-center">
        {startIcon}
        <p className="text-gray-800 font-medium text-md">{label}</p>
      </div>
    )
  }
  return (
    <div className="w-full z-10">
      <div className="lg:flex">
        <div className="relative bg-[#141a1f]/80 p-8 lg:p-18 pb-2 text-white-800 space-y-4 flex-1">
          <p className="text-2xl font-bold text-[#b42322]">Growth</p>
          <p className="text-3xl lg:text-5xl leading-14 font-bold">Empowering Your Business, Restoring Your Peace of Mind</p>
          <p className="text-sm">
            Our mission is to give you more than just results – we’re here to give you back your time, your peace of mind, and the confidence that your business is moving in the right direction.
          </p>
          <button type="button" className="px-4 mt-8 py-2 text-black bg-[#b42322]">GET IN TOUCH</button>
          <Image
            src="/growth_bg.jpg"
            alt="growth bg"
            fill
            className="-z-[1] object-cover object-top"
          />
        </div>
        <div className="bg-[#b42322]/80 p-8 lg:flex lg:flex-col justify-center lg:p-18 space-y-4 text-gray-800 pb-2 relative flex-1">
          <p className="text-2xl font-bold ">We Follow Best Practices</p>
          <p className="text-md">At BTC India, we help entrepreneurs like you turn their vision into success.</p>
          <div className="mt-8 space-y-3">
            <Button startIcon={
              <BiRecycle />
            } label="Sustainability" />
            <Button startIcon={
              <CgLock />
            } label="Projects On Time" />
            <Button startIcon={
              <FaComputer />
            } label="Modern Technology" />
            <Button startIcon={
              <BiEdit />
            } label="Latest Designs" />
          </div>
          <Image
            src="/growth_bg_2.png"
            alt="growth bg"
            fill
            className="-z-[1] object-cover object-top"
          />
        </div>
      </div>
    </div>
  )
}

function WelcomeSection() {
  return (
    <div className="md:px-10 px-5 bg-slate-50 py-20">
      <p className="text-2xl font-semibold text-gray-950">Welcome to BTC India</p>
      <div className="md:flex space-y-4 justify-between items-center pr-8">
        <p className="text-4xl font-extrabold text-gray-950 mt-9">
          Our Quality Services </p>
        <button className="hover:text-[#b42322]  text-black">
          VIEW ALL
        </button>
      </div>
      <div className="grid lg:gap-3 gap-y-8 md:grid-cols-3 m-4 mt-12 grid-cols-1">
        <ServiceItem src="/image1.jpg" heading="Smarter Construction" subHeading="BTC India delivers high-performance utility and infrastructure projects with precision, safety, and speed — laying the groundwork for better communities.
with your goals." />
        <ServiceItem src="/imge2.jpg" heading="Power of the BTC India Team" subHeading="Our experienced and dedicated crew is the backbone of every project. Collaboration, trust, and skill drive our success on and off the field." />
        <ServiceItem src="/imge3.jpg" heading="Future-Ready Today" subHeading="From trenchless technologies to project management tools, BTC India integrates modern technology to boost efficiency, accuracy, and project delivery." />
        <ServiceItem src="/web_dev.png" heading="Website Development" subHeading="We create stunning, user-friendly websites aligned" />
        <ServiceItem src="/google_ads.png" heading="Google Ads Management" subHeading="Maximize reach on Google with expertly managed campaigns. From keyword research to performance." />
        <ServiceItem src="/social_marketing.png" heading="Social Media Marketing" subHeading="Run targeted ad campaigns on Facebook and Instagram to boost your brand visibility." />
      </div>
    </div>
  )
}

export function ServiceItem({ src, heading, subHeading }: {
  heading: string, subHeading: string, src: string
}) {
  return (

    <div className="flex flex-col w-full">
      <div className="flex-[1] border-black">
        <Image height={200} width={200} className="w-full object-contain h-full" alt="services" src={src} />
      </div>
      <div className="flex-[2] py-2">
        <p className="text-balance font-bold text-2xl text-gray-800">{heading}</p>
        <p className="text-md mt-2 text-gray-700">{subHeading}</p>
      </div>
    </div>
  )
}

function GridItem({ heading, subHeading }: { heading: string, subHeading: string }) {
  return (
    <div className="w-full h-full flex flex-col justify-center p-5 md:p-10">
      <p className="md:text-[2.6rem] text-[2rem] font-bold text-gray-700">{heading}</p>
      <p className="text-md text-gray-500">{subHeading}</p>
    </div>
  )
}