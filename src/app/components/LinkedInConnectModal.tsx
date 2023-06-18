import React, { useEffect, createRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { HorizontalDivider } from "./HorizontalDivider";
import { Form, Field, ErrorMessage } from "formik";

const LinkedInConnectModal = ({
  setShowLinkedInModal,
}: {
  setShowLinkedInModal: (showModal: boolean) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState("no");

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const modalRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!modalRef?.current?.contains(e.target as Node)) {
        setShowLinkedInModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div
      id="staticModal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-gray-900 bg-opacity-70 flex items-center justify-center overflow-hidden"
    >
      <div
        className="relative w-full max-w-2xl max-h-full my-auto"
        ref={modalRef}
      >
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <div className="flex items-center">
              <FaLinkedin className="w-6 h-6 mr-2 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Connect to LinkedIn
              </h3>
            </div>

            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="staticModal"
              onClick={() => setShowLinkedInModal(false)}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-6 space-y-6">
            <div className="text-gray-900">
              <p className="text-base leading-relaxed mb-10">
                To enable automatic posting of the generated chat GPT content on
                your LinkedIn profile, please provide us with your LinkedIn
                email address. This information is necessary to link your two
                accounts and authorize our application to publish on your
                behalf. Rest assured that we value your privacy and will handle
                your data securely.
              </p>
              <HorizontalDivider />
              <div className="my-10">
                <p className="text-gray-800 mb-2">
                  Are the email addresses you used to sign up and your LinkedIn
                  email the same?
                </p>
                <div className="flex flex-col">
                  <label htmlFor="yesOption" className="mb-2">
                    <input
                      type="radio"
                      id="yesOption"
                      value="yes"
                      checked={selectedOption === "yes"}
                      onChange={handleOptionChange}
                      className="mr-4"
                    />
                    The email addresses are the same.
                  </label>
                  <label htmlFor="noOption" className="mb-2">
                    <input
                      type="radio"
                      id="noOption"
                      value="no"
                      checked={selectedOption === "no"}
                      onChange={handleOptionChange}
                      className="mr-4"
                    />
                    The email addresses are different.
                  </label>
                </div>
              </div>
              {selectedOption === "no" && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // votre logique de soumission de formulaire ici
                  }}
                >
                  <div>
                    <label htmlFor="linkedinEmail" className="mr-4">
                      Your LinkedIn Email:
                    </label>
                    <input
                      type="email"
                      id="linkedinEmail"
                      name="linkedinEmail"
                      onChange={(e) => {
                        // votre logique de gestion du changement ici
                      }}
                      onBlur={(e) => {
                        // votre logique de gestion de la perte de focus ici
                      }}
                      className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="staticModal"
              type="button"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInConnectModal;
