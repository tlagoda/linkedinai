import React, { useState } from "react";
import { HorizontalDivider } from "./HorizontalDivider";

const LinkedInForm = () => {
  const [selectedOption, setSelectedOption] = useState("no");

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="text-gray-900">
      <p className="text-base leading-relaxed mb-10">
        To enable automatic posting of the generated chat GPT content on your
        LinkedIn profile, please provide us with your LinkedIn email address.
        This information is necessary to link your two accounts and authorize
        our application to publish on your behalf. Rest assured that we value
        your privacy and will handle your data securely.
      </p>
      <HorizontalDivider />
      <div className="my-10">
        <p className="text-gray-800 mb-2">
          Are the email addresses you used to sign up and your LinkedIn email
          the same?
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
        <div>
          <label htmlFor="linkedinEmail" className="mr-4">Your LinkedIn Email:</label>
          <input
            type="email"
            id="linkedinEmail"
            className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      )}
    </div>
  );
};

export default LinkedInForm;
