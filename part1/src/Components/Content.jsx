import { Part } from "./Part";

export const Content = ({ course }) => {
  const { part } = course;
  return (
    <div>
      {part.map((element) => {
        return (
          <Part
            key={element.name}
            part={element.name}
            exercises={element.exercises}
          />
        );
      })}
    </div>
  );
};
