import { PostMeta } from "@/app/posts/all/page";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface PostCard {
  post: PostMeta;
}

export const PostCard = ({ post }: PostCard) => {
  const { title, thumbnail, description, postedAt, readTime, url } = post;

  const getPostURL = (url: string) => url.split("index.mdx")[0];

  return (
    <li className="rounded-xl border border-slate-200 transition-colors hover:border-violet-300 hover:bg-violet-50/40">
      <Link href={getPostURL(url)} className="flex gap-4 p-5">
        {thumbnail && (
          <Image
            src={thumbnail}
            alt="thumbnail"
            width={96}
            height={96}
            className="h-24 w-24 shrink-0 rounded-lg object-cover"
          />
        )}
        <div className="flex min-w-0 flex-col">
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
          <p className="mt-2 line-clamp-2 text-sm text-slate-600">
            {description}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
            <time dateTime={postedAt}>
              {format(new Date(postedAt), "yyyy.MM.dd")}
            </time>
            <span aria-hidden>·</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </Link>
    </li>
  );
};
