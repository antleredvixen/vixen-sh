import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany({
    orderBy: (model, { desc }) => [desc(model.id)],
  });

  console.log(posts);

  return (
    <main className="p-4 min-h-[calc(100vh-60px)] bg-gradient-to-b from-[#ff00ff] to-[#ffccff] text-white">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="mb-4 break-inside-avoid">
            <img src={post.url} alt={`Post ${post.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
