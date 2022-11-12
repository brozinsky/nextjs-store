import Link from "next/link";
import Image from "next/image";

const ModalProduct = ({ img, title, price, setShowModal }) => {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div
      onClick={handleClose}
      className="absolute z-10 w-full h-full backdrop-brightness-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute flex flex-col items-center gap-4 p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md top-1/2 left-1/2 e sm:py-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100"
      >
        <button onClick={handleClose} className="absolute top-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="flex-shrink-0 w-6 h-6"
          >
            <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
          </svg>
        </button>

        {/* checkmark */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM15.768 9.14C15.8558 9.03964 15.9226 8.92274 15.9646 8.79617C16.0065 8.6696 16.0227 8.53591 16.0123 8.40298C16.0018 8.27006 15.9648 8.14056 15.9036 8.02213C15.8423 7.90369 15.758 7.79871 15.6555 7.71334C15.5531 7.62798 15.4346 7.56396 15.3071 7.52506C15.1796 7.48616 15.0455 7.47316 14.9129 7.48683C14.7802 7.50049 14.6517 7.54055 14.5347 7.60463C14.4178 7.66872 14.3149 7.75554 14.232 7.86L9.932 13.019L7.707 10.793C7.5184 10.6108 7.2658 10.51 7.0036 10.5123C6.7414 10.5146 6.49059 10.6198 6.30518 10.8052C6.11977 10.9906 6.0146 11.2414 6.01233 11.5036C6.01005 11.7658 6.11084 12.0184 6.293 12.207L9.293 15.207C9.39126 15.3052 9.50889 15.3818 9.63842 15.4321C9.76794 15.4823 9.9065 15.505 10.0453 15.4986C10.184 15.4923 10.32 15.4572 10.4444 15.3954C10.5688 15.3337 10.6791 15.2467 10.768 15.14L15.768 9.14Z"
            fill="black"
          />
        </svg>

        <h2 className="text-2xl font-semibold leading-tight tracking-wide">
          Product added to cart
        </h2>
        {/* <p className="flex-1 text-center dark:text-gray-400">
          Some other text
        </p> */}
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl ">
            <Image
              className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none dark:border-transparent sm:w-32 sm:h-32 dark:bg-gray-500"
              width={170}
              height={170}
              src={img}
              alt={title}
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-medium text-gray-900">
                {title}
              </h5>
              <p className="mb-4 text-base text-gray-700">${price}</p>
              {/* <p className="text-xs text-gray-600">some small text</p> */}
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={handleClose}
            type="button"
            className="px-6 py-2 border rounded-md dark:border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only"> to shop</span>
          </button>
          <Link href={`/cart`}>
            <button className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
              <span className="sr-only sm:not-sr-only">Continue to </span>
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
