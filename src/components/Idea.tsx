import React from "react";

interface IdeaProps {
  name: string;
  description: string;
  image?: string;
}

export const Idea: React.FC<IdeaProps> = ({
  name,
  description,
  image,
}: IdeaProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};
