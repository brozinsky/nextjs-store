import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
        <Header />
        <main className='container mx-auto'>{children}</main>
        <Footer />
    </div>
  )
}