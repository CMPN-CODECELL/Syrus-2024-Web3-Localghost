import React from "react";
import UserNav from "./UserNav";

const UserPage = () => {
  return (
    <div className="flex h-screen flex-col">
      <UserNav />
      <div className="h-screen flex  justify-center">
        <h1 className="text-8xl font-bold text-center">Welcome to Vaxchain</h1>
      </div>
    </div>
  );
};

export default UserPage;
