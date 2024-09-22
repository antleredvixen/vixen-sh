import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ffccff] to-[#ff00ff] text-white">
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
    </main>
  );
}
