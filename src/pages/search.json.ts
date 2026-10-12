import { getPosts, url } from '../lib';

export async function GET() {
  const posts = await getPosts();
  return Response.json(
    posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      tags: p.data.tags,
      url: url(`/posts/${p.id}/`),
    })),
  );
}
