import {
  featuredCourses,
  scheduleItems,
  studyStats,
  features,
} from "../data/homePageData";
import { IconName } from "../types/homePageTypes";
import { Icon } from "../components/ui/Icon";
import { NavBar } from "@/components/layout/NavBar";

import { HeroSection } from "@/components/home/HeroSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { KnowledgeNetwork } from "@/components/home/KnowledgeNetwork";
import { StudentNetwork } from "@/components/home/StudentNetwork";

export default function Home() {
  return (
    <main className="site-shell">
      <NavBar />
      {/*Hero Section*/}
      <HeroSection />
      {/*Cat Section*/}
      <WhyUsSection />
      <KnowledgeNetwork />
      <StudentNetwork />
      <section className="stats-strip" aria-label="Statystyki platformy">
        {studyStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="content-band" id="kursy">
        <div className="section-heading">
          <h2>Kursy, które najczęściej ratują tydzień</h2>
          <a href="#">Wszystkie kursy</a>
        </div>

        <div className="course-cards">
          {featuredCourses.map((course) => (
            <article
              className={`course-card ${course.tone}`}
              key={course.title}
            >
              <div className="card-visual">
                <Icon
                  name={
                    course.tone === "blue"
                      ? "star"
                      : course.tone === "green"
                        ? "file"
                        : "book"
                  }
                />
              </div>
              <div>
                <h3>{course.title}</h3>
                <p>{course.meta}</p>
              </div>
              <div className="progress-line">
                <span style={{ width: course.progress }} />
              </div>
              <footer>
                <span>Postęp</span>
                <strong>{course.progress}</strong>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <h2>Homepage działa jak wejście do realnej aplikacji</h2>
          <p>
            Pierwszy ekran od razu pokazuje sedno: szybkie wyszukiwanie, aktywne
            kursy, najbliższe zajęcia i materiały. Bez backendu, ale z gotową
            strukturą pod dalszy rozwój.
          </p>
          <div className="feature-list">
            {features.map((feature) => (
              <article key={feature.title}>
                <span>
                  <Icon name={feature.icon as IconName} />
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="notice-board">
          <div className="pin" />
          <h3>Plan na dziś</h3>
          {scheduleItems.map((item) => (
            <div className="notice-row" key={item.title}>
              <time>{item.time}</time>
              <div>
                <strong>{item.title}</strong>
                <span>{item.room}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
