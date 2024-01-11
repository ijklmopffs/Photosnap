const Feature = ({ imageSrc, title, description }) => {
  return (
    <div className="w-fit">
      <div className="mx-auto w-fit">
        <img src={imageSrc} alt="" />
      </div>
      <h3 className="font-bold text-lg mt-16">{title}</h3>
      <p className="w-80 my-5 text-sm opacity-50">{description}</p>
    </div>
  );
};

export default Feature;
