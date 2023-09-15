<template>
      <div class="bg-slate-200 flex h-screen">
<aside class="fixed z-50 md:relative">
  <!-- Sidebar -->
  <input type="checkbox" class="peer hidden" id="sidebar-open" />
  <label class="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-100 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden" for="sidebar-open">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </label>
<nav aria-label="Sidebar Navigation" class="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-400 text-white transition-all md:h-screen md:w-64 lg:w-72">
    <div >
      <!-- class="bg-gray-800 mt-5 py-4 pl-10 md:mt-10"  -->
      <span class="">
        <span class="text-xl"></span>
      </span>
    </div>
    <ul class="mt-8 space-y-3 md:mt-20">
      <li class="relative">
        <router-link to="/masuk" class="focus:bg-slate-400 hover:bg-slate-400 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-400 focus:outline-none">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="" class="bi bi-envelope-exclamation" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
</svg>
</span> 
          <span class="text-black">Surat Masuk</span>
        </router-link >
      </li>
      <li class="relative">
        <router-link to="/keluar" class="focus:bg-slate-600 hover:bg-slate-400 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
          <span> 
            <!-- <p>"currentColor"</p> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="" class="bi bi-envelope-check" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
</svg>
</span> 
          <span class="text-black">Surat Keluar</span>
        </router-link >
      </li>
     
    </ul>
    <div class="my-6 mt-auto ml-10 flex cursor-pointer">
    </div>
  </nav>
</aside>
<!-- /Sidebar -->

<div class="flex h-full w-full flex-col">
  <!-- Navbar -->
  <header class="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
   <div class="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
</div>

      <ul class="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
        <li class="">
          <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </li>
        <li class="">
          <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
        </li>
        <li class="">
          <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </li>
      </ul>
    
  </header>
  <!-- /Navbar -->

  <!-- Main -->
  <div class="h-full overflow-hidden pl-10">
    <main id="dashboard-main" class="h-[calc(100vh-10rem)] overflow-auto px-4 py-10">
      <section class="bg-white py-6 sm:py-8 lg:py-12">
<div class="mx-auto max-w-screen-xl px-4 md:px-8">
  <!-- Heading -->
  <div class="relative mb-10 pt-8 md:mb-16">
    <h2 class="mb-4 text-center font-serif text-3xl font-bold text-gray-800 md:mb-6 md:text-4xl">DOKUMEN SURAT MASUK & KELUAR</h2>
  </div>

  <section class="mx-auto max-w-screen-lg px-4 py-12">
 
  <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-2">
    <article class="">
      <a href="#" class="flex flex-col rounded border bg-white transition hover:bg-gray-200"
        ><div class="flex m-16">
          <img src="../assets/surat2.png"  />
        </div>
        <div class="flex-1 p-4">
          <p class="mb-4 text-xs font-bold"></p>
          <h6 class="mb-4 text-xl font-light">Surat Masuk</h6>
          <p class="mb-4 text-xs">Tanggal</p>
          <p class="mb-4 text-sm">Nomor Surat</p>
          <p class="mb-4 text-sm"></p>
        </div></a>            
    </article>
    
    <article class="">
      <a href="#" class="flex flex-col rounded border bg-white transition hover:bg-gray-200"
        ><div class="flex m-16">
          <img src="../assets/surat2.png"  class="w-full object-cover"  />
        </div>
        <div class="flex-1 p-4">
          <p class="mb-4 text-xs font-bold"></p>
          <h6 class="mb-4 text-xl font-light">Surat Keluar</h6>
          <p class="mb-4 text-xs">Surat Keluar Belum Dibaca</p>
          <p class="mb-4 text-sm">Surat Keluar Belum Dikirim</p>
          <p class="mb-4 text-sm">Surat Keluar Sudah Diantar</p>
        </div></a
      >
    </article>
  </div>
</section>

  <!-- /Heading -->
  
  <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16">
    <!-- Article -->
    <section class="mx-auto max-w-screen-lg px-4 py-12">
  <div class="mb-12 text-center">
  </div>
  <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
   
  </div>
</section>
    <!-- /Article -->
  </div>
</div>
</section>
    </main>
  </div>
  <!-- /Main -->
</div>
</div>
</template>