import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <>
      <div className="dark:text-red-500 text-blue-500">test dark mode</div>

      <ModeToggle />
    </>
  )
}

export default App
