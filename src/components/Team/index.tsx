import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Burhanuddin Khatri",
    designation: "UI Designer",
    image: "/images/team/team-01.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
    githubLink: "https://github.com/BurhanCantCode",
  },
  {
    id: 2,
    name: "Rida E Fatima",
    designation: "Product Designer",
    image: "/images/team/team-02.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
    githubLink: "https://github.com/ridaefatima",
  },
  {
    id: 3,
    name: "Shahmeer Irfan",
    designation: "App Developer",
    image: "/images/team/team-03.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
    githubLink: "https://github.com/shahmeer-irfan",
  },
  {
    id: 4,
    name: "Tahir Ghazi",
    designation: "Content Writer",
    image: "/images/team/team-04.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
    githubLink: "https://github.com/ghazibaazi",

  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="A group of four passionate individuals who brought this app to life, blending creativity, innovation, and dedication."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
