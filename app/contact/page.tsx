import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Location - New Shiwani Enterprises Nepal',
  description: 'Visit New Shiwani Enterprises in Balkot, Bhaktapur. We serve Kathmandu and Lalitpur with premium kitchen and bathroom fittings.',
};

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-matte-black mb-6 text-center">Visit Our Showroom</h1>
        <p className="text-center text-dark-slate max-w-2xl mx-auto mb-16 font-light text-lg">
          Experience our premium kitchen and bathroom collections in person.
          Centrally located in Balkot, Bhaktapur, we are easily accessible from Kathmandu and Lalitpur.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="bg-white p-10 rounded shadow-sm border border-gray-100 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-8 text-matte-black border-l-4 border-brushed-gold pl-4">Get In Touch</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm tracking-widest uppercase text-muted-gray mb-2 font-semibold">Address</h3>
                <p className="text-lg text-matte-black">
                  New Shiwani Enterprises<br />
                  Balkot, Suryabinayak<br />
                  Bhaktapur, Nepal<br />
                  <span className="text-sm italic text-gray-500 mt-1 block">(Serving Kathmandu Valley)</span>
                </p>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase text-muted-gray mb-2 font-semibold">Contact</h3>
                <p className="text-lg text-matte-black">
                  <span className="font-medium">Phone:</span> +977 1-XXXXXXX<br />
                  <span className="font-medium">Mobile:</span> +977 98XXXXXXXX<br />
                  <span className="font-medium">Email:</span> info@nse.com.np
                </p>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase text-muted-gray mb-2 font-semibold">Opening Hours</h3>
                <p className="text-lg text-matte-black">
                  Sunday - Friday: 10:00 AM - 6:00 PM<br />
                  Saturday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="h-[500px] w-full bg-gray-200 rounded overflow-hidden shadow-sm border border-gray-100 pb-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14132.8943797699!2d85.35245155985856!3d27.67175204481358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a1da2c069ad%3A0xe7819f7cc98ce4f5!2sBalkot%2C%20Suryabinayak%2044800!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="New Shiwani Enterprises Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
