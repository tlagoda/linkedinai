import React from "react";
import Loader from './Loader';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-900">
      <Loader colorClass="violet-500"/>
    </div>
  );
}

export default LoadingPage;
