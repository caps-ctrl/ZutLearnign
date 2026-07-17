import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { List } from "../ui/List";
import { benefits } from "../../data/homePageData";
import { Card } from "../ui/Card";
export function WhyUsSection() {
  return (
    <section className="py-15 p-6">
      <div
        className="relative
          catSectionWrapper
          shadow-[0_12px_10px_#166534,0_18px_30px_rgba(0,0,0,0.25)]
    "
      >
        <DotLottieReact
          className="absolute top-2 left-1/2 -translate-x-1/2 w-180 -translate-y-2/2"
          src="/animations/catSection.lottie"
          autoplay
          loop
        />
        <div
          className="
            
            catSectionContainer
            bg-gradient-to-b
            from-green-400
            via-green-500
            to-green-600
            shadow-[inset_0_3px_0_rgba(255,255,255,0.35),inset_0_-6px_12px_rgba(0,0,0,0.18)]
      "
        >
          <div className="mx-auto flex  w-full max-w-6xl  justify-between gap-8 px-3 py-8">
            <div className=" text-center  w-full ">
              <h1 className="font-bold text-4xl max-w-[700px]">
                Dlaczego studenci wybierają <span>uniCheat</span>
              </h1>{" "}
              <div className="grid p-4 w-full gap-4 grid-cols-2">
                {" "}
                <Card
                  title="Wymiana wiedzy między studentami"
                  variant="white"
                ></Card>
                <Card
                  title="Profile wykładowców z opiniami i wskazówkami studentów"
                  variant="white"
                />
              </div>
            </div>
            <div className="flex border-l p-8 justify-between max-w-[40%]">
              {List(benefits)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
