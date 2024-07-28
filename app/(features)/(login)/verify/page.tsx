import React from "react";

const page = () => {
  return (
    <div className="mx-auto my-auto max-w-md space-y-6 py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-h1 text-common">Verify your email</h1>
        <p className="text-p text-common">
          We've sent a verification code to your email address. Enter the code
          below to confirm your identity.
        </p>
      </div>
      {/* <form className="space-y-4">
        <div>
          <Label htmlFor="verification-code">Verification Code</Label>
          <Input
            id="verification-code"
            type="text"
            placeholder="Enter 6-digit code"
            maxLength={6}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Verify Email
        </Button>
      </form> */}
    </div>
  );
};

export default page;
