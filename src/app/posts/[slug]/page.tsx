import CodeBlock from "@/components/CodeBlock";
import Comments from "@/components/Comments";
import { allPosts } from "contentlayer/generated";
import { format } from "date-fns";
import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
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
    <article className="mx-auto w-full max-w-3xl px-5 py-12">
      <header className="mb-10 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold leading-snug text-slate-900 md:text-4xl">
          {singlePost.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
          <time dateTime={singlePost.postedAt}>
            {format(new Date(singlePost.postedAt), "yyyy.MM.dd")}
          </time>
          <span aria-hidden>·</span>
          <span>{singlePost.readTime} min read</span>
        </div>
        {singlePost.hashTags && singlePost.hashTags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {singlePost.hashTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700"
              >
                #{tag}
              </li>
            ))}
          </ul>
        )}
      </header>
      <div className="prose prose-slate max-w-none">
        <MDXContent components={components} />
      </div>
      <Comments />
    </article>
  );
};

export default PostPage;
