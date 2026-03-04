"use client";
import Link from "next/link";
import { useCart } from "../../components/CartContext";

export default function CartPage() {
  const { items, updateQty, remove, totalPrice, clear, totalItems } = useCart();

  return (
    <div className="bg-cream min-h-screen py-24">
      <div className="container max-w-6xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-matte-black mb-12 flex items-center gap-4">
          Shopping Cart <span className="text-lg text-muted-gray font-sans font-normal mt-2">({totalItems} items)</span>
        </h1>

        {items.length === 0 ? (
          <div className="bg-white p-16 rounded shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-300">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </div>
            <h2 className="text-2xl font-playfair font-bold text-matte-black mb-4">Your cart is empty</h2>
            <p className="text-muted-gray mb-8 max-w-md mx-auto">Looks like you haven't added any premium fixtures to your cart yet.</p>
            <Link href="/products" className="bg-matte-black text-white px-8 py-3.5 tracking-widest text-xs uppercase font-semibold hover:bg-brushed-gold hover:text-white transition-colors duration-300 rounded-sm">
              Explore Collections
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-gray-100 bg-gray-50 text-xs font-semibold tracking-wider uppercase text-muted-gray">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Price</div>
                  <div className="col-span-1"></div>
                </div>

                <ul className="divide-y divide-gray-100">
                  {items.map((item) => (
                    <li key={item.id} className="p-6 flex flex-col md:grid md:grid-cols-12 gap-6 items-center group hover:bg-gray-50/50 transition-colors">
                      <div className="col-span-6 flex items-center gap-6 w-full">
                        <Link href={`/products/${item.id}`} className="shrink-0 w-24 h-24 bg-white border border-gray-100 p-2 rounded flex items-center justify-center">
                          <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                        </Link>
                        <div>
                          <Link href={`/products/${item.id}`} className="text-lg font-semibold text-matte-black hover:text-brushed-gold transition-colors block mb-1">
                            {item.title}
                          </Link>
                          <p className="text-sm text-gray-500 font-medium">{item.price}</p>
                        </div>
                      </div>

                      <div className="col-span-3 flex justify-center w-full md:w-auto">
                        <div className="flex items-center border border-gray-200 rounded-sm overflow-hidden bg-white">
                          <button
                            onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-matte-black transition-colors"
                          >-</button>
                          <span className="w-10 text-center text-sm font-semibold">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-matte-black transition-colors"
                          >+</button>
                        </div>
                      </div>

                      <div className="col-span-2 text-right font-semibold text-matte-black w-full md:w-auto self-center">
                        NRs. {(Number(item.price.replace(/[NRs\s.,]/g, "")) * item.qty).toLocaleString()}
                      </div>

                      <div className="col-span-1 flex justify-end w-full md:w-auto">
                        <button
                          onClick={() => remove(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                          title="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
                  <button onClick={clear} className="text-xs font-semibold uppercase tracking-wider text-muted-gray hover:text-red-500 transition-colors">
                    Clear Cart
                  </button>
                  <Link href="/products" className="text-xs font-semibold uppercase tracking-wider text-matte-black hover:text-brushed-gold transition-colors flex items-center gap-2">
                    <span className="text-lg leading-none">←</span> Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded shadow-sm border border-gray-100 p-8 sticky top-32">
                <h3 className="text-xl font-playfair font-bold text-matte-black mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6 border-b border-gray-100 pb-6">
                  <div className="flex justify-between text-muted-gray text-sm">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-medium text-matte-black">{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-muted-gray text-sm">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-muted-gray text-sm">
                    <span>Taxes</span>
                    <span>Included in price</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-8">
                  <span className="text-lg font-bold text-matte-black">Estimated Total</span>
                  <span className="text-2xl font-bold text-brushed-gold">{totalPrice}</span>
                </div>

                <button className="w-full bg-matte-black text-white py-4 tracking-widest text-xs uppercase font-semibold hover:bg-brushed-gold transition-colors duration-300 rounded-sm mb-4">
                  Proceed to Checkout
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-6 pt-6 border-t border-gray-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  <span>Secure SSL Checkout</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
