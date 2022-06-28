export default function TwTime() {
  return (
    <div class="flex h-[100vh] w-full flex-row items-center justify-center space-x-8 bg-pink-50">
      <div class="flex h-[520px] w-3/12 flex-col items-start justify-center space-y-7 bg-white py-8">
        <div class="pl-5 text-left text-3xl font-bold">Weather</div>
        <div class="mx-auto flex w-4/5 flex-row items-center justify-evenly rounded-xl border-2 border-b-4 border-solid border-black bg-white">
          <div class="flex w-1/2 flex-col items-center justify-center py-3">
            <span class="font-semibold">Casius</span>
            <span class="text-xs">Mars, 12AM</span>
          </div>
          <div class="flex w-1/2 flex-row items-center justify-center space-x-1">
            <span class="text-3xl">🌧</span>
            <span class="text-2xl">85&deg;</span>
          </div>
        </div>
        <div class="mx-auto flex w-4/5 flex-row items-center justify-evenly rounded-xl border-2 border-b-4 border-solid border-black bg-yellow-400">
          <div class="flex w-1/2 flex-col items-center justify-center py-3">
            <span class="font-semibold">Dlacria</span>
            <span class="text-xs">Mars, 12AM</span>
          </div>
          <div class="flex w-1/2 flex-row items-center justify-center space-x-1">
            <span class="text-3xl">🌧</span>
            <span class="text-2xl">85&deg;</span>
          </div>
        </div>
        <div class="mx-auto flex w-4/5 flex-row items-center justify-evenly rounded-xl border-2 border-b-4 border-solid border-black bg-teal-400">
          <div class="flex w-1/2 flex-col items-center justify-center py-3">
            <span class="font-semibold">New York</span>
            <span class="text-xs">USA, 12AM</span>
          </div>
          <div class="flex w-1/2 flex-row items-center justify-center space-x-1">
            <span class="text-3xl">☀</span>
            <span class="text-2xl">85&deg;</span>
          </div>
        </div>
        <div class="mx-auto flex w-4/5 flex-row items-center justify-evenly rounded-xl border-2 border-b-4 border-solid border-black bg-red-400">
          <div class="flex w-1/2 flex-col items-center justify-center py-3">
            <span class="font-semibold">Zomato</span>
            <span class="text-xs">India, 12AM</span>
          </div>
          <div class="flex w-1/2 flex-row items-center justify-center space-x-1">
            <span class="text-3xl">🌨</span>
            <span class="text-2xl">30&deg;</span>
          </div>
        </div>
        <div class="mx-auto rounded-full border-2 border-b-4 border-black">
          <svg
            class="h-10 w-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </div>
      <div class="flex h-[520px] w-3/12 flex-col items-start justify-center space-y-3 bg-white py-8">
        <div class="ml-5 rounded-full border-2 border-b-4 border-black">
          <svg
            class="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div class="w-full space-y-2">
          <div class="flex flex-col items-center justify-center py-3">
            <span class="text-sm font-bold text-gray-500">SIMPLE TAG</span>
            <span class="text-center text-3xl font-extrabold">
              {" "}
              Work with best designers{" "}
            </span>
          </div>
          <div class="flex flex-row flex-wrap items-center justify-center">
            <div class="m-2 flex h-28 w-24 items-center justify-center rounded-xl border-2 border-black bg-yellow-400">
              <svg
                class="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div class="m-2 flex h-28 w-24 items-center justify-center rounded-xl border-2 border-black bg-teal-400">
              <svg
                class="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div class="m-2 flex h-28 w-24 items-center justify-center rounded-xl border-2 border-black bg-pink-400">
              <svg
                class="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div class="m-2 flex h-28 w-24 items-center justify-center rounded-xl border-2 border-black bg-red-400">
              <svg
                class="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="mx-auto w-52 rounded-lg bg-blue-700 py-2 text-center text-xl font-extrabold text-white">
            Let's get it done
          </div>
        </div>
      </div>
      <div class="flex h-[520px] w-3/12 flex-col items-start justify-center space-y-3 bg-yellow-500 py-8">
        <div class="relative flex w-full flex-row items-center">
          <div class="absolute left-5 rounded-full border-2 border-b-4 border-black">
            <svg
              class="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div class="w-full text-center text-xl font-extrabold">Friends</div>
        </div>
        <div class="flex w-full flex-row items-center justify-center py-2">
          <div class="relative flex flex-row items-center">
            <input
              placeholder="Search with love"
              class="rounded-lg border-2 border-b-4 border-black px-3 py-1 placeholder:text-left placeholder:text-lg"
            />
            <span class="absolute right-0 pr-3">
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div class="flex w-full flex-col items-center justify-center space-y-3">
          <div class="relative flex w-11/12 flex-row items-center justify-start space-x-2 rounded-lg border-2 border-black bg-white py-2 px-2">
            <img
              src="https://picsum.photos/200?random=1"
              class="h-10 w-10 rounded-full border-2 border-black bg-red-500"
            />
            <div class="flex flex-col">
              <span class="font-bold">Bill Rizer</span>
              <span class="-mt-1 text-[8px] text-gray-500">
                Planet Designer
              </span>
            </div>
            <div class="absolute right-2 rounded-md border-2 border-b-4 border-black bg-yellow-500 px-2 text-sm font-medium">
              Invite
            </div>
          </div>
          <div class="relative flex w-11/12 flex-row items-center justify-start space-x-2 rounded-lg border-2 border-black bg-white py-2 px-2">
            <img
              src="https://picsum.photos/200?random=2"
              class="h-10 w-10 rounded-full border-2 border-black bg-red-500"
            />
            <div class="flex flex-col">
              <span class="font-bold">Genbei Yagy</span>
              <span class="-mt-1 text-[8px] text-gray-500">
                Planet Designer
              </span>
            </div>
            <div class="absolute right-2 rounded-md border-2 border-b-4 border-black bg-yellow-500 px-2 text-sm font-medium">
              Invite
            </div>
          </div>
          <div class="relative flex w-11/12 flex-row items-center justify-start space-x-2 rounded-lg border-2 border-black bg-white py-2 px-2">
            <img
              src="https://picsum.photos/200?random=3"
              class="h-10 w-10 rounded-full border-2 border-black bg-red-500"
            />
            <div class="flex flex-col">
              <span class="font-bold">Lancy Neo</span>
              <span class="-mt-1 text-[8px] text-gray-500">Rogue Corp</span>
            </div>
            <div class="absolute right-2 rounded-md border-2 border-b-4 border-black bg-gray-900 px-2 text-sm font-medium text-white">
              Invited
            </div>
          </div>
          <div class="relative flex w-11/12 flex-row items-center justify-start space-x-2 rounded-lg border-2 border-black bg-white py-2 px-2">
            <img
              src="https://picsum.photos/200?random=4"
              class="h-10 w-10 rounded-full border-2 border-black bg-red-500"
            />
            <div class="flex flex-col">
              <span class="font-bold">Bill Radar</span>
              <span class="-mt-1 text-[8px] text-gray-500">Head Hunter</span>
            </div>
            <div class="absolute right-2 rounded-md border-2 border-b-4 border-black bg-yellow-500 px-2 text-sm font-medium">
              Invite
            </div>
          </div>
          <div class="relative flex w-11/12 flex-row items-center justify-start space-x-2 rounded-lg border-2 border-black bg-white py-2 px-2">
            <img
              src="https://picsum.photos/200?random=5"
              class="h-10 w-10 rounded-full border-2 border-black bg-red-500"
            />
            <div class="flex flex-col">
              <span class="font-bold">Konami</span>
              <span class="-mt-1 text-[8px] text-gray-500">Xenon Creator</span>
            </div>
            <div class="absolute right-2 rounded-md border-2 border-b-4 border-black bg-yellow-500 px-2 text-sm font-medium">
              Invite
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
