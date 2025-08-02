import { articles } from "../../../data/articles";
import { ArticleHero } from "../../../components/ArticleHero";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

interface Props {
  params: { slug: string };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  let content: React.ReactNode;
  if (typeof article.content === "string") {
    content = article.content.split("\n").map((t, i) =>
      <p key={i} style={{marginBottom: "1.2em"}}>{t.trim()}</p>
    );
  } else {
    content = article.content;
  }

  return (
    <main>
      <ArticleHero article={article} />
      <article className="article-content max-w-3xl mx-auto py-12 px-4">{content}</article>
    </main>
  );
}