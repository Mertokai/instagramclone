"use client";
import Stories from "../components/Stories";
import SidebarPc from "../components/SidebarPc";
import Reco from "../components/Reco";
import Posts from "../components/Posts";
import See from "../components/See";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex ">
      <SidebarPc />
      <main className="md:max-w-7xl w-screen mx-auto flex-col space-y-5">
        <Stories />
        <Posts image="nebula.jpg" des="nebula" name="nebula" />
        <Posts image="logic.jpeg" des="logic" name="logic" />
        <Posts image="ocean.jpg" des="ocean" name="ocean" />
        <See />
        <Posts image="sunset.jpg" des="sunset" name="sunset" />
        <Sidebar />
      </main>
      <div className="py-8 hidden md:flex items-start max-w-xs">
        <Reco />
      </div>
    </div>
  );
}
