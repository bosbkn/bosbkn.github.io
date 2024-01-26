import React from "react";
import "../App.css";

export interface IdeaProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

export const Idea = React.forwardRef<HTMLDivElement, IdeaProps>(
  ({ name, description, image, link }, ref) => {
    return (
      <div ref={ref} className="idea">
        <h2>
          <a href={link}>{name}</a>
        </h2>
        <a href={link}>
          <img src={`${process.env.PUBLIC_URL}/ideas/${image}`} alt={name} />
        </a>
        <p>{description}</p>
      </div>
    );
  }
);
