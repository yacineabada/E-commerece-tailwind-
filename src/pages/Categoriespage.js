import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const breadcrumbs = [{ id: 1, name: "Men", href: "#" }];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals" },
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];
const products = [
  {
    id: 1,
    brand: "adidas",
    name: "Basic Tee 8-Pack",
    href: "#",
    price: "$256",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc: [
      {
        id: 1,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
      },
      {
        id: 2,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
      },
    ],
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    brand: "nike",
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: [
      {
        id: 1,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
      },
      {
        id: 2,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
      },
    ],
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 3,
    brand: "nike",
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: [
      {
        id: 1,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
      },
      {
        id: 2,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
      },
    ],
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 4,
    brand: "nike",
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: [
      {
        id: 1,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
      },
      {
        id: 2,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
      },
    ],
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 5,
    brand: "nike",
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: [
      {
        id: 1,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
      },
      {
        id: 2,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
      },
    ],
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 6,
    brand: "nike",
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: [
      {
        id: 1,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
      },
      {
        id: 2,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
      },
    ],
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 7,
    brand: "nike",
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: [
      {
        id: 1,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
      },
      {
        id: 2,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
      },
    ],
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 8,
    brand: "nike",
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: [
      {
        id: 1,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
      },
      {
        id: 2,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
      },
    ],
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 9,
    brand: "nike",
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: [
      {
        id: 1,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
      },
      {
        id: 2,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
      },
    ],
    imageAlt: "Front of plain black t-shirt.",
  },
];
const footerNavigation = {
  products: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Find a store", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Categoriespage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [checked, setChecked] = useState([]);

  return (
    <>
      <div className="bg-white">
        <Header />
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4">
                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.name}
                          className="border-t border-gray-200 pt-4 pb-4"
                        >
                          {({ open }) => (
                            <fieldset>
                              <legend className="w-full px-2">
                                <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                  <span className="text-sm font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex h-7 items-center">
                                    <ChevronDownIcon
                                      className={classNames(
                                        open ? "-rotate-180" : "rotate-0",
                                        "h-5 w-5 transform"
                                      )}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Disclosure.Button>
                              </legend>
                              <Disclosure.Panel className="px-4 pt-4 pb-2">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`${section.id}-${optionIdx}-mobile`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        onChange={() => {
                                          setChecked();
                                        }}
                                      />
                                      <label
                                        htmlFor={`${section.id}-${optionIdx}-mobile`}
                                        className="ml-3 text-sm text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </fieldset>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <div className="border-b border-gray-200">
            <nav
              aria-label="Breadcrumb"
              className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
              <ol role="list" className="flex items-center space-x-4 py-4">
                {breadcrumbs.map((breadcrumb) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center">
                      <a
                        href={breadcrumb.href}
                        className="mr-4 text-sm font-medium text-gray-900"
                      >
                        {breadcrumb.name}
                      </a>
                      <svg
                        viewBox="0 0 6 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-5 w-auto text-gray-300"
                      >
                        <path
                          d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </li>
                ))}
                <li className="text-sm">
                  <a
                    href="#"
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    New Arrivals
                  </a>
                </li>
              </ol>
            </nav>
          </div>

          <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
            <div className="border-b border-gray-200 pt-24 pb-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                New Arrivals
              </h1>
              <p className="mt-4 text-base text-gray-500">
                Checkout out the latest release of Basic Tees, new and improved
                with four openings!
              </p>
            </div>

            <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
              <aside>
                <h2 className="sr-only">Filters</h2>

                <button
                  type="button"
                  className="inline-flex items-center lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="text-sm font-medium text-gray-700">
                    Filters
                  </span>
                  <PlusIcon
                    className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                </button>

                <div className="hidden lg:block">
                  <form className="space-y-10 divide-y divide-gray-200">
                    {filters.map((section, sectionIdx) => (
                      <div
                        key={section.name}
                        className={sectionIdx === 0 ? null : "pt-10"}
                      >
                        <fieldset>
                          <legend className="block text-sm font-medium text-gray-900">
                            {section.name}
                          </legend>
                          <div className="space-y-3 pt-6">
                            <select
                              name={`${section.id}[]`}
                              className="h-5 w-2/4  border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            >
                              {section.options.map((o, optionIdx) => (
                                <option>{o.value}</option>
                              ))}
                            </select>
                          </div>
                        </fieldset>
                      </div>
                    ))}
                  </form>
                </div>
              </aside>

              <section
                aria-labelledby="product-heading"
                className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
              >
                <h2 id="product-heading" className="sr-only">
                  Products
                </h2>

                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                    >
                      <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                        <Carousel
                          showThumbs={false}
                          autoPlay={true}
                          infiniteLoop={true}
                          transitionTime={300}
                          ariaLabel={undefined}
                        >
                          {product.imageSrc.map((image) => (
                            <div key={image.id}>
                              <img
                                src={image.photoURL}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                              />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                      <div className="flex flex-1 flex-col space-y-2 p-4">
                        <h3 className="text-sm font-medium text-gray-900">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="text-sm text-gray-500">
                          {product.description}
                        </p>
                        <div className="flex flex-1 flex-col justify-end">
                          <p className="text-sm italic text-gray-500">
                            {product.options}
                          </p>
                          <p className="text-base font-medium text-gray-900">
                            {product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>

          <footer
            aria-labelledby="footer-heading"
            className="border-t border-gray-200 bg-white"
          >
            <h2 id="footer-heading" className="sr-only">
              Footer
            </h2>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="py-20">
                <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
                  {/* Image section */}
                  <div className="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
                    <img
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                      className="h-8 w-auto"
                    />
                  </div>

                  {/* Sitemap sections */}
                  <div className="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
                    <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Products
                        </h3>
                        <ul role="list" className="mt-6 space-y-6">
                          {footerNavigation.products.map((item) => (
                            <li key={item.name} className="text-sm">
                              <a
                                href={item.href}
                                className="text-gray-500 hover:text-gray-600"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Company
                        </h3>
                        <ul role="list" className="mt-6 space-y-6">
                          {footerNavigation.company.map((item) => (
                            <li key={item.name} className="text-sm">
                              <a
                                href={item.href}
                                className="text-gray-500 hover:text-gray-600"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Customer Service
                      </h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.customerService.map((item) => (
                          <li key={item.name} className="text-sm">
                            <a
                              href={item.href}
                              className="text-gray-500 hover:text-gray-600"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Newsletter section */}
                  <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      Sign up for our newsletter
                    </h3>
                    <p className="mt-6 text-sm text-gray-500">
                      The latest deals and savings, sent to your inbox weekly.
                    </p>
                    <form className="mt-2 flex sm:max-w-md">
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        type="text"
                        autoComplete="email"
                        required
                        className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                      <div className="ml-4 flex-shrink-0">
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 py-10 text-center">
                <p className="text-sm text-gray-500">
                  &copy; 2021 Your Company, Inc. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
