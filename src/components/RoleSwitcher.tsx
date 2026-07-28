import { useState } from "react";
import type { LandingCopy } from "../content";

export function RoleSwitcher({ copy }: { copy: LandingCopy }) {
  const [activeRole, setActiveRole] = useState(0);
  const role = copy.roles[activeRole];

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
              role="tab"
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
