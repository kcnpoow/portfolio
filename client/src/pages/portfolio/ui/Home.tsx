export const Home = () => {
  return (
    <section className='flex items-center mt-14 max-sm:flex-col-reverse relative'>
      <div className='absolute -top-24' id='home'></div>

      <div className='flex-grow max-sm:text-center'>
        <p>
          <span className='text-2xl'>Hello. I'm Sabr,</span>
          <span className='block mb-4 text-casper font-extrabold text-4xl md:text-6xl lg:text-8xl'>
            Full Stack
            <br />
            Developer
          </span>

          <a
            className='underline underline-offset-8 decoration-4 decoration-casper text-2xl'
            href='#contact'
          >
            Contact Me
          </a>
        </p>
      </div>

      <div className='max-sm:mb-6 sm:pl-10'>
        <img
          className='rounded-3xl w-full max-sm:max-w-52'
          src='images/portrait.jpg'
        />
      </div>
    </section>
  );
};
