import { PostCard } from "@/components/PostCard";
import { allPosts, Post } from "contentlayer/generated";
//TODO: util 직접 짜기
import { compareDesc } from "date-fns";

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
    <div>
      <title>All Posts</title>
      {postList.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </div>
  );
};

export default PostListPage;
