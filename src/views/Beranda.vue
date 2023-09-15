<template>
  <!--Jumbotron-->
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
</div>  -->
<article class="mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 text-black shadow-md md:mx-auto bg-gray-200">
  <div class="flex flex-col md:flex-row">
    <div class="p-5 md:w-4/6 md:p-8">
      <span class="rounded-md bg-sky-400 px-2 py-1 text-xs uppercase text-white">STFI</span>
      <p class="mt-2 text-xl font-black md:mt-6 md:text-4xl" style="font-family: square;">Selamat Datang Admin</p>
      <p class="mt-3 text-black">Arsip surat masuk dan Keluar.</p>
      <router-link to="/arsip">
      <button class="mt-4 mr-2 flex items-center justify-center rounded-md bg-sky-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 bg-sky-400">Lihat Arsip</button>
    </router-link>
    </div>
    <div class="mx-auto hidden items-center px-5 md:flex md:p-8">
      <img class="rounded-md shadow-lg" src="../assets/stfi.jpg" alt="Shop image" />
    </div>
  </div>
</article>

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