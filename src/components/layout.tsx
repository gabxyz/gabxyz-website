import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "@/components/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>gabxyz</title>
        <meta name="description" content="personal website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.asPath}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 350,
          }}
          className="prose prose-gray mx-auto mt-4 flex max-w-3xl flex-1 flex-col px-4"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Layout;
