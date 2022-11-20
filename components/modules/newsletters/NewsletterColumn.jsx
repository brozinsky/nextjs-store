import Button from "@/elements/buttons/Button";

const NewsletterColumn = () => {
  return (
    <div className="flex flex-row w-full dark:bg-gray-500">
      <div className="flex flex-row items-end justify-center w-5/12 space-x-4">
        <div className="w-4 h-32 bg-primary-500"></div>
        <div className="w-4 h-32 bg-primary-500"></div>
        <div className="w-4 h-32 bg-primary-500"></div>
      </div>
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h3 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">
          Join our newsletter
        </h3>
        <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
          Find out about events and other news
        </p>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="example@email.com"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          />
          <Button size="lg" href="#" rounded="none">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterColumn;
