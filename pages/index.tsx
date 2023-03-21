import Head from "next/head";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import Layout from "./components/home/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout title="dashboard">
        <div
          className="flex p-3 space-x-3 bg-gray-300"
          style={{ height: "91vh" }}
        >
          {/* 左半分 1/2 */}
          <div className="frex w-1/2 rounded-md p-5 bg-white">
            <h1 className="mb-6">My Task</h1>
            <h2>予定</h2>
            <div className="h-2/5 mb-6 border-4 rounded-md p-3  z-10"></div>
            <h2>進捗</h2>
            <div className="h-2/5 border-4 rounded-md p-3  z-10"></div>
          </div>

          {/* 右半分 1/2 */}
          <div
            className="w-1/2 space-y-2 rounded-md"
            style={{ maxHeight: "91vh", overflowY: "scroll" }}
          >
            {/* 右半分 1/6 */}
            <div className="h-1/6 rounded-md p-3 bg-white z-10">
              <div className="flex">
                <h1 className="mb-6 mr-3">メンバー A</h1>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    fill="#5AFF19"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="absolute left-1 w-6 h-6 hover:text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <div className="">
                  <p className="text-xl">進捗管理打ち合わせ</p>
                  <p className="text-center">10:00〜11:00</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="absolute right-1 w-6 h-6 hover:text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="h-1/6 rounded-md p-3 bg-white z-10"></div>
            <div className="h-1/6 rounded-md p-3 bg-white z-10"></div>
            <div className="h-1/6 rounded-md p-3 bg-white z-10"></div>
            <div className="h-1/6 rounded-md p-3 bg-white z-10"></div>
            <div className="h-1/6 rounded-md p-3 bg-white z-10"></div>
            <div className="h-1/6 rounded-md p-3 bg-white z-10"></div>
            <div className="h-1/6 rounded-md p-3 bg-white z-10"></div>
            <div className="h-1/6 rounded-md p-3 bg-white z-10"></div>
            <div className="h-1/6 rounded-md p-3 bg-white z-10"></div>
          </div>
        </div>
      </Layout>
    </>
  );
}
