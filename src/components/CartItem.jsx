import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="flex items-center justify-between p-5 mx-5 mt-2 mb-2 border-b-4 border-slate-500">
      <div className="flex gap-5 items-start w-full">
        {/* Image */}
        <div className="w-[30%]">
          <img src={item.image} alt={item.title} className="object-cover w-full max-h-40 rounded" />
        </div>

        {/* Details */}
        <div className="w-[70%] space-y-3">
          <h1 className="text-xl font-semibold text-slate-700">{item.title}</h1>
          <p className="text-base font-medium text-slate-700 line-clamp-3">{item.description}</p>

          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-green-600">${item.price}</p>
            <button
              onClick={removeFromCart}
              className="p-3 text-red-800 bg-red-200 rounded-full group hover:bg-red-400 transition duration-300"
              title="Remove from cart"
            >
              <AiFillDelete size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
