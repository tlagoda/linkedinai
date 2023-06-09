import React from "react";
import Loader from './Loader';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-900">
      <Loader />
    </div>
  );
}

export default LoadingPage;
