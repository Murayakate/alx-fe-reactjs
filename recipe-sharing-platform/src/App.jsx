
import './App.css'

function App() {
  
  return (
    <>
     <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        {/* You can optionally add an icon or image here */}
      </div>
      <div>
        {/* The 'text-xl font-medium text-black' classes are the test */}
        <div className="text-xl font-medium text-black">
          Tailwind CSS is Working!
        </div>
        <p className="text-gray-500">If this text is styled, Tailwind works.</p>
      </div>
    </div>
    </>
  )
}

export default App
