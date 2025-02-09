const Contact = () => {
    return (
      <div className="bg-black text-white min-h-screen flex justify-center items-center p-6">
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input type="email" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" placeholder="Your Email" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" placeholder="Your Message" rows="4" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded text-white font-semibold">Send Message</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  