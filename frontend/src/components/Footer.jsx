import React from "react";

const Footer = () => {
  return (
      <footer className="bg-slate-200 p-6">
        <div className="flex flex-col md:flex-row justify-between gap-4 sm:gap-8">
          {/* Address Section */}
          <div className="w-full md:max-w-md">
            <h1 className="text-xl font-bold mb-6">Funiro.</h1>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              400 University Drive Suite Coral <br />
              Gables,
              <br />
              FL 33134 USA
            </pre>
          </div>
          {/* Links Section */}
          <div className="w-full sm:w-auto">
            <h4 className="text-lg font-semibold mb-2">Links</h4>
            <ul>
              <li className="p-2 text-sm text-gray-600 cursor-pointer">
                <a href="/">Home</a>
              </li>
              <li className="p-2 text-sm text-gray-600 cursor-pointer">
                <a href="/">Shop</a>
              </li>
              <li className="p-2 text-sm text-gray-600 cursor-pointer">
                <a href="/">About</a>
              </li>
              <li className="p-2 text-sm text-gray-600 cursor-pointer">
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          {/* Help Section */}
          <div className="w-full sm:w-auto">
            <h4 className="text-lg font-semibold mb-2">Help</h4>
            <ul>
              <li className="p-2 text-sm text-gray-600 cursor-pointer">
                <a href="/">Payment Options</a>
              </li>
              <li className="p-2 text-sm text-gray-600 cursor-pointer">
                <a href="/">Returns</a>
              </li>
              <li className="p-2 text-sm text-gray-600 cursor-pointer">
                <a href="/">Privacy Policies</a>
              </li>
            </ul>
          </div>
          {/* Newsletter Section */}
          <div className="w-full sm:w-auto">
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              <input
                type="text"
                id="email"
                placeholder="Enter Your Email Address"
                className="p-2 border rounded-md focus:outline-none w-full sm:flex-1"
              />
              <button className="p-2 bg-blue-600 text-white font-semibold rounded">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <p className="text-sm text-gray-500 text-center">
          © 2025 Funiro. All rights reserved
        </p>
      </footer>
  );
};

export default Footer;
