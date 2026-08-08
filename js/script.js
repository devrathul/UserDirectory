let userdirectoryContainer_EL = document.getElementById('userdirectoryContainer');
let userDirectoryLoadder_El = document.getElementById('userDirectoryLoadder');
let refreshUser_El = document.getElementById("refreshUser");
let useraddress_details_El = document.getElementById('useraddress_details');
let dataUserData = "";

refreshUser_El.addEventListener('click', () => {
    getUserDirectory();
})

const getUserDirectory = async () => {
    try {
        userdirectoryContainer_EL.innerHTML = "";
        userDirectoryLoadder_El.classList.remove("hidden")
        userDirectoryLoadder_El.classList.add("flex");
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
            setTimeout(async () => {
                dataUserData = await response.json();
                userDirectoryLoadder_El.classList.remove("flex");
                userDirectoryLoadder_El.classList.add("hidden");
                displayUserDetails(dataUserData);
            }, 1000);

        }

    } catch (error) {
        alert("Some think when to wrong");
    }
}

const displayUserDetails = (data) => {

    for (let index = 0; index < data.length; index++) {
        userdirectoryContainer_EL.innerHTML += `<div class="flex flex-col gap-4 border border-gray-300 rounded-lg p-6 shadow-2xl">
                    <div class="flex items-center gap-4">
                        <span class="userimg rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1c398e" class="size-[50px] rounded-full bg-[#eee] p-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </span>
                        <span class="flex flex-col items-start justify-center">
                            <h2 class="font-bold text-[1.6rem]" id="ud_name">${data[index].name}</h2>
                            <h3 class="font-semibold text-[1.2rem]" id="ud_username">${data[index].username}</h3>
                        </span>
                    </div>
                    <div class="border-b border-gray-300 leading-[1px]">&nbsp</div>
                    <ul class="grid grid-row-3 gap-3">
                        <li class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#1c398e" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span> ${data[index].email} </span>
                        </li>
                        <li class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#1c398e" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <span> ${data[index].phone}</span>
                        </li>
                        <li class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#1c398e" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                            </svg>
                            <span>${data[index].company.name}</span>
                        </li>
                    </ul>
                    <button type="button" id="openModal" onclick="showModel(${index})"
                        class="w-full p-3 bg-blue-900 text-white rounded-lg flex gap-1 justify-center items-center">
                        <span>View more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </button>
                    
                </div>`
    }
}


const closeBtn = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelBtn");
const overlay = document.getElementById("modalOverlay");
const dialog = overlay.querySelector("[role='dialog']");

function showModel(index) {
    useraddress_details_El.innerHTML = `<ul class="p-4 rounded-lg flex flex-col gap-2">
                        <li>${dataUserData[index].address.street}, ${dataUserData[index].address.suite}, ${dataUserData[index].address.city}, ${dataUserData[index].address.zipcode}</li>
                        <li>${dataUserData[index].website}</li>
                        <li>${dataUserData[index].company.bs}</li>
                        <li>${dataUserData[index].company.catchPhrase}</li>
                    </ul>`
    overlay.classList.remove("hidden");
    overlay.classList.add("flex")
    document.body.style.overflow = "hidden";
    dialog.focus();
}

function closeModal() {
    overlay.classList.add("hidden");
    overlay.classList.remove("flex")
    document.body.style.overflow = "";
}

closeBtn.onclick = cancelBtn.onclick = closeModal;

overlay.onclick = (e) => {
    if (e.target === overlay) closeModal();
};

getUserDirectory();