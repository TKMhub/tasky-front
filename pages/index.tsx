import { Inter } from "next/font/google";
import Layout from "./components/home/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Layout title="dashboard">
          <p className="p-60 text-xl">紹介サイトを作成  ＆  ログイン機能を実装</p>
      </Layout>
    </>
  );
}
