const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About The Wind Hills</h3>
            <p className="text-sm">
              The Wind Hills Resort offers luxury and comfort in the heart of nature. Enjoy breathtaking views, exceptional service, and unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#rooms" className="hover:underline">Rooms</a></li>
              <li><a href="#booking" className="hover:underline">Booking</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>📍 123 Resort Lane, Hillside, Country</li>
              <li>📞 +1 234 567 890</li>
              <li>📧 contact@thewindhills.com</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-400 pt-4 text-center">
          <p className="text-sm">© 2025 The Wind Hills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
