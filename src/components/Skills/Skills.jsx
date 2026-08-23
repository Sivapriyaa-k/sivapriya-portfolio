import allSkills from "../Skills/allSkills.json";
export default function Skills() {
  return (
    <>
      <section className="Hero container m-auto px-5 sm:px-8 xl:px-[200px] py-[50px]">
        <h2 className="text-white font-bold text-3xl mb-10">Skills</h2>
        <div className="skills grid grid-cols-4 md:grid-cols-6 gap-2 gap-y-11">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              id={index}
              className="flex gap-2 flex-col align-middle justify-center"
            >
              <img
                src={`/images/skills/${skill.logo}`}
                alt=""
                className="w-14 m-auto"
              />
              <div className="text-white text-center text-xs font-semibold">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
