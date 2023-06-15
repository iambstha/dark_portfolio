import Image from 'next/image'
import Link from 'next/link'

export default function Blogs() {
    return (
        <main className=' h-screen relative ' >
            <div className='w-full flex flex-col text-center justify-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] items-center ' >
                <div className='w-full md:w-2/3 lg:w-1/2 p-4 '>
                    <h2 className=' text-center text-[#d9c1b4dc] text-2xl font-semibold mb-4 ' >all blog posts</h2>
                    <div className='py-6 flex flex-col justify-start items-start ' >
                        <Link href='' className=' hover:bg-[#f5ded234] hover:pl-4 hover:transition-all w-full p-4 pl-0  border-b border-b-[#d9c1b4dc] ' >
                            <span className='text-left flex flex-wrap text-2xl text-[#d9c1b4dc] '>05 Jan, 2023</span>
                            <h3 className=' text-2xl text-[#D16E36] flex flex-wrap text-left '>Functional vs. Class Based Components In React</h3>
                            <p className=' text-base text-[#e6d0c5dc] flex flex-wrap text-left '>Why most of the developer switched back to functional components in React?</p>
                        </Link>
                    </div>
                    <div className='py-6 flex flex-col justify-start items-start ' >
                        <Link href='' className=' hover:bg-[#f5ded234] hover:pl-4 hover:transition-all w-full p-4 pl-0  border-b border-b-[#d9c1b4dc] ' >
                            <span className='text-left flex flex-wrap text-2xl text-[#d9c1b4dc] '>05 Jan, 2023</span>
                            <h3 className=' text-2xl text-[#D16E36] flex flex-wrap text-left '>Functional vs. Class Based Components In React</h3>
                            <p className=' text-base text-[#e6d0c5dc] flex flex-wrap text-left '>Why most of the developer switched back to functional components in React?</p>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
