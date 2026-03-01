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
          </a>
          , where I build AI-powered systems and full-stack web applications. My
          recent work focuses on designing agentic workflows with LLMs, building
          multi-modal RAG pipelines, and developing enterprise-scale platforms
          with Next.js.
        </p>
        <p className="mt-3 leading-relaxed">
          I hold dual degrees in Linguistics and Computer Science from Korea
          University. Outside of work, I contribute to open source, mentor
          engineers on AI-native development practices, and maintain a 2,000+
          day streak on Duolingo across four languages.
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
              <strong>AI-Driven Design Prototyping (Internal PoC):</strong> Led
              end-to-end development of an automated UI prototyping system.
              Built a multi-modal RAG pipeline with Gemini Pro Vision, engineered
              a custom MCP Server bridging vector DBs with Cursor Agent, and
              implemented self-correcting agent loops using LangGraph.
            </li>
            <li>
              <strong>Insurance Agent Workflow PoC:</strong> Co-developed an
              enterprise AI agent for insurance operations using Claude SDK and
              FastAPI. Integrated AI into legacy systems via a Chrome Extension
              (Manifest V3) and orchestrated multi-step tool-calling backend
              logic.
            </li>
            <li>
              <strong>Global Recruitment Platform:</strong> Frontend development
              for a global-scale hiring system using Next.js, managing i18n
              strategies and optimizing SSR/SEO for multi-regional UX.
            </li>
            <li>
              <strong>Technical &amp; AX Mentoring:</strong> Assistant instructor
              for 20+ engineers in AX Incubation Camp. Mentored peers on agentic
              workflows in AX Learning Crew, fostering AI-native development
              culture.
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
            Engineering, DB Design, Technical Mentoring
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
