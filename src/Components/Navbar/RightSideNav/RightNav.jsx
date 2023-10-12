import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";

const RightNav = () => {
  return (
    <div className="">
      <div className="border-2 rounded-sm p-2">
        <h2 className="text-2xl font-semibold">Login With</h2>
        <div>
          <button className="btn w-full my-3">
            <BsGoogle /> Google
          </button>{" "}
          <br />
          <button className="btn w-full"><BsGithub/>GitHub</button>
        </div>
      </div>
        <h2 className="text-2xl">Find Us On</h2>
      <div className="border-2 rounded-sm my-4">
          <button className="btn w-full my-3">
            <BsGoogle /> Google
          </button>
          <hr />
          <button className="btn w-full my-3 "><BsGithub/>GitHub</button>
           
           <hr />
          <button className="btn w-full my-3"><BsGithub/>GitHub</button>
        </div>
    </div>
  );
};

export default RightNav;
