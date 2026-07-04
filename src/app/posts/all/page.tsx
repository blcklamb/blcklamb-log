import { PostCard } from "@/components/PostCard";
import SiteFooter from "@/components/SiteFooter";
import { allPosts, Post } from "contentlayer/generated";
//TODO: util 직접 짜기
import { compareDesc } from "date-fns";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts | blcklamb log",
};

export type PostMeta = Omit<Post, "_raw">;

export interface PostListElement {
  slug: string;
  meta: PostMeta;
}

const getAllPosts = async (): Promise<PostMeta[]> => {
  return allPosts.sort((a, b) =>
    compareDesc(new Date(a.postedAt), new Date(b.postedAt))
  );
};

const PostListPage = async () => {
  const postList = await getAllPosts();
  return (
    <>
      <main className="mx-auto w-full max-w-3xl px-5 pb-16 pt-28">
        <header className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-indigo-300/70">
            Writing
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-50">
            All Posts
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            학습하고 부딪히며 남긴 기록 {postList.length}편.
          </p>
        </header>
        <ul className="flex flex-col gap-3">
          {postList.map((post) => (
            <PostCard key={post.url} post={post} />
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
};

export default PostListPage;
