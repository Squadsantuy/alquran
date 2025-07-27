import { useEffect, useState } from 'react';
import BeritaCard from '../../components/berita/BeritaCard';
import ErrorCard from '../../components/ErrorCards';
import Layout from '../../components/Layouts';
import Loading from '../../components/Loading';

export default function Berita() {
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Daftar sumber berita atau kategori yang ingin ditampilkan
  // Anda bisa menambah atau mengubah URL di bawah ini
  const sumberBeritaUrls = [
    'https://api-berita-indonesia.vercel.app/republika/islam/',
    'https://api-berita-indonesia.vercel.app/republika/khasanah/',
    'https://api-berita-indonesia.vercel.app/cnbc/syariah/',
    'https://api-berita-indonesia.vercel.app/sindonews/kalam/',
    'https://api-berita-indonesia.vercel.app/antara/terbaru/'
  ];

  // Fetch data dari semua sumber
  useEffect(() => {
    const fetchSemuaBerita = async () => {
      setLoading(true);
      setError(false); // Reset status error setiap kali fetch dimulai

      try {
        // Membuat array dari promise untuk setiap permintaan fetch
        const requests = sumberBeritaUrls.map(url => 
          fetch(url).then(res => {
            if (!res.ok) {
              throw new Error(`Gagal fetch dari ${url}`);
            }
            return res.json();
          })
        );
        
        // Menjalankan semua promise secara paralel dan menunggu semuanya selesai
        const responses = await Promise.all(requests);

        // Menggabungkan semua data 'posts' dari setiap respons menjadi satu array tunggal
        // dan menyaring respons yang mungkin tidak memiliki data
        const semuaPostingan = responses
          .filter(response => response.success && response.data && response.data.posts)
          .flatMap(response => response.data.posts);

        // Mengacak urutan berita agar lebih bervariasi setiap kali dimuat
        const beritaAcak = semuaPostingan.sort(() => Math.random() - 0.5);

        setBerita(beritaAcak);

      } catch (err) {
        console.error("Error fetching berita:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSemuaBerita();
  }, []); // <-- Array dependensi kosong agar useEffect hanya berjalan sekali saat komponen dimuat

  return (
    <Layout name="Berita">
      {/* Judul bisa dibuat lebih umum karena sumbernya beragam */}
      <h1 className="text-3xl font-bold text-rose-500 mb-3">Berita Terkini</h1>

      <p>Berikut ini adalah kumpulan berita-berita dari berbagai sumber terpercaya.</p>

      {loading && <Loading message="Memuat berita dari berbagai sumber..." />}
      {error && (
        <ErrorCard message="Gagal memuat data, silakan periksa koneksi internet Anda lalu refresh halaman ini." />
      )}

      {/* Tampilkan berita jika ada dan tidak sedang loading */}
      {berita && !loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-4">
          {berita.map((post, i) => (
            <BeritaCard berita={post} key={`${post.link}-${i}`} /> // Menggunakan link sebagai bagian dari key untuk keunikan
          ))}
        </div>
      )}
    </Layout>
  );
}
