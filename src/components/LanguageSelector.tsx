import { Menu } from "@headlessui/react";
export function LanguageSelector() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="inline-flex items-center px-1 sm:px-2 py-1 justify-center rounded border-2 border-blue-600 text-blue-600 dark:border-blue-200 dark:text-blue-200">
        <span className="uppercase text-xs hidden sm:block font-bold mr-2">
          language
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 sm:h-6 w-4 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      </Menu.Button>

      {/* Menu items */}
      <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div>
          <Menu.Item>
            {({ active }: { active: boolean }) => (
              <a
                className={`flex items-center p-3 ${
                  active ? "bg-blue-500 text-white" : "text-gray-600"
                }`}
                href="/pt/products"
              >
                Português
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }: { active: boolean }) => (
              <a
                className={`flex items-center p-3 ${
                  active ? "bg-blue-500 text-white" : "text-gray-600"
                }`}
                href="/products"
              >
                English
              </a>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
