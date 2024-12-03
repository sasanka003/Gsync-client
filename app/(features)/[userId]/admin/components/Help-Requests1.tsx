"use client";
import React, { useState } from "react";

const HelpRequest = () => {
  // State for handling comments
  const [comments, setComments] = useState("");

  return (
    <div className="w-[936px] p-6 border rounded-lg shadow-md bg-white ml-10 mt-10">
      <h2 className="text-2xl font-bold mb-4">
        Help Request <span className="text-primary">#1</span>
      </h2>
      <div className="mb-4">
        <div className="flex gap-20 text-common mb-4">
          <div className="flex space-x-1">
            <div className="text-p-ui-medium w-[85px]">
              <strong>Username:</strong>
            </div>
            <span className="text-muted-foreground">Sasanka Udana</span>
          </div>
          <div className="flex space-x-1">
            <div className="text-p-ui-medium w-[85px] ml-9">
              <strong>User Type:</strong>
            </div>
            <span className="text-muted-foreground">Gardener</span>
          </div>
          <div className="flex space-x-1">
            <div className="text-p-ui-medium w-[85px] ml-8">
              <strong>Date:</strong>
            </div>
            <span className="text-muted-foreground">2024-11-27</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start mb-4 gap-10">
        <div className="w-[500px]">
          <div className="text-p-ui-medium text-muted-foreground mt-4">
            <strong className="text-common">Subject : </strong>
            Unable to Log In
          </div>
          <div className="text-p-ui-medium text-muted-foreground mt-4">
            <strong className="text-common">Message : </strong>
            I am unable to access my account despite entering the correct credentials. It shows an error stating, "Invalid Username or Password." Please assist me in resolving this issue.
          </div>
        </div>
        <div className="ml-4 mt-4 flex-1">
          <div className="flex space-x-1">
            <div className="text-p-ui-medium w-[85px]">
              <strong>Images:</strong>
            </div>
            <img
              src="https://via.placeholder.com/250"
              alt="Related to the issue"
              className="w-[250px] h-[192px] rounded border"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-muted-foreground text-h4 font-semibold mb-4">
          Add your comments
        </label>
        <textarea
          className="w-full border border-gray-300 rounded-md p-2"
          rows={3}
          placeholder="Enter your additional comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <div className="mt-4 flex justify-end space-x-4">
        <button className="bg-primary text-white px-4 py-2 rounded-md">
          Mark as Resolved
        </button>
        <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-md">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default HelpRequest;
