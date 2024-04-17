"use client"
import Image from "next/image";
import Game from "@/components/Game";
import Header from "@/components/Header";

const Page: React.FC = () => {
  return (
    <div className="bg-base-100">
      <Header />
      <Game />
    </div>
  )
}

export default Page;