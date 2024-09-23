import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Posts() {
  const posts = await db.query.posts.findMany({
    orderBy: (model, { desc }) => [desc(model.id)],
  });
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="mb-4 break-inside-avoid">
        <img src={post.url} alt={`Post ${post.id}`} className="rounded-lg" />
      </div>
    ))}
  </div>
}

export default async function HomePage() {
  return (
    <main className="p-4 min-h-[calc(100vh-100px)] bg-gradient-to-b from-[#ff00ff] to-[#ffccff] text-white">
    </main>
  );
}
