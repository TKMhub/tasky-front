import { getALLPosts } from "@/lib/notionAPI";
import Head from "next/head";
import SinglePost from "./components/home/Blog/SinglePost";
import Layout from "./components/home/Blog/Layout";

export const getStaticProps = async () => {
  const allPosts = await getALLPosts();

  return {
    props: {
      allPosts: allPosts,
    },
    revalidate: 60 * 60, //SSGをしつつ、60秒毎に内容を更新していくのが、ISR
  };
};

export default function Home({ allPosts }) {
  console.log(allPosts);

  return (
    <Layout>

    <div className="container h-full w-full mx-auto ">
      <main className="container w-full mt-16">
        <h1 className="text-5xl font-medium text-center mb-16 p-3">Tasky Blog</h1>
        {allPosts.map((post) => (
          <div className="mx-4" key={post.id}>
            <SinglePost 
            title={post.title}
            description={post.description}
            date={post.date}
            tags={post.tags}
            slug={post.slug}
            />
          </div>
        ))}
      </main>
    </div>
        </Layout>
  );
}
