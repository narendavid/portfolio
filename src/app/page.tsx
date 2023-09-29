import About from "@/components/About"
import Contact from "@/components/Contact"
import Work from "@/components/Work"
import Home from "@/components/Home"

const App = () => {
	return (
		<main className="w-full">
			<Home />
			<About />
			<Work />
			<Contact />
		</main>
	)
}

export default App