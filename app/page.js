import Image from 'next/image'

export default function Home() {
  return (
   <main className=' h-screen relative ' >
    <div className=' flex flex-col text-center justify-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] items-center ' >
      <h2 className=' text-[#D9C1B4] text-8xl '>WEB DESIGNER <br />& DEVELOPER</h2>
      <p className='mt-4 text-2xl text-[#f5e4dac0] ' >Software developer, web designer  & teacher based <br />on Kathmandu, Nepal.</p>
    </div>
   </main>
  )
}
