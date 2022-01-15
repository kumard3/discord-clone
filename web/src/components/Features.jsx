import React from "react";
import one from "../1.svg";
import two from "../2.svg";
import three from "../3.svg";
import four from "../4.svg";
export default function Features() {
  return (
    <section className=" ">
      <div className="">
        <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row justify-around py-[150px] px-[50px] ">
          <div className="flex items-center justify-center ">
            <img src={one} alt="" className="p-8  bg-coolGray-500" />
          </div>
          <div className="flex flex-col justify-center flex-1 px-6 py-12 ">
            <h2 className="text-4xl font-bold">From few to a fandom</h2>
            <p className="my-6 text-gray-600">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse bg-gray-300 py-[50px] px-[50px]">
          <div className="flex items-center justify-center flex-1 ">
            <img src={two} alt="" className="p-8  bg-coolGray-500" />
          </div>
          <div className="flex flex-col justify-center flex-1 px-6 py-12 bg-coolGray-50">

            <h2 className="text-3xl font-bold">
              We're not reinventing the wheel
            </h2>
            <p className="my-6 text-coolGray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>

          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row  py-[150px] px-[50px] ">
          <div className="flex items-center justify-center flex-1 ">
            <img src={four} alt="" className="p-8  bg-coolGray-500" />
          </div>
          <div className="flex flex-col justify-center flex-1 px-6 py-12 bg-coolGray-50">

            <h2 className="text-3xl font-bold">
              We're not reinventing the wheel
            </h2>
            <p className="my-6 text-coolGray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>

          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm justify-center items-center py-[150px] px-[50px] ">
          <div className="flex flex-col justify-center flex-1 px-6 py-12 bg-coolGray-50">
            <h2 className="text-6xl font-bold text-center">
              RELIABLE TECH FOR STAYING CLOSE
            </h2>
            <p className="my-6 text-3xl text-center">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
          </div>
          <div className="flex items-center justify-center flex-1 ">
            <img src={four} alt="" className="p-8  bg-coolGray-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
