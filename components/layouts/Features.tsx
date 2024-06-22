import React from "react";
import FeaturesComponent from "../FeaturesComponent";

const Plans: React.FC = () => {
return (
    <div className="w-auto">
        <div className="mb-10">
            <div className="text-h1 text-center">Features</div>
            <p className="text-[#0E462C] text-center">A phrase about Gsync’s unique features</p>
        </div>
        <div className="grid grid-cols-2 gap-[202px]">
            <div className="flex-col">
                <FeaturesComponent
                    title="Condition Monitoring"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <FeaturesComponent
                    title="Yield Optimization"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <FeaturesComponent
                    title="Disease and pest Control"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </div>
            <div className="flex-col">
                <FeaturesComponent
                    title="Expert Support"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <FeaturesComponent
                    title="Collaboration Platform"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <FeaturesComponent
                    title="Another Feature"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </div>
        </div>
    </div>
);
};

export default Plans;