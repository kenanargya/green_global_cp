import Link from 'next/link'

export default function BlogCard({post}:{post:any}){
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition transform duration-200">
      <div className="h-40 bg-gradient-to-r from-brand-600 to-brand-400 flex items-end p-4 text-white">
        <div className="text-sm opacity-90">{post.author || 'Green Global'}</div>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p className="text-sm text-gray-600">{post.excerpt || (post.content || '').substring(0,120)}</p>
        <div className="mt-4 text-sm text-green-700 font-medium"><Link href={`/blog/${post.slug}`}>Read more →</Link></div>
      </div>
    </article>
  )
}
