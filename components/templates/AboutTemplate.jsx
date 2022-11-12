import Image from "next/image";
import Image1 from "@/public/about/about-1.jpg";
import Image2 from "@/public/about/about-2.jpg";

const AboutTemplate = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About us
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            voluptatibus quidem temporibus tempore ea, voluptas expedita cum
            laboriosam reprehenderit nihil, commodi ipsa qui non. Itaque cumque
            necessitatibus repudiandae vero pariatur?
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi modi
            nulla soluta omnis saepe tenetur fugiat iure rerum voluptate
            officia! Ex laudantium praesentium alias aliquid?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            nisi est sed.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="w-full rounded-lg">
            <Image width={284} height={394} src={Image1} alt="" />
          </div>
          <div className="w-full mt-4 rounded-lg lg:mt-10">
            <Image width={284} height={394} src={Image2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTemplate;
