import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '../app/globals.css'
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";  // Adjust this path if necessary
import 'animate.css';


const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={`bg-alabaster min-h-screen ${inter.className}`}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp