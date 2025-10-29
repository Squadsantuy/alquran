import { useEffect, useState } from 'react'
import BeritaCard from '../../components/berita/BeritaCard'
import ErrorCard from '../../components/ErrorCards'
import Layout from '../../components/Layouts'
import Loading from '../../components/Loading'

export default function Berita() {
  const [berita, setBerita] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // Fetch data
  useEffect(() => {
  const fetchAllBerita = async () => {
    setLoading(true);
    try {
      // Daftar sumber berita yang ingin diambil
      const urls = [
        'https://berita-indo-api-next.vercel.app/antara',
        'https://api-berita-indonesia.vercel.app/sindonews/kalam/',
        'https://api-berita-indonesia.vercel.app/antara/terbaru/'
      ];

      // Mengambil data dari semua URL secara paralel
      const requests = urls.map(url => fetch(url).then(res => res.json()));
      const responses = await Promise.all(requests);

      // Menggabungkan semua hasil berita (posts) menjadi satu array
      const allPosts = responses.flatMap(response => response.data.posts);

      setBerita(allPosts);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  fetchAllBerita();
}, []);

  return (
    <Layout name="Berita">
      <h1 className="text-3xl font-bold text-rose-500 mb-3">Berita Islamic</h1>

      <p>Berikut ini adalah kumpulan berita-berita islamic.</p>

      {loading && <Loading message="Memuat berita..." />}
      {error && (
        <ErrorCard message="Gagal memuat data, silakan periksa koneksi internet Anda lalu refresh halaman ini." />
      )}

      {berita && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-4">
          {berita.map((post, i) => (
            <BeritaCard berita={post} key={i} />
          ))}
        </div>
      )}
    </Layout>
  )
  }
