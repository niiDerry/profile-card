import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="./img/IMG_9343ff.PNG" alt="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Derry Angelo Tagoe</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
        molestias illo iure iste maiores excepturi aliquid, eveniet voluptate?
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillName="HTML + CSS" emoji="💪" />
      <Skill skillName="Web Design" emoji="👍" />
      <Skill skillName="JavaScript" emoji="😊" />
      <Skill skillName="React" emoji="👶" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <p>
        {props.skillName} {props.emoji}
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
