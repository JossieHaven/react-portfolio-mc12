import React from "react";
import { Tooltip, Button } from "@heroui/react";

function Resume() {
  return (
    <div>
      <section className="about_page_resume">
        <h1>Download my resume here: </h1>
        <a href="path-to-resume.pdf" download className="resume-download">Download Resume</a>

        <h2>Proficiencies:</h2>
      </section>
      <div className="flex gap-2">
        <Tooltip color="warning" content="JavaScript" delay={1000}>
          <Button color="primary" variant="flat">
            JavaScript
          </Button>
        </Tooltip>
        <Tooltip closeDelay={2000} color="warning" content="React.js">
          <Button color="primary" variant="flat">
            React.js
          </Button>
        </Tooltip>
        <Tooltip closeDelay={2000} color="warning" content="Node.js">
          <Button color="primary" variant="flat">
            Node.js
          </Button>
        </Tooltip>
        <Tooltip closeDelay={2000} color="warning" content="Express.js">
          <Button color="primary" variant="flat">
            Express.js
          </Button>
        </Tooltip>
      </div>
      <div className="flex gap-2">
        <Tooltip color="warning" content="MongoDB" delay={1000}>
          <Button color="primary" variant="flat">
            MongoDB
          </Button>
        </Tooltip>
        <Tooltip closeDelay={2000} color="warning" content="SQL">
          <Button color="primary" variant="flat">
            SQL
          </Button>
        </Tooltip>
        <Tooltip closeDelay={2000} color="warning" content="HTML5 & CSS3">
          <Button color="primary" variant="flat">
            HTML5 & CSS3
          </Button>
        </Tooltip>
        <Tooltip closeDelay={2000} color="warning" content="Git & GitHub">
          <Button color="primary" variant="flat">
            Git & GitHub
          </Button>
        </Tooltip>
      </div>

    </div>
  );
}
export default Resume;