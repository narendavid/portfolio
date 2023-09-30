"use client"
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Moon from './icons/Moon';
import Sun from './icons/Sun';
import Link from 'next/link';

const Navbar = () => {

	const { theme, setTheme } = useTheme()
	const [isClient, setIsClient] = useState(false)

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const themeDark = () => {
		setTheme('dark');
	};

	const themeLight = () => {
		setTheme('light');
	};

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<header>
			<nav className="shadow-lg backdrop-blur-lg fixed w-full z-20 top-0 left-0">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<Link href="#" className="flex items-center">
						<h2 className="text-2xl scale-110 sm:scale-100 sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-info to-info">
							{'<Narendev/>'}
						</h2>
					</Link>
					<div className="flex md:order-2">
						{
							isClient &&
							<button>
								{
									theme === 'dark' &&
									<Sun onClick={themeLight} />
								}
								{
									theme === 'light' &&
									<Moon onClick={themeDark} />
								}
							</button>
						}

						<button
							type="button"
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-sticky"
							aria-expanded={isMenuOpen}
							onClick={toggleMenu}
						>
							<span className="sr-only">Toggle menu</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						</button>
					</div>
					<div
						className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'
							}`}
						id="navbar-sticky"
					>
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
							<li>
								<Link
									href="#home"
									className="block py-2 pl-3 pr-4 text-bgDark hover:text-info dark:md:hover:text-info md:p-0 dark:text-white dark:hover:text-white"
									onClick={closeMenu}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="#about"
									className="block py-2 pl-3 pr-4 text-bgDark hover:text-info dark:md:hover:text-info md:p-0 dark:text-white dark:hover:text-white"
									onClick={closeMenu}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="#work"
									className="block py-2 pl-3 pr-4 text-bgDark hover:text-info dark:md:hover:text-info md:p-0 dark:text-white dark:hover:text-white"
									onClick={closeMenu}
								>
									Work
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="block py-2 pl-3 pr-4 text-bgDark hover:text-info dark:md:hover:text-info md:p-0 dark:text-white dark:hover:text-white"
									onClick={closeMenu}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
