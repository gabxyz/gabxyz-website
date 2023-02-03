import { allPosts, type Post } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import Link from 'next/link';

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <section className='max-w-3xl text-gray-11'>
        <h2>Gabriel Rodrigues</h2>
        <p>
          I'm a developer living in Brazil, currently learning and exploring web
          development and UI/UX.
        </p>
        <p>
          After spending some time learning and getting familiar with the basics
          of modern web development, I decided to build this website to showcase
          what I've been building on my own, share some of my toughts, and, of
          course, use it as my personal playground to learn new stuff.
        </p>
        <p>
          I'm interested and inspired by well-crafted, polished user interfaces
          that provide great experiences through detail and interaction. Things
          I build are based on what inspires me.
        </p>
      </section>
      <section className='max-w-3xl text-gray-11 '>
        <h2>Projects</h2>
        {posts.map((post) => (
          <Link key={post.slug} href={`/writing/${post.slug}`}>
            {post.title}
          </Link>
        ))}
      </section>
    </>
  );
};

export default Home;
