import React from "react";

const page = async () => {
  return (
    <>
      <div className="mx-auto my-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-h1 text-common">Verify your email</h1>
          <p className="text-p text-common">
            We've sent a verification code to your email address. Enter the code
            below to confirm your identity.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
