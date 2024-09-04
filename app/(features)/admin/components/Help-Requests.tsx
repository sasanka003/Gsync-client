import React, { useState } from "react";

interface HelpRequestProps {
  requestId: string;
  username: string;
  userType: string;
  date: string;
  subject: string;
  message: string;
  imageUrl?: string;
  onResolve: (requestId: string, comments: string) => void;
}

const HelpRequest = ({
  requestId,
  username,
  userType,
  date,
  subject,
  message,
  imageUrl,
  onResolve,
}: HelpRequestProps) => {
  const [comments, setComments] = useState("");

  const handleResolve = () => {
    onResolve(requestId, comments);
  };

  return (
    <div className="w-[936px] p-6 border rounded-lg shadow-md bg-white ml-10 mt-10">
      <h2 className="text-2xl font-bold mb-4">
        Help Request <span className="text-primary">#{requestId}</span>
      </h2>
      <div className="mb-4">
        <div className="flex gap-20 text-common mb-4">
          <div className="flex space-x-1">
            <div className="text-p-ui-medium w-[85px]"><strong>Username:</strong></div>
            <span className="text-muted-foreground">{username}</span>
          </div>
          <div className="flex space-x-1">
            <div className="text-p-ui-medium w-[85px] ml-9"><strong>User Type:</strong></div>
            <span className="text-muted-foreground">{userType}</span>
          </div>
          <div className="flex space-x-1">
          <div className="text-p-ui-medium w-[85px] ml-8"><strong>Date:</strong></div>
            <span className="text-muted-foreground">{date}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start mb-4 gap-10">
        <div className="w-[500px]">
          <p className="text-muted-foreground mt-4">
            <div className="text-p-ui-medium text-common"><strong>Subject:</strong></div> {subject}
          </p>
          <p className="text-muted-foreground mt-4">
          <div className="text-p-ui-medium text-common"><strong>Message:</strong></div> {message}
          </p>
        </div>
        {imageUrl && (
          <div className="ml-4 mt-4 flex-1">
            <div className="flex space-x-1">
              <div className="text-p-ui-medium w-[85px]"><strong>Images:</strong></div>
              <span>
                {" "}
                <img
                  src={imageUrl}
                  alt="Related to the issue"
                  className="w-[312px] h-[192px] rounded border"
                />
              </span>
            </div>
          </div>
        )}
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
        <button
          onClick={handleResolve}
          className="bg-primary text-white px-4 py-2 rounded-md"
        >
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
