import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

const getSinglePost = (slug: string) => {
  const singlePost = allPosts.findIndex(
    (doc) => doc._raw.flattenedPath === slug
  );
  return allPosts[singlePost];
};

const PostPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const singlePost = getSinglePost(slug);

  const MDXContent = useMDXComponent(singlePost.body.code);
  return (
    <div>
      {singlePost.title}
      <MDXContent components={MDXContent} />
    </div>
  );
};

export default PostPage;
