import { Phone, MessageSquare, Headphones } from 'lucide-react';

interface SupportCenter2Props {
  setActiveTab: (tab: string) => void;
}
const SupportCenter2 = ({ setActiveTab }: SupportCenter2Props) => {
  const handleSupportClick = () => {
    setActiveTab('support-tickets');
  };
  return (
    <div className="bg-gray-100 shadow-lg mt-6 rounded-xl p-4 w-100">
      <div className="flex flex-col items-center space-y-3">
        {/* Headphones Icon */}
        <div className="bg-gray-100 p-2 rounded-full">
          <Headphones className="w-6 h-6 text-gray-700" />
        </div>

        {/* Text */}
        <p className="text-center text-sm text-gray-800">
          Have any problems or have suggestion?
        </p>

        {/* Button: Contact Support */}
        <button className="flex items-center justify-center w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 text-sm" onClick={handleSupportClick} >
          <MessageSquare className="mr-2" />
          Support
        </button>

        {/* Button: Call Us */}
        <button className="flex items-center justify-center w-full bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 text-sm">
          <Phone className="w-4 h-4 mr-2" />
          Call Us
        </button>


      </div>
    </div>
  );
};

export default SupportCenter2;
