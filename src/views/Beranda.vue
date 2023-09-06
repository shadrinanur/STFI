<template>
 <!-- Jumbotron -->
 <!-- <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
 
<div class="my-10 mx-auto flex w-screen max-w-screen-lg flex-col rounded-3xl bg-green-400 px-4">
  <p class="mt-20 text-center sm:text-lg font-semibold text-lime-500">STFI</p>
  <h1 class="mx-auto mt-2 max-w-3xl text-center text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">𝒮𝑒𝓁𝒶𝓂𝒶𝓉 𝒟𝒶𝓉𝒶𝓃𝑔 𝒜𝒹𝓂𝒾𝓃</h1>
  <p class="mx-auto hidden sm:block mt-4 max-w-5xl text-center text-gray-500 sm:mt-8 sm:text-lg"></p>

  <div class="mx-auto mt-8 mb-20 flex w-full flex-col space-y-2 sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-6">
    <router-link to="/arsip">
    <button class="rounded-full border-2 border-black px-10 py-3 font-medium text-black transition hover:bg-black hover:text-white sm:w-auto">Lihat Arsip</button>
    </router-link>
  </div>
</div> -->
<div
  id="carouselDarkVariant"
  class="relative"
  data-te-carousel-init
  data-te-ride="carousel">
  <!-- Carousel indicators -->
  <div
    class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    <button
      data-te-target="#carouselDarkVariant"
      data-te-slide-to="0"
      data-te-carousel-active
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      data-te-target="#carouselDarkVariant"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      data-te-slide-to="1"
      aria-label="Slide 1"></button>
    <button
      data-te-target="#carouselDarkVariant"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      data-te-slide-to="2"
      aria-label="Slide 1"></button>
  </div>

  <!-- Carousel items -->
  <div
    class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <!-- First item -->
    <div
      class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src="../assets/1.jpg"
        class="block w-full"
        alt="Motorbike Smoke" />
      <div
        class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
        <h5 class="text-xl">First slide label</h5>
        <p>
          Some representative placeholder content for the first slide.
        </p>
      </div>
    </div>
    <!-- Second item -->
    <div
      class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
        class="block w-full"
        alt="Mountaintop" />
      <div
        class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
        <h5 class="text-xl">Second slide label</h5>
        <p>
          Some representative placeholder content for the second slide.
        </p>
      </div>
    </div>
    <!-- Third item -->
    <div
      class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <img
        src="../assets/1.jpg"
        class="block w-full"
        alt="Woman Reading a Book" />
      <div
        class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
        <h5 class="text-xl">Third slide label</h5>
        <p>
          Some representative placeholder content for the third slide.
        </p>
      </div>
    </div>
  </div>

  <!-- Carousel controls - prev item-->
  <button
    class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselDarkVariant"
    data-te-slide="prev">
    <span class="inline-block h-8 w-8 dark:grayscale">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>
  <!-- Carousel controls - next item-->
  <button
    class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselDarkVariant"
    data-te-slide="next">
    <span class="inline-block h-8 w-8 dark:grayscale">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
</div>
<br>
<!-- Jumbotron -->

<section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md text-center">
      <h2 class="font-serif text-2xl font-bold sm:text-3xl"></h2>
      <p class="mt-4 text-base text-gray-700"></p>
    </div>

    

    <div class="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
      <article class="relative">
        <div class="aspect-square overflow-hidden">
            
          <img class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="https://www.stfi.ac.id/wp-content/uploads/2011/10/kampus-stfi-bandung.jpg" style="border-radius: 30px;" alt="" />
        </div>
      </article>

      <article class="relative">
        <div class="aspect-square overflow-hidden">
          <img class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="https://www.stfi.ac.id/wp-content/uploads/2018/05/IMG-20180514-WA0032.jpg"  style="border-radius: 30px;" alt="" />
        </div>
      </article>

      <article class="relative">
        <div class="aspect-square overflow-hidden">
          <img class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="../assets/gd3.png"  style="border-radius: 30px;" alt="" />
        </div>
      </article>

      <article class="relative">
        <div class="aspect-square overflow-hidden">
          <img class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="../assets/apotek.png" style="border-radius: 30px;" alt="" />
        </div>
      </article>
    </div>
  </div>
</section>
</template>


<style>
  :root {
    font-family: 'Poppins'
  }
</style>