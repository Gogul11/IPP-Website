import './globals.css'
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='h-screen w-screen'>
        {children}
        <div className='h-20 w-full flex items-center justify-between absolute top-0 z-50 px-8 max-md:px-6'>
          <Image src="/ista.png" className='h-15 w-15 max-md:h-10 max-md:w-10' alt="" />
          <Image src="/ipp.png"  className='h-20 w-20 max-md:h-15 max-md:w-15' alt="" />
        </div>
      </body>
    </html>
  );
}
