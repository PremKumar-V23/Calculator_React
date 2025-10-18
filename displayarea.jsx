function DisplayArea({ value }) {
  return (
    <div className="bg-gray-900 text-white text-right p-4 text-3xl rounded-lg mb-2 h-20 flex items-center justify-end overflow-x-auto">
      {value || "0"}
    </div>
  );
}

export default DisplayArea;
