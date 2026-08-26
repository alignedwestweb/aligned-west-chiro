import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { marked } from 'marked';
import { Metadata } from 'next';

// Helper to read the file so we can reuse it in the Page and Metadata
async function getPostData(slug: string) {
  const filePath = path.join(process.cwd(), 'src/content', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return matter(fileContent);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);
  
  if (!post) return { title: 'Article Not Found' };

  return {
    title: post.data.title,
    description: post.data.excerpt,
    alternates: {
      canonical: `https://www.alignedwest.com/blog/${slug}`,
    },
    openGraph: {
      title: post.data.title,
      description: post.data.excerpt,
      images: [{ url: post.data.imageUrl }],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-clinic-gray italic">Article not found.</p>
      </div>
    );
  }

  const { data, content } = post;
  const htmlContent = marked.parse(content);

  return (
    <article className="bg-clinic-off-white min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-clinic-gold text-xs uppercase tracking-widest font-bold mb-8 block hover:text-clinic-navy transition-colors">
          ← Back to Blog
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-clinic-dark mb-4 leading-tight">
            {data.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-clinic-gray italic">
            <span>{data.date}</span>
            <span>•</span>
            <span>{data.readTime}</span>
          </div>
        </header>

        {/* The 'prose' class here uses the bold headers we set in tailwind.config.js */}
        <div 
          className="prose prose-slate lg:prose-lg max-w-none text-clinic-gray prose-headings:font-serif prose-img:rounded-sm prose-img:shadow-md" 
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
        
        {/* Simple manual injection of the Book Now link if you haven't set up the MDX component yet */}
        <div className="mt-16 pt-12 border-t border-slate-200 text-center">
          <Link 
            href={process.env.NEXT_PUBLIC_BOOK_NOW_LINK || '#'}
            target="_blank"
            className="inline-block bg-clinic-navy text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-clinic-navy transition-all"
          >
            Book Your Session
          </Link>
        </div>
      </div>
    </article>
  );
}