import Link from "next/link";

export function Navigation() {
    return (
        <div className="md:flex pt-12 hidden justify-between">
            <div className="w-[40%] flex text-md pl-8 gap-x-8">
                <Link href={'#'} className="hover:text-[#b42322]">Home</Link>
                <Link href={'/about'} className="hover:text-[#b42322]">About</Link>
                <Link href={'/services'} className="hover:text-[#b42322]">Services</Link>
                <Link href={'/contact-us'} className="hover:text-[#b42322]">Contact Us</Link>
            </div>
            <button className="bg-[#b42322] text-black py-3 px-12">
                GET A QUOTE
            </button>
        </div>
    )
}