import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[80vh]">
      <h2 className="text-3xl text-blue-600">Page Not Found</h2>
      <Link href="/" className="text-blue-500  ml-4 btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
