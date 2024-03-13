
import { Avatar } from 'primereact/avatar';


const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-50 pl-72 right-0-0 w-full h-[10vh] dark:bg-gray-900
    bg-[#f0f4f8] flex items-center justify-end">
        <div className="flex items-center space-x-2 pr-4">
            <Avatar label="A" title='Admin' className="mr-2 cursor-pointer bg-blue-400 text-white" size="large"  shape='circle'/>
        </div>
    </div>
  )
}

export default Header