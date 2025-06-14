import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <Link href="/" className="font-bold text-xl">
                    Questify
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/games">Games</Link>
                    </li>
                    <li>
                        <Link href="/achievements">Achievements</Link>
                    </li>
                    <li>
                        <Link href="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;