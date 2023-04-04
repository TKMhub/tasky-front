import React from "react";
import Layout from "../components/home/Blog/Layout";
import { getALLPosts, getSinglePost } from "@/lib/notionAPI";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const getStaticPaths = async () => {

  const allPosts = await getALLPosts();
  const paths = allPosts.map(({slug}) => ({params: {slug}}));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60 * 60, //SSGをしつつ、60秒毎に内容を更新していくのが、ISR
  };
};

const Post = ({ post }) => {
  return (
    <Layout title={"detail"}>
      <div className="mt-20">
        <section className="container lg:px-2 px-5 h-screen lg:w-2/5 mx-auto mt-20">
          <h2 className="w-full text-2xl font-medium">{post.metadata.title}</h2>
          <div className="border-b-2 w-1/3 mt-1 mt-1 border-sky-900"></div>
          <span className="text-gray-500">posted date at{post.metadata.date}</span>
          <br />
          {post.metadata.tags.map((tag) => (
          <p className="text-white bg-sky-900 rounded-xl font-medium mt-2 px-3 mx-2 inline-block">
            {tag}
          </p>
          ))}
          <div className="mt-10 font-medium">
            <ReactMarkdown children={post.markdown}>
            </ReactMarkdown>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Post;
