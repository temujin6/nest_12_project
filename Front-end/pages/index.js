"use client";

import { useEffect } from "react";

export default async function Home() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  console.log("data", posts);

  const dataUsers = await fetch("http://localhost:8000/getUsers");
  const users = await dataUsers.json();

  console.log("data user -->", users);

  return (
    <div>
      helloo
      {users.map((item) => (
        <div>{item.shop_name}</div>
      ))}
    </div>
  );
}
