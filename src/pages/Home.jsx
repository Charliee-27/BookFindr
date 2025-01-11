import React from 'react'

const Home = () => {
  return (
    <main>
        <section className="bg-[url('/images/Hero-image.png')] bg-cover bg-no-repeat bg-center px-10 h-50 " >
            <div className='content-center place-items-center py-20 container'>
                <h1 className='h1 text-center font-poppins text-white '>Discover Your Next Favorite Book</h1> <br />
                <p className='body-3 text-center font-poppins text-white '>Search, explore, and dive into the world of books with ease. <br />Find detailed information about any book you love.</p> <br />
                <input className=' content-center' type="text" /> <br />
                <button className='bg-s1 py-1.5 px-5 rounded my-2 content-center'>Browse Now</button>
            </div>
        </section>


        <section className='container'>
            <div className='py-5 h5 text-center'> 
                <strong>Reasons</strong> for Choosing Us
            </div>
            <div className='flex flex-row gap-5'>
                <div className='p-10 bg-black rounded-lg text-center'>
                    <h3 className='text-s1 h6'>Search for Books</h3>
                    <p className='text-white pt-5'>Find books by title, author, or keyword with a powerful search engne connected to the Open Library.</p>
                </div>
                <div className='p-10 bg-black rounded-lg text-center'>
                    <h3 className='text-s1 h6'>View Detailed Information</h3>
                    <p className='text-white pt-5'>Get in-depth about books, including descriptions, authors, publication dates, and more.</p>
                </div>
                <div className='p-10 bg-black rounded-lg text-center'>
                    <h3 className='text-s1 h6'>Enjoy a esponsive UI</h3>
                    <p className='text-white pt-5'>Experience a clean, modern design that works seamlessly across all your devices.</p>
                </div>
            </div>
        </section>

        <section>

        </section>
    </main>
  )
}

export default Home