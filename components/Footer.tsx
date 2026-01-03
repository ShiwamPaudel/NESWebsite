export default function Footer() {
  return (
    <footer className="py-8 mt-12 bg-brand-navy text-white">
      <div className="container flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="font-semibold">New Shiwani Enterprises</p>
          <p className="text-sm text-gray-200">Quality kitchen and bathroom fittings since 2025</p>
          <p className="mt-3 text-sm">+977 984 346 8715</p>
          <p className="text-sm">info@newshiwanienterprises.com</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-200 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-200 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-200 hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
