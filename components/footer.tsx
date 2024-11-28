import Link from "next/link"
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/academics">Academics</Link></li>
              <li><Link href="/student-life">Student Life</Link></li>
              <li><Link href="/news-events">News & Events</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p>123 School Street</p>
            <p>Kisowera, Uganda</p>
            <p>Phone: +256 123 456 789</p>
            <p>Email: info@kisowerasecondary.ac.ug</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and events.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-md text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-secondary text-secondary-foreground px-4 py-2 rounded-r-md hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Kisowera Secondary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

