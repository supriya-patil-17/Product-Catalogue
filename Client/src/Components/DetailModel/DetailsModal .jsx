const DetailsModal = ({ part, onClose }) => {
  if (!part) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <span
          className="absolute top-2 right-4 text-gray-700 text-2xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-xl font-semibold mb-4">{part.name}</h2>
        <div className="space-y-2 text-sm">
          {Object.entries(part.details).map(([key, value]) => (
            <div key={key} className="flex">
              <span className="font-medium w-40">{key}:</span>
              <span className="flex-1">{value || "-"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
