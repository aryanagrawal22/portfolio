
export const SkillCard = (props) => {
  const { name, url } = props.details;
  return (
    <div className="w-28 my-3 mx-auto bg-white py-4 rounded-md flex flex-col items-center transition duration-200 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
      <img className="w-12 mb-2 flex-grow" src={url} alt={name} />
      <p className="font-secondary text-black font-bold text-center">
        {name}
      </p>
    </div>
  );
};