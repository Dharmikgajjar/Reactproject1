import Link from 'next/link';

export default function AboutPage() {
  return (
    <main style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link href="/" style={{ color: '#ff1601', textDecoration: 'none' }}>
         Home Page
        </Link>
      </nav>

      <h1 style={{ color: '#f4eaea' }}>About This Portal</h1>
      <p style={{ lineHeight: '1.6', color: '#ac9999ff' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quia cumque nam atque, ducimus laboriosam totam earum fugiat quae quisquam.
      </p>
    </main>
  );
}