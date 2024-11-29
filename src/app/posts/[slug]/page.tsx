import CodeBlock from "@/components/CodeBlock";
import { allPosts } from "contentlayer/generated";
import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

const getSinglePost = (slug: string) => {
  const singlePost = allPosts.findIndex(
    (doc) => doc._raw.flattenedPath === slug
  );
  return allPosts[singlePost];
};

const components: MDXComponents = {
  pre: CodeBlock,
};

const PostPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const singlePost = getSinglePost(slug);

  const MDXContent = useMDXComponent(singlePost.body.code);
  return (
    <div>
      {singlePost.title}
      <MDXContent components={components} />
    </div>
  );
};

export default PostPage;
