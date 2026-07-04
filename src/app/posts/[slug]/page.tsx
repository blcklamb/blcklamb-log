import CodeBlock from "@/components/CodeBlock";
import Comments from "@/components/Comments";
import SiteFooter from "@/components/SiteFooter";
import { allPosts } from "contentlayer/generated";
import { format } from "date-fns";
import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { notFound } from "next/navigation";

const getSinglePost = (slug: string) =>
  allPosts.find((doc) => doc._raw.flattenedPath === slug);

export const generateStaticParams = () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

const components: MDXComponents = {
  pre: CodeBlock,
};

const PostPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const singlePost = getSinglePost(slug);

  if (!singlePost) {
    notFound();
  }

  const MDXContent = useMDXComponent(singlePost.body.code);
  return (
    <>
      <article className="mx-auto w-full max-w-3xl px-5 pb-16 pt-28">
        <Link
          href="/posts/all"
          className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-200"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">
            ←
          </span>
          All Posts
        </Link>

        <header className="mb-10 mt-6 border-b border-white/10 pb-8">
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-slate-50 md:text-4xl">
            {singlePost.title}
          </h1>
          {singlePost.description && (
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              {singlePost.description}
            </p>
          )}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
            <time dateTime={singlePost.postedAt}>
              {format(new Date(singlePost.postedAt), "yyyy.MM.dd")}
            </time>
            <span aria-hidden>·</span>
            <span>{singlePost.readTime} min read</span>
          </div>
          {singlePost.hashTags && singlePost.hashTags.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {singlePost.hashTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-200"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          )}
        </header>
        <div className="prose prose-invert max-w-none prose-headings:tracking-tight prose-a:text-indigo-300 prose-img:rounded-xl prose-img:border prose-img:border-white/10">
          <MDXContent components={components} />
        </div>
        <Comments />
      </article>
      <SiteFooter />
    </>
  );
};

export default PostPage;
