"use client";

import React from "react";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import { useState, useEffect, useRef } from "react";
type Props = {};
interface User {
  username: any;
  avatar: any;
}

const Reco = (props: Props) => {
  const [suggestions, setSuggestions] = useState<User[]>([]);
  useEffect(() => {
    const newSuggestion = [...Array(5)].map((_, i) => ({
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
    }));
    setSuggestions(newSuggestion);
  }, []);
  return (
    <div className="h-5/6 w-96">
      <div className="border-red-600 border-2 rounded-full w-12 h-12 flex  space-x-5 items-center">
        <img className="rounded-full w-12 h-12 " src="next.svg" alt="Avatar" />
        <p>Mertokai</p>
      </div>
      <h1 className="font-light py-2">For You</h1>
      {suggestions.map((user, index) => (
        <div
          className="h-16 cursor-pointer flex space-x-4 space-y-5 py-8 max-w-xl w-64 items-center"
          key={index}
        >
          <div className="border-red-600 border-2  hover:scale-110 ease-out duration-100 rounded-full">
            <img
              className="rounded-full w-8 h-8 "
              src={user.avatar}
              alt="Avatar"
            />
          </div>
          <p className="text-xs cursor-pointer">{user.username}</p>
          <p className="text-blue-500">Follow</p>
        </div>
      ))}
    </div>
  );
};

export default Reco;
