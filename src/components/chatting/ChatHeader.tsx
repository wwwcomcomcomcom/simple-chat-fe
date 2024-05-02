export default function ChatHeader() {
  return <header className="sticky top-0 z-10 bg-white shadow-md dark:bg-gray-800">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <div className="mr-4 rounded-full">
          <img src="/placeholder.svg" alt="Profile" className="h-10 w-10 rounded-full"/>
        </div>
        <div>
          <h1 className="text-lg font-medium text-gray-900 dark:text-white">John Doe</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
        </div>
      </div>
      <button
        type="button"
        className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
      >
        Logout
      </button>
    </div>
  </header>
}