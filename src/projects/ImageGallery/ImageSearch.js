import React, { useState } from "react";
const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onInputChange = (e) => {
    setText(e.target.value);
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input onChange={onInputChange} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term...." />
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
