import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chiropractic & Wellness Blog | AlignedWest Chiropractic',
  description: 'Read articles from AlignedWest Chiropractic about chiropractic care, NAET, stress, and whole-person wellness from our Provo, Utah practice.',
  alternates: {
    canonical: 'https://www.alignedwest.com/blog',
  },
};

export default function BlogPage() {
  const contentDirectory = path.join(process.cwd(), 'src/content');
  const files = fs.readdirSync(contentDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(contentDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug: filename.replace('.mdx', ''),
      title: data.title || filename.replace('.mdx', ''),
      excerpt: data.excerpt || 'Read more about our holistic approach to wellness.',
      date: data.date || 'Recent',
    };
  });

  return (
    <section className="bg-clinic-off-white min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-dark mb-4">Wellness Insights</h1>
          <div className="h-1 w-20 bg-clinic-gold mx-auto mb-6"></div>
          <p className="text-clinic-gray">Thoughts on chiropractic care, NAET, and the path to alignment.</p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="bg-white p-8 border border-slate-200/60 shadow-sm hover:shadow-md transition-all group">
                <span className="text-clinic-gold text-xs uppercase tracking-widest font-bold mb-2 block">{post.date}</span>
                <h2 className="text-2xl font-serif text-clinic-dark group-hover:text-clinic-gold transition-colors mb-3">{post.title}</h2>
                <p className="text-clinic-gray text-sm leading-relaxed max-w-2xl">{post.excerpt}</p>
                <div className="mt-4 text-clinic-dark text-xs uppercase tracking-widest font-bold border-b border-clinic-gold w-fit">Read Article</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}