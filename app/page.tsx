import Image from "next/image";
import { socialLinks } from "./config";

const currentRoleTechnologies = ["React", "React Native", "NodeJS", "MongoDB"];
const otherTechnologies = ["TypeScript", "NextJS", "SQL"];

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/Profile.webp"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 "
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-4 text-xl font-medium tracking-tight">Franco Angulo</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>Based in Argentina. Seeking challenges and learning constantly</p>
        <h2 className="mb- text-xl font-medium tracking-tight">Today</h2>
        <p>
          +2 years experienced <b>Fullstack Developer</b> at{" "}
          <a target="_blank" href="https://mystrengthbook.com">
            MyStrengthBook
          </a>
          , helping the team develop features proficiently for web and mobile.
        </p>
        <p>
          <i>#NextJS #React #ReactNative #TypeScript #NodeJS #SQL #Mongo</i>
        </p>
        <h2 className="mb- text-xl font-medium tracking-tight">Technologies</h2>
        <p>
          Working confidently with{" "}
          {currentRoleTechnologies.map((tech, index) => (
            <span key={tech}>
              <b>
                <i>#{tech}</i>
              </b>
              {index < currentRoleTechnologies.length - 1 ? ", " : ""}
            </span>
          ))}{" "}
          on my current role.
          <br />
          Also comfortable with{" "}
          {otherTechnologies.map((tech, index) => (
            <span key={tech}>
              <b>
                <i>#{tech}</i>
              </b>
              {index < otherTechnologies.length - 1 ? ", " : ""}
            </span>
          ))}{" "}
          as well.
        </p>
        <h2 className="mb- text-xl font-medium tracking-tight">Connect</h2>
        <span>
          Let's have a conversation{" "}
          <a href="mailto:francoangulo2001@gmail.com" target="_blank">
            francoangulo2001@gmail.com
          </a>
        </span>
        <br />
        <span>
          Connect with me on{" "}
          <a href={socialLinks.linkedin} target="_blank">
            LinkedIn
          </a>
        </span>
        <br />
        <span>
          Check my{" "}
          <a href={"/resume.pdf"} target="_blank">
            Resume
          </a>
        </span>
      </div>
    </section>
  );
}
