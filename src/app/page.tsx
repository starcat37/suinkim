import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <nav className="mb-10 text-sm">
        <span className="font-semibold">About</span>
        {" | "}
        <span className="text-muted cursor-default" title="Coming soon">
          Posts
        </span>
      </nav>

      <Section title="About">
        <p className="leading-relaxed">
          I am a software engineer at{" "}
          <a href="https://www.lgcns.com/en/" target="_blank" rel="noopener noreferrer">
            LG CNS
          </a>{" "}
          with a background in both Linguistics and Computer Science. I build
          AI-powered systems at the intersection of language and technology —
          from multilingual enterprise platforms to agentic workflows for
          production consumer products.
        </p>
        <p className="mt-3 leading-relaxed">
          I am drawn to problems where linguistic nuance matters in engineering:
          designing prompts that behave consistently across locales, handling
          multi-language UX at scale, and building systems that work for diverse
          users worldwide. Outside of work, I mentor engineers on AI-native
          development and maintain a 2,000+ day streak on Duolingo across four
          languages.
        </p>
      </Section>

      <Section title="Experience">
        <div className="mb-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-2">
            <h3 className="font-semibold">LG CNS (Build Center)</h3>
            <span className="text-sm text-muted">Seoul, South Korea</span>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-2">
            <p className="italic text-muted">Software Engineer</p>
            <span className="text-sm text-muted">Sep 2024 &ndash; Present</span>
          </div>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-[15px] leading-relaxed">
            <li>
              <strong>LGE ThinQ AI Recipe:</strong> Developed test automation
              agents in a multi-agent recipe generation pipeline shipped to the
              LGE ThinQ App. Built an agent covering normal, guardrail, and
              adversarial test modes using keyword sampling, deduplication, and
              temperature tuning; resolved multilingual inference degradation by
              migrating to a Korean/English dual-prompt architecture.
            </li>
            <li>
              <strong>AI-Driven Design Prototyping (Internal PoC):</strong> Led
              end-to-end development of an automated UI prototyping system.
              Engineered a custom MCP Server bridging vector DBs with Cursor
              Agent and implemented self-correcting agent loops using LangGraph
              (Analyze–Search–Generate–Evaluate).
            </li>
            <li>
              <strong>
                <a href="https://globalcareers.lge.com/" target="_blank" rel="noopener noreferrer">
                  LGE Global Careers Platform
                </a>
                :
              </strong>{" "}
              Frontend development for LG Electronics&apos; global hiring platform
              using Next.js, supporting 16 languages across 117 regional operations.
              Owned i18n architecture and optimized SSR/SEO for multi-regional UX
              requirements.
            </li>
            <li>
              <strong>Technical &amp; AX Mentoring:</strong> Led hands-on
              sessions as assistant instructor across 3 AX Incubation Camp
              cohorts (20+ engineers each). Mentored peers on agentic workflows
              as AX Learning Crew mentor, and delivered AI coding workshops to
              affiliate company engineers.
            </li>
          </ul>
        </div>
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-2">
            <p className="italic text-muted">Software Engineer Intern</p>
            <span className="text-sm text-muted">Jan 2024 &ndash; Feb 2024</span>
          </div>
          <ul className="mt-2 list-disc pl-5 text-[15px] leading-relaxed">
            <li>
              Built a full-stack internal operations platform using NestJS and
              MongoDB, automating manual data collection for 100+ members.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Projects">
        <div className="mb-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-2">
            <h3 className="font-semibold">
              ASKu &mdash; University Festival Betting Platform
            </h3>
            <span className="text-sm text-muted">Mar &ndash; Jun 2023</span>
          </div>
          <p className="text-sm text-muted italic">Backend Developer</p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-[15px] leading-relaxed">
            <li>
              Managed 31,000+ real-time events and 2,600+ visits over 3 days by
              optimizing Node.js and MySQL query performance.
            </li>
            <li>
              Integrated Redis for session caching and rapid data access,
              ensuring zero downtime during live betting spikes.
            </li>
          </ul>
        </div>
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-2">
            <h3 className="font-semibold">
              ASKu &mdash; Campus Information Wiki
            </h3>
            <span className="text-sm text-muted">Mar 2023 &ndash; Aug 2024</span>
          </div>
          <p className="text-sm text-muted italic">Full-stack Developer</p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-[15px] leading-relaxed">
            <li>
              Implemented MySQL Triggers to automate real-time notifications for
              discussion updates and activity-based rewards.
            </li>
            <li>
              Engineered a centralized search system to aggregate fragmented
              campus data into a single, searchable format.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Open Source">
        <div className="flex flex-wrap items-baseline justify-between gap-x-2">
          <h3 className="font-semibold">
            <a
              href="https://github.com/julien-duponchelle/python-mysql-replication"
              target="_blank"
              rel="noopener noreferrer"
            >
              python-mysql-replication
            </a>
          </h3>
          <span className="text-sm text-muted">2023</span>
        </div>
        <p className="text-sm text-muted italic">Contributor</p>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-[15px] leading-relaxed">
          <li>
            Implemented critical binlog events (RandEvent, UserVarEvent) and
            resolved complex charset (Latin1) compatibility issues in the core
            engine.
          </li>
          <li>
            Merged 10+ PRs via the Open Source Contribution Academy, receiving
            the <strong>Outstanding Award</strong> from NIPA.
          </li>
        </ul>
      </Section>

      <Section title="Education">
        <div className="flex flex-wrap items-baseline justify-between gap-x-2">
          <h3 className="font-semibold">Korea University</h3>
          <span className="text-sm text-muted">Seoul, South Korea</span>
        </div>
        <p className="italic text-muted">
          B.A. in Linguistics &amp; B.S. in Computer Science (Double Major)
        </p>
        <p className="text-sm text-muted">Mar 2020 &ndash; Aug 2024</p>
        <p className="mt-2 text-[15px]">
          <strong>GPA: 4.04 / 4.5</strong> &middot; Relevant Coursework:
          Database Systems, Operating Systems, Machine Learning, NLP
        </p>
      </Section>

      <Section title="Skills & Languages">
        <ul className="list-disc pl-5 space-y-1 text-[15px] leading-relaxed">
          <li>
            <strong>Tech Stack:</strong> Python, TypeScript, Java, FastAPI,
            Spring Boot, NestJS, React, Next.js, LangGraph, MySQL, MongoDB
          </li>
          <li>
            <strong>Specialized In:</strong> AI Agent Design, Prompt
            Engineering, Multilingual Systems &amp; i18n, Technical Mentoring
          </li>
          <li>
            <strong>Languages:</strong> Korean (Native), English (Fluent),
            Chinese (Conversational), Japanese (Conversational)
          </li>
          <li>
            <strong>Consistency:</strong> 2,000+ day Duolingo streak
          </li>
        </ul>
      </Section>

      <Footer />
    </>
  );
}