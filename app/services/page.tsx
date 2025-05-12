import { Navigation } from "@/components/navigation";
import { ServiceItem } from "../page";

export default function Services() {

    return (
        <main>
            <div className=" md:h-[60vh] pb-12 h-[30vh] w-full  pt-[4rem] px-4 flex flex-col relative z-0 ">
                <Navigation />
                <div className="flex-[1] text-center flex justify-end flex-col">
                    <p className="md:text-[6rem] leading-[50px] md:leading-normal md:mt-0 mt-5 text-4xl pr-3 font-semibold">
                        Services
                    </p>
                </div>
                <div className="absolute inset-0 bg-[#141a1f]/90 opacity-90 -z-[1]"></div>
            </div>
            <div className="px-6 py-8 md:py-25">
                <div className="flex-[1.5] text-center text-gray-700">
                    <p className="text-2xl font-bold text-[#b42322]">Our Services</p>
                    <p className="text-3xl lg:text-5xl leading-tight mt-4 font-bold">Quality Services</p>
                    <br />
                    <br />
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
        </main>
    )
}