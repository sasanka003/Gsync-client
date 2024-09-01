import React from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

interface DeleteConfirmationPopupProps {
  gardenerName: string;
}

const DeleteConfirmationPopup: React.FC<DeleteConfirmationPopupProps> = ({
  gardenerName,

}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-fill p-6 rounded-md shadow-lg max-w-sm w-full">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-red-100">
            <AlertCircle className="text-destructive" size={24} />
          </div>
          <h2 className="text-xl font-semibold ml-3">Delete Gardener?</h2>
        </div>
        <p className="text-base mb-6">
          Are you sure you want to delete{" "}
          <span className="font-semibold">{gardenerName}</span>?
        </p>
        <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={() => window.location.reload()}>
              Cancel
            </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationPopup;
