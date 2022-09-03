const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">Photo by {image.user}</div>
      </div>
      <div>
        <ul>
          <li>
            <strong>View : </strong>
            {image.views}
          </li>

          <li>
            <strong>Downloads : </strong>
            {image.downloads}
          </li>

          <li>
            <strong>Likes : </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tags, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tags}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;