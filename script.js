let catId = 1000 ;
const callMainData = async() => {
    
const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
const data = await res.json();
let mainData = data.data;

const menuSection = document.getElementById('menuSection');
mainData.forEach( element => {
    
    const div = document.createElement('div');
    div.innerHTML = `
        
            <button onclick = "clickButton2('${element.category_id}')" class="btn hover:bg-red-600 hover:text-white">${element.category}</button>
        </div>
    `
    menuSection.appendChild(div);
});

}

callMainData();

const clickButton2 = async(id) =>{
    callIdData(id);
    catId = id;

}
const clickButton1 = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catId}`);
    const data = await res.json();
    let idData = data.data;

    const sortingData = idData.sort((a,b)=> parseInt(b.others.views) - parseInt(a.others.views))

    const playListSection = document.getElementById('playListSection');
    playListSection.innerHTML ="";
    // const noData = document.getElementById('noData');
    // noData.innerHTML ="";

    sortingData.forEach(element2 => {
        let hr = parseInt((element2?.others?.posted_date)/3600);
            let resHR = (element2?.others?.posted_date)%3600;
            let min = parseInt(resHR/60);
            
            if(element2?.others?.posted_date!=0){
                const div = document.createElement('div');
                div.classList = "flex justify-center mb-5";
                div.innerHTML = `
                <div class="card  bg-base-100 ">
                    <figure class=" flex-col ">
                        <img class="w-[20rem] h-[12rem] rounded-lg relative" src="${element2?.thumbnail}" alt="thumbnail Image">
                       <p class="bg-black text-white absolute bottom-[47%] right-3 px-3 rounded">${hr} hrs ${min}min ago</p>
                    </figure>
                    <div class="card-body px-4 ">
                        <div class="flex ">
                            <img class="w-[2rem] h-[2rem] rounded-2xl mr-4" src="${element2?.authors[0]?.profile_picture}" alt="thumbnail Image">
                            <h1 class="text-2xl font-bold">${element2.title}</h1>
                        </div>
                        <div class=" ml-12  opacity-70">
                            <span>${element2?.authors[0]?.profile_name}</span>
                            <span>${element2?.authors[0]?.verified?"<img class='w-[10%] inline' src='./image/ok.png' alt='Verified'>":""}</span>
                        </div>
                        <p class="ml-[3rem] opacity-60">${element2?.others?.views} views</p>
                    </div>
                </div>
            `
            playListSection.appendChild(div);
            }
            else{
                const div = document.createElement('div');
                div.classList = "flex justify-center mb-5";
                div.innerHTML = `
                <div class="card  bg-base-100 ">
                    <figure>
                        <img class="w-[20rem] h-[12rem] rounded-lg" src="${element2?.thumbnail}" alt="thumbnail Image">
                    </figure>
                    <div class="card-body px-4 ">
                        <div class="flex ">
                            <img class="w-[2rem] h-[2rem] rounded-2xl mr-4" src="${element2?.authors[0]?.profile_picture}" alt="thumbnail Image">
                            <h1 class="text-2xl font-bold">${element2.title}</h1>
                        </div>
                        <div class=" ml-12  opacity-70">
                            <span>${element2?.authors[0]?.profile_name}</span>
                            <span>${element2?.authors[0]?.verified?"<img class='w-[10%] inline' src='./image/ok.png' alt='Verified'>":""}</span>
                        </div>
                        <p class="ml-[3rem] opacity-60">${element2?.others?.views} views</p>
                    </div>
                </div>
            `
            playListSection.appendChild(div);
            }
    });
}

 
const loadFirstData = async(id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
    const data = await res.json();
    let loadFirstIdData = data.data;

    const firstPlayListSection = document.getElementById('playListSection');

    // Initial data

    loadFirstIdData.forEach(element2 => {
        let hr = parseInt((element2?.others?.posted_date)/3600);
        let resHR = (element2?.others?.posted_date)%3600;
        let min = parseInt(resHR/60);
        
        if(element2?.others?.posted_date!=0){
            const div = document.createElement('div');
            div.classList = "flex justify-center mb-5";
            div.innerHTML = `
            <div class="card  bg-base-100 ">
                <figure class=" flex-col ">
                    <img class="w-[20rem] h-[12rem] rounded-lg relative" src="${element2?.thumbnail}" alt="thumbnail Image">
                   <p class="bg-black text-white absolute bottom-[47%] right-3 px-3 rounded">${hr} hrs ${min}min ago</p>
                </figure>
                <div class="card-body px-4 ">
                    <div class="flex ">
                        <img class="w-[2rem] h-[2rem] rounded-2xl mr-4" src="${element2?.authors[0]?.profile_picture}" alt="thumbnail Image">
                        <h1 class="text-2xl font-bold">${element2.title}</h1>
                    </div>
                    <div class=" ml-12  opacity-70">
                        <span>${element2?.authors[0]?.profile_name}</span>
                        <span>${element2?.authors[0]?.verified?"<img class='w-[10%] inline' src='./image/ok.png' alt='Verified'>":""}</span>
                    </div>
                    <p class="ml-[3rem] opacity-60">${element2?.others?.views} views</p>
                </div>
            </div>
        `
        firstPlayListSection.appendChild(div);
        }
        else{
            const div = document.createElement('div');
            div.classList = "flex justify-center mb-5";
            div.innerHTML = `
            <div class="card  bg-base-100 ">
                <figure>
                    <img class="w-[20rem] h-[12rem] rounded-lg" src="${element2?.thumbnail}" alt="thumbnail Image">
                </figure>
                <div class="card-body px-4 ">
                    <div class="flex ">
                        <img class="w-[2rem] h-[2rem] rounded-2xl mr-4" src="${element2?.authors[0]?.profile_picture}" alt="thumbnail Image">
                        <h1 class="text-2xl font-bold">${element2.title}</h1>
                    </div>
                    <div class=" ml-12  opacity-70">
                        <span>${element2?.authors[0]?.profile_name}</span>
                        <span>${element2?.authors[0]?.verified?"<img class='w-[10%] inline' src='./image/ok.png' alt='Verified'>":""}</span>
                    </div>
                    <p class="ml-[3rem] opacity-60">${element2?.others?.views} views</p>
                </div>
            </div>
        `
        firstPlayListSection.appendChild(div);
        }
        
    });


}
loadFirstData();

const callIdData = async(id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    let idData = data.data;


    const playListSection = document.getElementById('playListSection');
    playListSection.innerHTML ="";
    const noData = document.getElementById('noData');
    noData.innerHTML ="";

    if(idData==0)
    {
        const div = document.createElement('div');
        div.classList = " mb-5 m-auto";
        div.innerHTML =`
            <div class= text-center m-auto>
                <img class="m-auto rounded-lg" src="./image/Icon.png" alt="thumbnail Image">
                <h1 class="font-bold text-center text-3xl">Oops!! Sorry, There is no <br> content here</h1>
            </div>
        `;
        noData.appendChild(div);
    }
    else if(idData!=0 ){
        idData.forEach(element2 => {
            let hr = parseInt((element2?.others?.posted_date)/3600);
            let resHR = (element2?.others?.posted_date)%3600;
            let min = parseInt(resHR/60);
            
            if(element2?.others?.posted_date!=0){
                const div = document.createElement('div');
                div.classList = "flex justify-center mb-5";
                div.innerHTML = `
                <div class="card  bg-base-100 ">
                    <figure class=" flex-col ">
                        <img class="w-[20rem] h-[12rem] rounded-lg relative" src="${element2?.thumbnail}" alt="thumbnail Image">
                       <p class="bg-black text-white absolute bottom-[47%] right-3 px-3 rounded">${hr} hrs ${min}min ago</p>
                    </figure>
                    <div class="card-body px-4 ">
                        <div class="flex ">
                            <img class="w-[2rem] h-[2rem] rounded-2xl mr-4" src="${element2?.authors[0]?.profile_picture}" alt="thumbnail Image">
                            <h1 class="text-2xl font-bold">${element2.title}</h1>
                        </div>
                        <div class=" ml-12  opacity-70">
                            <span>${element2?.authors[0]?.profile_name}</span>
                            <span>${element2?.authors[0]?.verified?"<img class='w-[10%] inline' src='./image/ok.png' alt='Verified'>":""}</span>
                        </div>
                        <p class="ml-[3rem] opacity-60">${element2?.others?.views} views</p>
                    </div>
                </div>
            `
            playListSection.appendChild(div);
            }
            else{
                const div = document.createElement('div');
                div.classList = "flex justify-center mb-5";
                div.innerHTML = `
                <div class="card  bg-base-100 ">
                    <figure>
                        <img class="w-[20rem] h-[12rem] rounded-lg" src="${element2?.thumbnail}" alt="thumbnail Image">
                    </figure>
                    <div class="card-body px-4 ">
                        <div class="flex ">
                            <img class="w-[2rem] h-[2rem] rounded-2xl mr-4" src="${element2?.authors[0]?.profile_picture}" alt="thumbnail Image">
                            <h1 class="text-2xl font-bold">${element2.title}</h1>
                        </div>
                        <div class=" ml-12  opacity-70">
                            <span>${element2?.authors[0]?.profile_name}</span>
                            <span>${element2?.authors[0]?.verified?"<img class='w-[10%] inline' src='./image/ok.png' alt='Verified'>":""}</span>
                        </div>
                        <p class="ml-[3rem] opacity-60">${element2?.others?.views} views</p>
                    </div>
                </div>
            `
            playListSection.appendChild(div);
            }
            
        });
    }
   
}


const blog = document.getElementById('blog').addEventListener('click', function(){
    window.open('blog.html', "_blank");
})






  



