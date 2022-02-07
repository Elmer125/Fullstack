export const Total = ({ course }) => {
  const{part}=course;
  let sum = 0;
  
  part.forEach((element) => {
    sum += element.exercises;    
  });

  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  );
};
