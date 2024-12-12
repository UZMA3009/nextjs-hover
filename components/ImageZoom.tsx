const HoverHighlight = () => {
    const images = ["/example4.jpg", "/example2.jpg", "/examp3.jpg", "/example.jpg"];
  
    return (
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="hover-highlight w-40 h-40 rounded-lg object-cover"
          />
        ))}
      </div>
    );
  };
  
  export default HoverHighlight;
  