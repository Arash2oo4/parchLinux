let place = document.querySelector("#place")


let data = [
    {
        imgUrl: 'dist/images/xfce.png',
        name : 'xfce edition' ,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsum accusamus beatae sapiente commodi earum totam modi optio nam hic nulla pariatur, placeat dolorum ut minima nesciunt. Consequuntur, natus delectus.',
        downlodLink: 'https://github.com/parchlinux/parch-iso-xfce/releases/download/2023-02-23.beta.1/Parchlinux.XFCE-2023.02.23-x86_64.iso'
    },
    {
        imgUrl: 'dist/images/cinnamon.png',
        name : 'cinnamon edition' ,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsum accusamus beatae sapiente commodi earum totam modi optio nam hic nulla pariatur, placeat dolorum ut minima nesciunt. Consequuntur, natus delectus.',
        downlodLink: 'https://github.com/parchlinux/parch-iso-cinnamon/releases/download/2023-02-23.alpha.2/Parchlinux.Cinnamon-2023.02.23-x86_64.iso'
    },
    {
        imgUrl: 'dist/images/plasma.jpg',
        name : 'plasma edition' ,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsum accusamus beatae sapiente commodi earum totam modi optio nam hic nulla pariatur, placeat dolorum ut minima nesciunt. Consequuntur, natus delectus.',
        downlodLink: 'https://github.com/parchlinux/parch-iso-plasma/releases/download/2023-02-16.beta.2/Parchlinux.Plasma-2023.02.16-x86_64.iso'
    }
]



data.forEach(item => {

    place.innerHTML += `<div class="w-full lg:w-[32%] rounded-lg overflow-hidden shadow-lg mb-5 dark:shadow-[#0094d2] dark:shadow-sm">
    <img class="" src="${item.imgUrl}" alt="Sunset in the mountains">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">${item.name}</div>
        <p class="text-gray-700 dark:text-gray-200 text-base">
        ${item.description}
        </p>
      </div>
    <a href="${item.downlodLink}" class="w-full hover:bg-[#0094d2]/80 text-white bg-[#0094d2] font-bold py-2 px-4 rounded inline-flex items-center">
      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <span>Download</span>
    </a>
    </div>	
    
    `
    
});

document.querySelector("#fullYear").innerHTML = new Date().getFullYear()


let themeToggleDarkIcon = document.getElementById("lightModeBtn");
  let themeToggleLightIcon = document.getElementById("DarkModeBtn");
  
  themeToggleDarkIcon.addEventListener("click", () => {
    themeToggleDarkIcon.classList.add("hidden");
    themeToggleLightIcon.classList.remove("hidden");
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  });
  themeToggleLightIcon.addEventListener("click", () => {
    themeToggleLightIcon.classList.add("hidden");
    themeToggleDarkIcon.classList.remove("hidden");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  });
  window.addEventListener("load", () => {
    if (localStorage.getItem("theme") == "light") {
      document.documentElement.classList.remove("dark");
      themeToggleDarkIcon.classList.add("hidden");
      themeToggleLightIcon.classList.remove("hidden");
    } else {
      themeToggleLightIcon.classList.add("hidden");
      themeToggleDarkIcon.classList.remove("hidden");
      document.documentElement.classList.add("dark");
    }
  });