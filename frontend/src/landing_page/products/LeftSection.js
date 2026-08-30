import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="container mx-auto p-10">
      <div className="grid grid-cols-12 gap-10 mx-auto justify-center items-center max-w-6xl">
        
        <div className="col-span-7 flex justify-center">
          <img src={imageURL} alt="No image" className="max-w-full" />
        </div>
        
        <div className="col-span-5">
          <h1 className="text-2xl font-semibold mb-2">{productName}</h1>
          <p className="text-gray-600 mb-4">{productDesription}</p>
          
          <div className="space-x-4 mb-4">
            <a href={tryDemo} className="text-blue-600">Try Demo</a>
            <a href={learnMore} className="text-blue-600">Learn More</a>
          </div>

          <div className="flex space-x-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" className="h-10" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" className="h-10" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default LeftSection;
