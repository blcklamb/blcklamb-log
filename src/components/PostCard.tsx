import { PostMeta } from "@/app/posts/all/page";
import Image from "next/image";
import Link from "next/link";

interface PostCard {
  post: PostMeta;
}

export const PostCard = ({ post }: PostCard) => {
  const { title, thumbnail, description, postedAt, readTime, url } = post;

  const getPostURL = (url: string) => url.split("index.mdx")[0];

  return (
    <div className="mb-8 border-violet-300 border">
      <Link href={getPostURL(url)}>
        {thumbnail && (
          <Image src={thumbnail} alt="thumbnail" width={100} height={100} />
        )}
        <h2 className="text-3xl">{title}</h2>
      </Link>
      <div className="flex h-24 w-90">
        <p>{description}</p>
      </div>
      <div>
        <h2>{postedAt}</h2>
        <p>{readTime} min read</p>
      </div>
    </div>
  );
};
