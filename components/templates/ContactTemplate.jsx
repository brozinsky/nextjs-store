import Breadcrumbs from "@/modules/navigation/Breadcrumbs";
import Input from "@/elements/form/Input";
import Textarea from "@/elements/form/Textarea";

const inputs = [
  { label: "Name", name: "name", required: true, placeholder: "Your name..." },
  {
    label: "Surname",
    name: "surname",
    required: true,
    placeholder: "Your surname...",
  },
  {
    label: "E-mail",
    name: "email",
    required: false,
    placeholder: "Your email...",
  },
  {
    label: "Phone number",
    name: "phone",
    required: true,
    placeholder: "Your phone...",
  },
];

const textarea = {
  label: "Message",
  name: "message",
  required: true,
  placeholder: "Your message...",
};

const ContactTemplate = () => {
  return (
    <>
      <Breadcrumbs />
      <form className="max-w-xl my-12">
        <div class="mb-6 grid grid-cols-2 gap-4">
          {inputs.map(({ label, name, required, placeholder }) => {
            return (
              <Input
                key={name}
                label={label}
                required={required}
                placeholder={placeholder}
              />
            );
          })}
          <Textarea
            label={textarea.label}
            required={textarea.required}
            placeholder={textarea.placeholder}
          />
        </div>
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="terms"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactTemplate;
