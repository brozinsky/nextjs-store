import Header from '@/modules/navigation/Header';
import Footer from '@/modules/navigation/Footer';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
        <Header />
        <main className='container mx-auto'>{children}</main>
        <Footer />
    </div>
  )
}