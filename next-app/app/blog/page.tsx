import { BlogHero } from "../../components/BlogHero";
import { BlogPostCard } from "../../components/BlogPostCard";
import { posts } from "../../data/posts";

export default function BlogListPage() {
  return (
    <main>
      <BlogHero />
      <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto py-12 px-4">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}