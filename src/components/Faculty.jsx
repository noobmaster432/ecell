import Card from "./FacultyCard";

const Faculty = () => {
  return (
    <div id="team" className="bg-faculty scroll-m-12 py-8 sm:py-16 px-6 sm:px-12 xl:px-24">
      <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl pb-16 font-body text-center font-bold underline-offset-[12px] underline text-[#3498D9]">
        Faculty In Charge
      </h1>
      <div className="lg:flex justify-around mx-0 xs:mx-6 sm:mx-28 space-y-16 lg:space-y-0 lg:mx-0">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Faculty