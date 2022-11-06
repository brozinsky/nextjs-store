//Import State
import Link from "next/link";
import { useCartContext } from "contexts/CartContext";
import Item from "@/elements/cart/Item";

// import getStripe from "@/lib/getStripe";

const CartDrawer = () => {
  const { cartItems, totalPrice } =
    useCartContext();

  //Payment
  // const handleCheckout = async () => {
  //   const stripePromise = await getStripe();
  //   const response = await fetch("/api/stripe", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(cartItems),
  //   });
  //   const data = await response.json();
  //   await stripePromise.redirectToCheckout({ sessionId: data.id });
  // };

  return (
    <div className="fixed top-0 right-0 z-10 flex flex-col h-full max-w-3xl p-6 space-y-4 bg-white shadow-md sm:p-10 dark:bg-gray-50 dark:text-gray-100">
      <h2 className="text-xl font-semibold">Your cart</h2>
      <ul className="flex flex-col divide-y divide-gray-700">
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Item
                key={item.slug}
                title={item.title}
                price={item.price}
                url={item.image.data.attributes.formats.small.url}
              />
              //    <div key={item.slug}>
              //      <img src={item.image.data.attributes.formats.small.url} />
              //      <div>
              //        <h3>{item.title}</h3>
              //        <h3>{item.price}$</h3>
              //        <div>
              //          <span>Quantity</span>
              //          <button onClick={() => onRemove(item)}>-</button>
              //          <p>{item.quantity}</p>
              //          <button onClick={() => onAdd(item, 1)}>+</button>
              //        </div>
              //      </div>
              //    </div>
            );
          })}
        {/* <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none dark:border-transparent sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold leading-snug sm:pr-8">Polaroid camera</h3>
							<p className="text-sm dark:text-gray-400">Classic</p>
						</div>
						<div className="text-right">
							<p className="text-lg font-semibold">59.99€</p>
							<p className="text-sm line-through dark:text-gray-600">75.50€</p>
						</div>
					</div>
					<div className="flex text-sm divide-x">
						<button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
								<rect width="32" height="200" x="168" y="216"></rect>
								<rect width="32" height="200" x="240" y="216"></rect>
								<rect width="32" height="200" x="312" y="216"></rect>
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
							</svg>
							<span>Remove</span>
						</button>
					</div>
				</div>
			</div>
		</li>
		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none dark:border-transparent sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="Replica headphones" />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold leading-snug sm:pr-8">Replica headphones</h3>
							<p className="text-sm dark:text-gray-400">White</p>
						</div>
						<div className="text-right">
							<p className="text-lg font-semibold">99.95€</p>
							<p className="text-sm line-through dark:text-gray-600">150€</p>
						</div>
					</div>
					<div className="flex text-sm divide-x">
						<button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
								<rect width="32" height="200" x="168" y="216"></rect>
								<rect width="32" height="200" x="240" y="216"></rect>
								<rect width="32" height="200" x="312" y="216"></rect>
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
							</svg>
							<span>Remove</span>
						</button>
					</div>
				</div>
			</div>
		</li> */}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold"> ${totalPrice}</span>
        </p>
        <p className="text-sm dark:text-gray-400">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Link href={`/`}>
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only"> to shop</span>
          </button>
        </Link>
        <Link href={`/cart`}>
          <button className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
            <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
          </button>
        </Link>
      </div>
    </div>

    // <div
    //   onClick={() => setShowCart(false)}
    // >
    //   <div onClick={(e) => e.stopPropagation()}>
    //     {cartItems.length < 1 && (
    //       <div>
    //         <h2>Your cart is empty</h2>
    //       </div>
    //     )}
    //     {cartItems.length >= 1 &&
    //       cartItems.map((item) => {
    //         return (
    //           <div key={item.slug}>
    //             <img src={item.image.data.attributes.formats.small.url} />
    //             <div>
    //               <h3>{item.title}</h3>
    //               <h3>{item.price}$</h3>
    //               <div>
    //                 <span>Quantity</span>
    //                 <button onClick={() => onRemove(item)}>-</button>
    //                 <p>{item.quantity}</p>
    //                 <button onClick={() => onAdd(item, 1)}>+</button>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     <div layout>
    //       {cartItems.length >= 1 && (
    //         <div>
    //           <h3>Subtotal ${totalPrice}</h3>
    //           <button>Purchase</button>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default CartDrawer;
