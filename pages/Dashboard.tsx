import { Inter } from "next/font/google";
import Layout from "./components/home/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const data = [
    {
      memberName: "メンバー A",
      meetingInfo: { title: "進捗管理打ち合わせ", time: "10:00〜11:00" },
    },
    {
      memberName: "メンバー B",
      meetingInfo: { title: "デザインレビュー", time: "13:00〜14:00" },
    },
    {
      memberName: "メンバー C",
      meetingInfo: { title: "開発会議", time: "15:00〜17:00" },
    },
    {
      memberName: "メンバー D",
      meetingInfo: { title: "散歩", time: "15:00〜17:00" },
    },
    {
      memberName: "メンバー E",
      meetingInfo: { title: "お昼ご飯", time: "15:00〜17:00" },
    },
    {
      memberName: "メンバー E",
      meetingInfo: { title: "お昼ご飯", time: "15:00〜17:00" },
    },
    {
      memberName: "メンバー E",
      meetingInfo: { title: "お昼ご飯", time: "15:00〜17:00" },
    },
  ];

  return (
    <>
      <Layout title="dashboard">
        <div className="flex p-3 space-x-3 bg-gray-300">
          {/* 左半分 1/2 */}
          <div className="frex w-1/2 rounded-md p-5 bg-white">
            <h1 className="mb-6">My Task</h1>
            <h2>本日の予定</h2>
            <div className="flex h-2/5 mb-6 border-4 rounded-md z-10">
              <div className="w-1/4 justify-center">
                <div className="h-1/3 bg-blue-100 flex justify-center items-center border">
                  <span className="text-center">午前</span>
                </div>
                <div className="h-1/3 bg-blue-200 flex justify-center items-center border">
                  <span className="text-center">午後１</span>
                </div>
                <div className="h-1/3 bg-blue-300 flex justify-center items-center border">
                  <span className="text-center">午後2</span>
                </div>
              </div>
              <div className="w-3/4">
                <div className="flex-row h-1/3 overflow-y-auto p-3 border">
                  <span className="block m-1">タスク1XXXXXXXXXXXXXXX</span>
                  <span className="block m-1">タスク2XXXXXXXXXXXXXXX</span>
                  <span className="block m-1">タスク3XXXXXXXXXXXXXXX</span>
                </div>
                <div className="flex-row h-1/3 overflow-y-auto p-3 border">
                  <span className="block m-1">タスク1XXXXXXXXXXXXXXX</span>
                  <span className="block m-1">タスク2XXXXXXXXXXXXXXX</span>
                  <span className="block m-1">タスク3XXXXXXXXXXXXXXX</span>
                </div>
                <div className="flex-row h-1/3 overflow-y-auto p-3 border">
                  <span className="block m-1">タスク1XXXXXXXXXXXXXXX</span>
                  <span className="block m-1">タスク2XXXXXXXXXXXXXXX</span>
                </div>
              </div>
            </div>
            <h2>Project ポケット</h2>
            <div className="flex flex-wrap h-2/5 border-4 rounded-md overflow-y-auto z-10 max-w-full">
              {[...Array(50)].map((_, index) => (
                <div key={index} className="w-1/4 h-1/3 p-2">
                  <div className="bg-blue-200 flex justify-center items-center rounded-lg h-full ">
                    <span className="p-3">タスク {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右半分 1/2 */}
          <div
            className="w-1/2 md:w-3/5 lg:w-1/2 space-y-2 rounded-md"
            style={{ overflowY: "scroll" }}
          >
            {/* 右部　メンバー進捗 */}
            {data.map((member, index) => (
              <div
                key={index}
                className="h-1/6 rounded-md p-3 bg-white z-10 flex flex-col justify-center"
              >
                <div className="flex">
                  <h1 className="mb-6 mr-3">{member.memberName}</h1>
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

                <div className="relative flex justify-center items-center flex-shrink">
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
                    <p className="text-xl">{member.meetingInfo.title}</p>
                    <p className="text-center">{member.meetingInfo.time}</p>
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
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
