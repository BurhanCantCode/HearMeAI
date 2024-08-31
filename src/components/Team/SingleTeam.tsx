import { TeamType } from "@/types/team";
import Image from "next/image";
import GitHubLogo from "./github.svg"; // Adjust the path if needed

const SingleTeam = ({ team }: { team: TeamType }) => {
  const { image, name, designation, facebookLink, twitterLink, instagramLink, githubLink } = team;

  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
      <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
        <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
          <Image
            src={image}
            alt={name}
            className="w-full rounded-full"
            width={120}
            height={120}
          />
          <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
          <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
            {/* You can replace this with an SVG component if needed */}
          </span>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <div className="mt-4 flex justify-center space-x-3">
        
          {githubLink && (
            <a href={githubLink} aria-label="GitHub">
              <Image src={GitHubLogo} alt="GitHub" width={20} height={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;
