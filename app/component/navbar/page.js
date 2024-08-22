export default function Navbar() {
    return (
      <div className="flex justify-between items-center w-full h-10 fixed top-0 z-50 bg-white shadow-md text-black p-4">
        <div className="flex items-center font-bold text-lg font-style: italic">
          <h1 className="text-purple-500 ml-6">Heaven Food</h1>
        </div>
        <div className="space-x-4 text-sm flex items-center">
          <a href="#FastFood" className="hover:underline">FastFood</a>
          <a href="#Meal" className="hover:underline">Meal</a>
          <a href="#Tea" className="hover:underline">Tea</a>
          <a href="#SoftDrink" className="hover:underline">SoftDrinks</a>
          <a href="#HardDrink" className="hover:underline">HardDrinks</a>
        </div>
      </div>
    );
  }