import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import Section from "./Section";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="relative mb-[6.5rem] hidden justify-center lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            height={255}
            width={255}
            alt="small sphere"
          />
          <div className="pointer-events-none absolute left-1/2 top-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/pricing"
            className="border-b font-code text-xs font-bold uppercase tracking-wider"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
