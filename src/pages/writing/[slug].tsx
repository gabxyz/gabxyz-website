import { allPosts, type Post } from 'contentlayer/generated';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = ({ params }) => {
  const currentPost = allPosts.find((post) => {
    return post.slug === params?.slug;
  });

  if (!currentPost) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: currentPost,
    },
  };
};

export default function SinglePostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <>
      <div>{post.title}</div>
      <MDXContent />
    </>
  );
}
