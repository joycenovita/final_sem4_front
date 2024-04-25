<script setup>
import { ref, onMounted } from "vue";
import axios from "../instanceAxios.js";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import Swal from "sweetalert2/dist/sweetalert2";

const router = useRouter();
const route = useRoute();

const nama_mood = ref("");
const keterangan = ref("");
const warna = ref("");
const moods = ref([]);

const isEditing = ref(false);
const isDisabled = ref(true);

const edit = () => {
  isEditing.value = !isEditing.value;
  console.log(isEditing)
  isDisabled.value = !isDisabled.value;
}

const editMood = async (e) => {
    e.preventDefault()
    await axios.post(`/api/mood/update/${route.params.id}`,
    {
      nama_mood: nama_mood.value,
      keterangan: keterangan.value,
      warna: warna.value,
    });
 
    Swal.fire("Successfully edited Mood");
    isDisabled.value = !isDisabled.value;
    isEditing.value = !isEditing.value;
    moodDetail();

};

const moodDetail = async () => {
    const response = await axios.get(`/api/mood/${route.params.id}`);
    nama_mood.value = response.data.data.nama_mood;
    keterangan.value = response.data.data.keterangan;
    warna.value = response.data.data.warna;
    moods.value = response.data.data;
}

onMounted(moodDetail)

const deleteMood = async (e) => {
  e.preventDefault()
  if(confirm("Are you sure you want to delete this Mood?")) {
    await axios.delete(`/api/mood/delete/${route.params.id}`);
    Swal.fire("Successfully deleted Mood");
    router.push("/mood");
  }
}

</script>

<template>
    <div class="home">
      <div class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg-border-slate-900/10 bg-emerald-700 ">
        <div class="max-w-8xl mx-auto">
          <div class="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0">
            <div class="body relative flex items-center">
              <RouterLink to="/home" class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto hover:bg-inherit hover:-translate-y-1 duration-200">
                <button type="button">
                  <svg width="135" height="20" viewBox="0 0 135 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9977 15.616C20.9977 16.792 21.8137 17.08 21.8137 17.896C21.8137 17.944 21.8137 17.92 21.8137 17.944C21.8137 18.832 20.3017 19.072 18.5497 19.072C16.7977 19.072 15.3097 18.832 15.3097 17.944C15.3097 17.92 15.3097 17.944 15.3097 17.896C15.3097 17.08 16.1017 16.792 16.1017 15.616V11.824C16.1017 10.192 15.7657 9.592 14.9737 9.592C14.2537 9.592 13.7977 10.216 13.7977 11.752V15.616C13.7977 16.792 14.6137 17.08 14.6137 17.896C14.6137 17.944 14.6137 17.92 14.6137 17.944C14.6137 18.832 13.1017 19.072 11.3497 19.072C9.59769 19.072 8.10969 18.832 8.10969 17.944C8.10969 17.92 8.10969 17.944 8.10969 17.896C8.10969 17.08 8.92569 16.792 8.92569 15.616V11.824C8.92569 10.192 8.56569 9.592 7.77369 9.592C7.07769 9.592 6.62169 10.192 6.59769 11.656V15.616C6.59769 16.792 7.41369 17.08 7.41369 17.896C7.41369 17.944 7.41369 17.92 7.41369 17.944C7.41369 18.832 5.90169 19.072 4.14969 19.072C2.42169 19.072 0.909688 18.832 0.909688 17.944C0.909688 17.92 0.909688 17.944 0.909688 17.896C0.909688 17.08 1.72569 16.792 1.72569 15.616V12.136C1.72569 10.984 0.909688 10.696 0.909688 9.88C0.909688 9.832 0.909688 9.856 0.909688 9.832C0.909688 8.944 1.84569 8.32 3.69369 7.624C5.27769 7.048 6.28569 7.024 6.28569 8.392C6.28569 8.584 6.28569 8.848 6.28569 9.088C6.83769 8.008 7.94169 7.288 9.16569 7.24C11.3017 7.144 12.6457 8.08 13.3177 9.496C13.7737 8.176 14.9737 7.288 16.3417 7.24C19.5337 7.096 20.9977 9.232 20.9977 11.896V15.616ZM32.0381 15.592C32.6141 15.352 32.9981 15.136 33.3581 15.376C34.3661 16.024 32.7581 19.36 28.7501 19.24C25.4861 19.168 22.6541 17.224 22.6541 13.24C22.6541 9.904 25.1021 7.288 28.4381 7.24C31.7261 7.192 33.6701 9.328 33.8621 11.464C34.0061 13.168 33.5021 13.576 32.3981 13.576H27.3341C27.7901 15.976 30.4301 16.192 32.0381 15.592ZM28.7981 8.992C27.7421 8.992 27.1181 10.024 27.1181 11.848C27.1181 11.848 28.8221 11.848 29.3021 11.848C29.7581 11.848 30.0221 11.68 30.0701 11.248C30.1661 10.456 30.1661 8.992 28.7981 8.992ZM48.1878 15.616C48.1878 16.792 49.0038 17.08 49.0038 17.896C49.0038 17.944 49.0038 17.92 49.0038 17.944C49.0038 18.832 47.4918 19.072 45.7398 19.072C43.9878 19.072 42.4998 18.832 42.4998 17.944C42.4998 17.92 42.4998 17.944 42.4998 17.896C42.4998 17.08 43.3158 16.792 43.3158 15.616V11.824C43.3158 10.192 42.8358 9.592 41.9958 9.592C41.2758 9.592 40.6998 10.216 40.6758 11.68V15.616C40.6758 16.792 41.4918 17.08 41.4918 17.896C41.4918 17.944 41.4918 17.92 41.4918 17.944C41.4918 18.832 39.9798 19.072 38.2278 19.072C36.4758 19.072 34.9878 18.832 34.9878 17.944C34.9878 17.92 34.9878 17.944 34.9878 17.896C34.9878 17.08 35.8038 16.792 35.8038 15.616V12.136C35.8038 10.984 34.9878 10.696 34.9878 9.88C34.9878 9.832 34.9878 9.856 34.9878 9.832C34.9878 8.944 35.9238 8.32 37.7718 7.624C39.3558 7.048 40.3638 7.024 40.3638 8.392C40.3638 8.608 40.3638 8.848 40.3638 9.112C40.9158 8.008 42.0918 7.288 43.3638 7.24C46.6278 7.096 48.1878 9.232 48.1878 11.896V15.616ZM58.7752 15.376C59.8072 15.88 58.4632 19.24 55.1032 19.24C52.5592 19.24 50.8552 17.44 50.8552 14.656V9.544C50.6152 9.544 50.4472 9.544 50.3512 9.544C49.7752 9.544 49.2472 9.208 49.2472 8.536C49.2472 7.624 50.8072 5.752 52.8472 4.576C54.3112 3.736 55.7272 3.784 55.7272 5.152C55.7272 5.68 55.7272 6.832 55.7272 7.624C56.5912 7.624 57.3112 7.624 57.5032 7.624C58.2472 7.624 58.6072 8.032 58.6072 8.584C58.6072 9.136 58.2472 9.544 57.5032 9.544C57.3112 9.544 56.5912 9.544 55.7272 9.544V14.08C55.7272 15.904 56.7112 15.856 57.4552 15.592C58.0312 15.352 58.4392 15.184 58.7752 15.376ZM71.5854 14.704C71.5854 15.856 72.7854 16.144 72.7854 16.96C72.7854 17.008 72.7854 16.984 72.7854 17.008C72.7854 17.896 72.1614 18.76 70.4334 19.144C68.9934 19.456 67.7694 19.096 67.4574 17.896C67.4094 17.752 67.3854 17.608 67.3614 17.464C66.8574 18.424 65.8734 19.24 64.2174 19.24C62.2014 19.24 60.0654 18.376 59.9934 16.096C59.8734 13.072 62.1774 12.136 64.7454 12.136C65.4654 12.136 66.1374 12.136 66.6894 12.136V11.152C66.6894 9.376 66.5454 8.776 65.9214 8.68C64.2414 8.464 65.3694 12.304 62.2014 11.704C61.1214 11.512 60.6894 10 61.5294 8.824C62.4174 7.6 64.4094 7.24 65.9934 7.24C68.2494 7.24 71.5854 8.296 71.5854 11.728V14.704ZM65.6574 16.96C66.3054 16.96 66.6894 16.384 66.6894 14.824V13.456C66.5454 13.456 66.3774 13.456 66.2094 13.456C65.1054 13.456 64.5534 14.248 64.5534 15.544C64.5534 16.648 65.0814 16.96 65.6574 16.96ZM78.9492 15.616C78.9492 16.792 79.7413 17.08 79.7413 17.896C79.7413 17.944 79.7413 17.92 79.7413 17.944C79.7413 18.832 78.2533 19.072 76.5013 19.072C74.7493 19.072 73.2613 18.832 73.2613 17.944C73.2613 17.92 73.2613 17.944 73.2613 17.896C73.2613 17.08 74.0533 16.792 74.0533 15.616V5.728C74.0533 4.576 73.2613 4.288 73.2613 3.472C73.2613 3.424 73.2613 3.448 73.2613 3.424C73.2613 2.536 74.1973 1.912 76.0453 1.216C77.6053 0.639999 78.9492 0.592 78.9492 1.984C78.9492 2.104 78.9492 15.616 78.9492 15.616ZM101.416 7.24C102.4 7.24 103.432 7.552 103.432 8.32C103.432 8.344 103.432 8.32 103.432 8.344C103.432 9.16 102.208 9.688 101.776 10.816L99.3521 17.344C98.9201 18.496 98.7281 19.072 97.4081 19.072C96.1361 19.072 95.7281 18.76 95.3681 17.704L94.0241 13.696L92.6081 17.344C92.1761 18.496 92.0321 19.072 90.6881 19.072C89.4161 19.072 88.9841 18.736 88.5521 17.704L85.8161 11.128C85.3601 10 84.3041 9.568 84.3041 8.512C84.3041 8.464 84.3041 8.488 84.3041 8.464C84.3041 7.552 85.3601 7.24 87.5201 7.24C89.2721 7.24 90.9041 7.336 90.9041 8.224C90.9041 8.272 90.9041 8.224 90.9041 8.272C90.9041 9.088 90.1601 9.472 90.5201 10.552L91.7681 14.224L93.7841 8.32C94.0241 7.624 94.2161 7.24 95.2721 7.24C96.3521 7.24 96.5441 7.528 96.8561 8.584L98.5361 13.984L99.5921 10.72C100.048 9.328 99.2561 9.184 99.2561 8.416C99.2561 8.392 99.2561 8.416 99.2561 8.392C99.2561 7.552 100.36 7.24 101.416 7.24ZM112.593 15.592C113.169 15.352 113.553 15.136 113.913 15.376C114.921 16.024 113.313 19.36 109.305 19.24C106.041 19.168 103.209 17.224 103.209 13.24C103.209 9.904 105.657 7.288 108.993 7.24C112.281 7.192 114.225 9.328 114.417 11.464C114.561 13.168 114.057 13.576 112.953 13.576H107.889C108.345 15.976 110.985 16.192 112.593 15.592ZM109.353 8.992C108.297 8.992 107.673 10.024 107.673 11.848C107.673 11.848 109.377 11.848 109.857 11.848C110.313 11.848 110.577 11.68 110.625 11.248C110.721 10.456 110.721 8.992 109.353 8.992ZM121.23 15.616C121.23 16.792 122.023 17.08 122.023 17.896C122.023 17.944 122.023 17.92 122.023 17.944C122.023 18.832 120.535 19.072 118.783 19.072C117.031 19.072 115.543 18.832 115.543 17.944C115.543 17.92 115.543 17.944 115.543 17.896C115.543 17.08 116.335 16.792 116.335 15.616V5.728C116.335 4.576 115.543 4.288 115.543 3.472C115.543 3.424 115.543 3.448 115.543 3.424C115.543 2.536 116.479 1.912 118.327 1.216C119.887 0.639999 121.23 0.592 121.23 1.984C121.23 2.104 121.23 15.616 121.23 15.616ZM128.543 15.616C128.543 16.792 129.335 17.08 129.335 17.896C129.335 17.944 129.335 17.92 129.335 17.944C129.335 18.832 127.847 19.072 126.095 19.072C124.343 19.072 122.855 18.832 122.855 17.944C122.855 17.92 122.855 17.944 122.855 17.896C122.855 17.08 123.647 16.792 123.647 15.616V5.728C123.647 4.576 122.855 4.288 122.855 3.472C122.855 3.424 122.855 3.448 122.855 3.424C122.855 2.536 123.791 1.912 125.639 1.216C127.199 0.639999 128.543 0.592 128.543 1.984C128.543 2.104 128.543 15.616 128.543 15.616ZM132.525 14.968C133.725 14.968 134.733 15.76 134.733 17.104C134.733 18.472 133.725 19.24 132.525 19.24C131.325 19.24 130.293 18.472 130.293 17.104C130.293 15.76 131.325 14.968 132.525 14.968Z" fill="#ffffff"/>
                  </svg>
                </button>
              </RouterLink>
              <RouterLink to="/journal" class="hover:bg-inherit">
                <button class="ml-3 text-xs leading-5 font-medium text-emerald-700 bg-neutral-100 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-neutral-200 hover:-translate-y-1 duration-200">
                  <strong class="font-semibold">Start making your journal today!</strong>
                </button>
              </RouterLink>
              <!-- Nav -->
              <div class="relative hidden lg:flex items-center ml-auto">
                <nav class="text-sm leading-6 fonr-semibold text-white">
                  <ul class="flex space-x-8">
                    <li>
                      <RouterLink to="/profile">
                        <p class="text-white">Profile</p>
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/journal">
                        <p class="text-white">Journal</p>
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/mood">
                        <p class="text-white">Mood</p>
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/resources">
                        <p class="text-white">Resources</p>
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/challenge">
                        <p class="text-white">Challenge</p>
                      </RouterLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <!-- Logout -->
              <button class="ml-3 text-xs leading-5 font-medium text-emerald-700 bg-neutral-100 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-neutral-200">
                <RouterLink class="hover:bg-inherit" to="/sign-in">
                  <strong class="text-amber-500 font-semibold">Logout</strong>
                </RouterLink>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="max-w-8xl mx-auto px-4 mt-6">
          <div class="items-center">
            <div v-if="!isEditing">
                <h1 class="inline-block text-4xl font-semibold text-emerald-700 tracking-tight">{{ nama_mood }}</h1>
            </div>

            <div>
              <RouterLink to="/mood">
                <Button class="bg-emerald-700 px-3 py-2 mt-5 rounded-md hover:-translate-y-1 duration-200">
                    <p class="text-white font-semibold" >Back to Mood</p>
                </Button>
              </RouterLink>
            </div>

            <form class="w-full max-w-lg mt-10">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Mood Title
                        </label>
                        <input :disabled="isDisabled" v-model="nama_mood" class="appearance-none block w-full bg-gray-200-50  text-gray-700 border border-emerald-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"id="grid-first-name" type="text" placeholder="Sad">
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Mood Color
                        </label>
                        <input :disabled="isDisabled" v-model="warna" class="appearance-none block w-full bg-gray-200-50  text-gray-700 border border-emerald-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"id="grid-first-name" type="text" placeholder="#ffffff">
                        <p class="text-xs text-gray-200-50">Color format: Hex e.g. #032ffa </p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Description
                        </label>
                        <textarea :disabled="isDisabled" v-model="keterangan" class="resize rounded-sm appearance-none block w-full bg-gray-200-50 text-gray-700 border border-emerald-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="I am feeling empty" ></textarea>
                        <p class="text-xs text-gray-200-50">Drag the corner of the content box to resize it.</p>
                    </div>
                </div>
                <div class="md:w-2/3">
                    <button v-if="!isEditing" @click="edit" class="shadow bg-emerald-700 hover:bg-emerald-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        Edit
                    </button>
                    <button v-else @click="editMood" class="shadow bg-emerald-700 hover:bg-emerald-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        Save
                    </button>
                    <button @click="deleteMood" class="shadow bg-white border border-emerald-700 hover:bg-slate-50; focus:shadow-outline focus:outline-none text-amber-500 font-bold py-2 px-4 ml-3 rounded">
                      Delete
                    </button>
                </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .home {
      min-height: 100vh;
      width: 100%;
    }
    h1 {
        font-family: 'MADE Gentle', sans-serif;                          
    }
  }
  </style>