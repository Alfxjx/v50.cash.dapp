export default function Home({ params }: { params: { slug: string } }) {
    return (
      <main className="flex min-h-screen flex-col items-start justify-center">
  
         <div>this is slug: {params.slug}</div>
  
      </main>
    );
  }