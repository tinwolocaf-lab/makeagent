import { useRef, useState, type KeyboardEvent } from "react";
import type { LandingCopy } from "../content";

export function RoleSwitcher({ copy }: { copy: LandingCopy }) {
  const [activeRole, setActiveRole] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const role = copy.roles[activeRole];

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % copy.roles.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + copy.roles.length) % copy.roles.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = copy.roles.length - 1;
    else return;

    event.preventDefault();
    setActiveRole(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section className="roles" id="roles">
      <div className="roles-copy">
        <p className="eyebrow">{copy.rolesEyebrow}</p>
        <h2>{copy.rolesTitle}</h2>
        <p>{copy.rolesNote}</p>
      </div>

      <div className="role-workspace">
        <div className="role-tabs" aria-label={copy.rolesLabel} role="tablist">
          {copy.roles.map((item, index) => (
            <button
              aria-controls="role-preview"
              aria-selected={activeRole === index}
              id={`role-${index}`}
              key={item.name}
              onClick={() => setActiveRole(index)}
              onKeyDown={(event) => moveTab(event, index)}
              ref={(element) => { tabRefs.current[index] = element; }}
              role="tab"
              tabIndex={activeRole === index ? 0 : -1}
              type="button"
            >
              {item.name}
            </button>
          ))}
        </div>
        <article
          aria-labelledby={`role-${activeRole}`}
          className="role-preview"
          id="role-preview"
          key={role.name}
          role="tabpanel"
          tabIndex={0}
        >
          <span>{role.kicker}</span>
          <h3>{role.title}</h3>
          <p>{role.description}</p>
          <ul>
            {role.tasks.map((task) => <li key={task}>{task}</li>)}
          </ul>
        </article>
      </div>
    </section>
  );
}
