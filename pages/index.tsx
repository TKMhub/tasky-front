import { Inter } from "@next/font/google";
import Layout from "./components/home/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Layout title="dashboard">
        <div className="flex bg-gray-300">
          {/* 左半分 1/2 */}
          

          {/* 右半分 1/2 */}
          
        </div>
      </Layout>
    </>
  );
}
