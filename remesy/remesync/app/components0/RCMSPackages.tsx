import React from 'react';

interface packageProps{
    name: string;
    features: string[];
    color: string;
}

const packages = [
  {
    name: "Basic RCMS",
    features: ["Patient registration", "Insurance verification", "Charge capture", "Claim submission", "Payment posting"],
    color: "bg-blue-500"
  },
  {
    name: "Advanced Billing",
    features: ["All Basic RCMS features", "ICD-10 and CPT coding assistance", "Denial management", "Patient statements", "Electronic remittance advice (ERA)"],
    color: "bg-green-500"
  },
  {
    name: "Compliance and Audit",
    features: ["HIPAA compliance checklist", "Audit preparation forms", "Documentation review tools", "Provider credentialing"],
    color: "bg-purple-500"
  },
  {
    name: "Analytics and Reporting",
    features: ["Financial performance metrics", "Accounts receivable aging reports", "Productivity tracking", "Custom report builder"],
    color: "bg-yellow-500"
  },
  {
    name: "Patient Engagement",
    features: ["Online bill pay setup", "Payment plan options", "Financial counseling request forms", "Patient satisfaction surveys"],
    color: "bg-pink-500"
  },
  {
    name: "Practice Management Add-on",
    features: ["Appointment scheduling", "Referral management", "Authorization tracking"],
    color: "bg-indigo-500"
  },
  {
    name: "Comprehensive RCMS Solution",
    features: ["All features from packages 1-6"],
    color: "bg-red-500"
  },
  {
    name: "Custom Package",
    features: ["Select individual components from any package to create a tailored solution"],
    color: "bg-teal-500"
  }
];

const PackageCard = ({ name, features, color }:packageProps) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <div className={`${color} p-4 text-white font-bold text-xl`}>{name}</div>
    <ul className="p-4 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const RCMSPackages = () => {
  return (
    <div className="bg-[#F7F9F2] min-h-screen px-4 sm:px-6 lg:px-8 md:mt-[-100px] pb-[100px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">RCMS Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Add-on Options</h3>
          <ul className="space-y-2">
            {["Provider contract management", "Fee schedule updates", "Specialized reporting (e.g., productivity, financial forecasting)", "Training and support documentation"].map((addon, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                {addon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RCMSPackages;