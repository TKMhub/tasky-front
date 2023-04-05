import { Inter } from "next/font/google";
import Layout from "./components/home/Layout";

export default function Mytask() {
  return (
    <>
      <Layout title="dashboard">
          {/* 左半分 1/2 */}
        <div className="flex p-3 w-full space-x-3 bg-gray-300">
          <div className="frex w-1/3 rounded-md p-5 bg-white">
            <h1 className="mb-6">Create Task</h1>
          </div>

          {/* 右半分 1/2 */}
          <div className="frex w-2/3 rounded-md p-5 bg-white">
            <h1 className="mb-6">My Task</h1>
          </div>
        </div>
      </Layout>
    </>
  );
}
