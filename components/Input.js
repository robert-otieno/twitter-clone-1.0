import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline"
import { useRef, useState } from "react"

const Input = () => {
    const [input, setInput] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    const [showEmojis, setShowEmojis] = useState(false)
    const filePickerRef = useRef(null)

    const addImageToPost = () => {}

    return (
        <div className={`border-b border-gray-300 dark:border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}>
            <img src="https://lh3.googleusercontent.com/ogw/ADea4I4MZArqyWJFe8u9tonXZHUknZZnburgKfDYynrq=s64-c-mo" alt="" className="h-11 w-11 rounded-full cursor-pointer" />
            <div className="w-full divide-y divide-gray-300 dark:divide-gray-700">
                <div className={``}>
                    <textarea className="bg-transparent outline-none dark:text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]" placeholder="What's happening?" onChange={(e) => setInput(e.target.value)} value={input} rows="2"/>

                    {selectedFile && (
                        <div className="relative">
                            <div className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer" onClick={() => setSelectedFile(null)}>
                                <XIcon className="text-white h-5"/>
                            </div>
                            <img src={selectedFile} alt="" className="rounded-2xl max-h-80 object-contain"/>
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-between pt-2 5">
                    <div className="flex items-center">
                        <div className="icon" onClick={() => filePickerRef.current.click()}>
                            <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
                            <input type="file" hidden onChange={addImageToPost} ref={filePickerRef} />
                        </div>
                        <div className="icon rotate-90">
                            <ChartBarIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>
                        <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                            <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>
                        <div className="icon">
                            <CalendarIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>
                        {/* {showEmojis && ()} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Input
