import React from 'react'
import Link from "next/link";
import { GoLocation } from 'react-icons/go';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
const ContNavbar = () => {
    return (
        <div className='w-full fixed z-[1000] flex bg-[#010A12] px-5'>
            <div className='container py-2 text-white flex justify-between '>
                <div className='flex items-center gap-3 text-sm cursor-pointer'>
                    <span><GoLocation /></span>
                    <div className='nav'>
                        <span className='hover:text-[#40C2B4] transition-all duration-500'>
                        Ramsoft Systems Inc, 29777 Telegraph Road
                        </span>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 self-center items-center">
                        {icons.map(({ id, icon, path, colorIcon }) => {
                            return (
                                <a href={path} key={id}>
                                    <span
                                        style={{ color: colorIcon }}
                                        className="text-[30px] transition-all duration-300 hover:shadow-xl"
                                    >
                                        {icon}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContNavbar

const icons = [
    { id: 1, icon: <FaFacebookSquare />, path: "", colorIcon: "#0776E9" },
    { id: 2, icon: <FaInstagramSquare />, path: "", colorIcon: "#BA2F80" },
    { id: 3, icon: <FaLinkedin />, path: "", colorIcon: "#0073B1" },
    { id: 4, icon: <FaTwitterSquare />, path: "", colorIcon: "#1C9CEB" },
    { id: 5, icon: <FaYoutubeSquare />, path: "", colorIcon: "#F70000" },
];
