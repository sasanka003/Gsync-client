import React from "react";

const UpgradeAccountCard = () => {
  return (
    <div className="p-6 border border-outline rounded-md w-[640px]">
      <div className="text-h3 font-semibold mb-2">Upgrade to an Expert Account</div>
      <p className="text-p text-grey mb-4">
        You can upgrade your account to an Expert Account by submitting a verification
        document. After verified, your public profile in Gsync community will be shown
        as an Expert Gardener.
      </p>
      <div className="flex gap-4">
      <button className="bg-text text-fill text-body-medium font-medium py-2 px-4 rounded">
        Upload Document
      </button>
      <div className="text-p text-grey mt-2">
        *Terms & Conditions Apply.
      </div>
      </div>
    </div>
  );
};

export default UpgradeAccountCard;
