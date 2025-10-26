export default function Footer(){
  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-xl font-bold text-green-800">Green Global</h3>
          <p className="text-gray-600 mt-2">Sustainable solutions and expert guidance to help organizations reduce their environmental impact.</p>
          <div className="text-sm text-gray-500 mt-4">© {new Date().getFullYear()} Green Global</div>
        </div>
        <div className="flex justify-end md:justify-start">
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-800">Company</h4>
              <ul className="mt-2 space-y-2">
                <li><a href="/about" className="hover:text-green-700">About</a></li>
                <li><a href="/services" className="hover:text-green-700">Services</a></li>
                <li><a href="/blog" className="hover:text-green-700">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Contact</h4>
              <ul className="mt-2 space-y-2">
                <li><a href="/contact" className="hover:text-green-700">Contact Us</a></li>
                <li><a href="mailto:hello@greenglobal.com" className="hover:text-green-700">hello@greenglobal.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
