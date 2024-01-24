export default function Navbar () {

    return (
        <nav className="max-md:hidden">
            <ul className="flex  justify-center gap-6 h-16 items-center max-md:flex-col">
              <li className="text-grayish-blue cursor-pointer hover:border-b-4 h-16 flex items-center">Home</li>
              <li className="text-grayish-blue cursor-pointer h-16 flex items-center">About</li>
              <li className="text-grayish-blue cursor-pointer h-16 flex items-center">Contact</li>
              <li className="text-grayish-blue cursor-pointer h-16 flex items-center">Blog</li>
              <li className="text-grayish-blue cursor-pointer h-16 flex items-center">Careers</li>
            </ul>
        </nav>
    )
}