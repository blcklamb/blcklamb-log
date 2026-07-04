import type { PostMeta } from "@/app/posts/all/page";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface PostCard {
  post: PostMeta;
}

export const PostCard = ({ post }: PostCard) => {
  const { title, thumbnail, description, postedAt, readTime, url, hashTags } =
    post;

  const getPostURL = (url: string) => url.split("index.mdx")[0];

  return (
    <li className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] ring-hairline transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
      {/* hover 시 은은하게 번지는 오로라 */}
      <span className="pointer-events-none absolute -inset-px -z-10 bg-aurora opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.08]" />
      <Link href={getPostURL(url)} className="flex gap-5 p-5">
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={`${title} thumbnail`}
            width={112}
            height={112}
            className="h-24 w-24 shrink-0 rounded-xl border border-white/10 object-cover sm:h-28 sm:w-28"
          />
        )}
        <div className="flex min-w-0 flex-col">
          <h2 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-white">
            {title}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">
            {description}
          </p>
          <div className="mt-auto flex flex-wrap items-center gap-x-2.5 gap-y-1 pt-3 text-xs text-slate-500">
            <time dateTime={postedAt}>
              {format(new Date(postedAt), "yyyy.MM.dd")}
            </time>
            <span aria-hidden>·</span>
            <span>{readTime} min read</span>
            {hashTags && hashTags.length > 0 && (
              <>
                <span aria-hidden>·</span>
                <span className="text-indigo-300/80">
                  {hashTags.slice(0, 3).map((t) => `#${t}`).join(" ")}
                </span>
              </>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};
