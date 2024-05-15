import Navigation from "@/components/courses/Navigation/Navigation";
import ExploreComponent from "@/components/homepage/common/ExploreComponent";
import { ClientOnlyDropdown } from "@/components/courses/Dropdown/Dropdown";
const page = () => {
  const DropDownData = [
    {
      title: "Web Development",
      links: [
        { label: "HTML", url: "/html" },
        { label: "CSS", url: "/css" },
        { label: "JS", url: "/js" },
        { label: "React", url: "/react" },
        { label: "Node", url: "/node" },
        { label: "Express", url: "/express" },
      ],
    },
    {
      title: "App Development",
      links: [
        { label: "React", url: "/react" },
        { label: "Flutter", url: "/flutter" },
        { label: "Swift", url: "/swift" },
      ],
    },
    {
      title: "Data Science",
      links: [
        { label: "Python", url: "/python" },
        { label: "R", url: "/r" },
        { label: "SQL", url: "/sql" },
      ],
    },
    {
      title: "Machine Learning",
      links: [
        { label: "ML", url: "/ml" },
        { label: "DL", url: "/dl" },
        { label: "AI", url: "/ai" },
      ],
    },
    {
      title: "Cloud Computing",
      links: [
        { label: "AWS", url: "/aws" },
        { label: "Azure", url: "/azure" },
        { label: "GCP", url: "/gcp" },
      ],
    },
  ];
  return (
    <>
      <Navigation />

      <div className="w-screen max-w-full flex flex-col items-center justify-center gap-6 mbMedium:px-16 mbSmall:px-5 mbMini:px-0 my-16">
        <ExploreComponent
          buttonText="Courses for you 🤝"
          headingText="Tailored Courses for Your Success"
          contentText="Explore our comprehensive selection of courses tailored to meet your academic and career aspirants. From foundational subjects to advanced specialties, we offer a diverse range of courses designed to equip you with the knowledge and skills"
        />
      </div>
      {/* dropdowns */}
      <div className="w-screen max-w-full flex flex-col items-center justify-center gap-8 mbMedium:px-16 mbSmall:px-5 mbMini:px-0">
        <ClientOnlyDropdown DropDownData={DropDownData} />
      </div>
    </>
  );
};

export default page;