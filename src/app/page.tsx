import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany({
    orderBy: (model, { desc }) => [desc(model.id)],
  });

  console.log(posts);

  return (
    <main className="flex flex-wrap p-4 gap-4 min-h-[calc(100vh-60px)] bg-gradient-to-b from-[#ff00ff] to-[#ffccff] text-white">
      {posts.map((post, index) => (
        <div key={post.id - index} className="flex w-48 flex-col">
          <img src={post.url} />
          <div>{post.name}</div>
        </div>
      ))}
    </main>
  );
}
