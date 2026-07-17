import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Icon } from "../ui/Icon";

export function HeroSection() {
  return (
    <section className="hero-section ">
      <div className="hero-copy">
        <h1>Tajna baza wiedzy Studentów.</h1>
        <p>
          UniCheat to miejsce, w którym studenci dzielą sie
          notatkami,metariełami i doświadczeniami z najęć.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#start">
            Zacznij
          </a>
          <a className="ghost-button" href="#kursy">
            <Icon name="play" />
            Zobacz co oferujemy
          </a>
        </div>
      </div>
      <div className="absolute  right-0 top-1/2 -translate-y-1/2 ">
        <DotLottieReact
          src="/animations/heroAnimation.lottie"
          autoplay
          loop
          className="hidden md:block md:w-[520px] lg:w-[820px] "
        />
      </div>
    </section>
  );
}
