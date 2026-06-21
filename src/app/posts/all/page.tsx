import { PostCard } from "@/components/PostCard";
import { allPosts, Post } from "contentlayer/generated";
//TODO: util 직접 짜기
import { compareDesc } from "date-fns";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
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
    <main className="mx-auto w-full max-w-3xl px-5 py-12">
      <h1 className="mb-8 text-3xl font-bold text-slate-900">All Posts</h1>
      <ul className="flex flex-col gap-6">
        {postList.map((post) => (
          <PostCard key={post.url} post={post} />
        ))}
      </ul>
    </main>
  );
};

export default PostListPage;
