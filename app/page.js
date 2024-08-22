import Image from "next/image";
import Navbar from "./component/navbar/page";
export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen ">
        <Navbar />
  
      <div className="text-center py-12 bg-gradient-to-r from-red-500 to-pink-500 text-white mt-2">
        <h1 className="text-5xl font-extrabold">Welcome to Heaven Food</h1>
        <p className="text-lg mt-4">Savor the taste of paradise with our curated delicacies</p>
      </div>
      
      <div   className="mt-2">
  <h2 id="FastFood" className="text-2xl font-bold text-center text-gray-800 mb-10">
    Our FastFood Collection
  </h2>

        <div className="flex overflow-x-auto gap-6 w-full px-2">
          {/* Item 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/free-photo/fresh-gourmet-wrap-sandwich-with-beef-tomato-cilantro-generated-by-ai_188544-55502.jpg"
              alt="Doma"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Veg Roll</h3>
              <p className="text-gray-600 mt-2">A refreshing treat for a fresh start.</p>
            </div>
          </div>
        
            
            {/* Item 2 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <img 
                  src="https://media.gettyimages.com/id/1314329898/photo/goal-gappa-or-pani-puri.jpg?s=1024x1024&w=gi&k=20&c=uYcPGt102mENCaDbAcFzsYW33MW21xNwKr48YzPaXvk=" 
                  alt="Pani Puri"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">Pani Puri</h3>
                  <p className="text-gray-600 mt-2">Experience a burst of flavors with every bite.</p>
                </div>
              </div>
            
            {/* Item 3 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <img 
                  src="https://pbs.twimg.com/media/DBN4sh8UwAArbaY.jpg:large" 
                  alt="Chaat"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">Chaat</h3>
                  <p className="text-gray-600 mt-2">A savory delight to share with friends.</p>
                </div>
              </div>

            {/*Items 4*/}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <img 
                  src="https://t4.ftcdn.net/jpg/07/27/35/79/360_F_727357998_AqWuxm9AYNp67szfMI2h10bougzzThMi.jpg" 
                  alt="Chaat"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">Egg Roll</h3>
                  <p className="text-gray-600 mt-2">Warmth, comfort, and flavor in every sip.</p>
                </div>
              </div>
            {/* {item 5} */}

              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1634864572865-1cf8ff8bd23d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvdyUyMG1laW58ZW58MHx8MHx8fDA%3D" 
                  alt="Chaat"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">Chawmin</h3>
                  <p className="text-gray-600 mt-2">Creamy, cool indulgence in delightful flavors.</p>
                </div>
              </div>
          

        {/* {item 6} */}

                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                      <img 
                        src="https://www.shutterstock.com/image-photo/homemade-kerala-porotta-parathalayered-flat-260nw-1885213180.jpg" 
                        alt="Chaat"
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-800">Parata</h3>
                        <p className="text-gray-600 mt-2">Creamy, cool indulgence in delightful flavors.</p>
                      </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                      <img 
                        src="https://www.dinneratthezoo.com/wp-content/uploads/2019/12/homemade-french-fries-5.jpg" 
                        alt="Chaat"
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-800">french fries</h3>
                        <p className="text-gray-600 mt-2">Creamy, cool indulgence in delightful flavors.</p>
                      </div>
                    </div>
          
                  </div>
              </div>


              
    {/* {group 2} */}
            <div  className="mt-12">
              <h2  id="Meal" className="text-2xl font-bold text-center text-gray-800 mb-10">Our Meal Collection</h2>
              
              <div className="flex overflow-x-auto gap-6 w-full px-2">
                
                {/* Item 1 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <img 
                    src="https://i.ytimg.com/vi/HADc3J_HVQw/sddefault.jpg" 
                    alt="Doma"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Pork Rice</h3>
                    <p className="text-gray-600 mt-2">A refreshing treat for a fresh start.</p>
              </div>
            </div>
          
          {/* Item 2 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <img 
                  src="https://www.cookunity.com/_next/image?url=https%3A%2F%2Fcu-media.imgix.net%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fx1200%2Fs%2Ft%2Fsteak_over_rice_-_choi-1.jpg%3Fheight%3D800%26width%3D800%26fit%3Dcrop%26format%3Dwebp%26cs%3Dtinysrgb%26lossless%3Dtrue&w=3840&q=75" 
                  alt="Pani Puri"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">Beef Rice</h3>
                  <p className="text-gray-600 mt-2">Experience a burst of flavors with every bite.</p>
                </div>
              </div>
              
          {/* Item 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://png.pngtree.com/thumb_back/fw800/background/20230907/pngtree-curry-plate-with-rice-and-vegetables-on-it-image_13349950.jpg" 
              alt="Chaat"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Veg Rice</h3>
              <p className="text-gray-600 mt-2">A savory delight to share with friends.</p>
            </div>
          </div>

          {/*Items 4*/}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://img.freepik.com/premium-photo/fried-rice-with-green-peas-carrot-corn-vegetarian-healthy-food-style_1339-142556.jpg" 
              alt="Chaat"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Fried Rice</h3>
              <p className="text-gray-600 mt-2">Warmth, comfort, and flavor in every sip.</p>
            </div>
          </div>
          {/* {item 5} */}
          
        
        </div>
      </div>
      
      {/* GROUP 3 */}
      <div className="mt-12">
        <h2 id="Tea" className="text-2xl font-bold text-center text-gray-800 mb-10">Our Tea Collection</h2>
        
        <div className="flex overflow-x-auto gap-6 w-full px-2">
          
          {/* Item 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://png.pngtree.com/thumb_back/fw800/background/20240530/pngtree-cup-of-freshly-brewed-black-tea-and-dry-on-dark-background-image_15845540.jpg" 
              alt="Doma"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Black Tea</h3>
              <p className="text-gray-600 mt-2">A refreshing treat for a fresh start.</p>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://t3.ftcdn.net/jpg/00/40/11/30/360_F_40113021_psfZ0ff6YSy7surLXnU2OEiW0WW7X9FC.jpg" 
              alt="Pani Puri"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Green Tea</h3>
              <p className="text-gray-600 mt-2">Experience a burst of flavors with every bite.</p>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://images.freeimages.com/images/large-previews/43e/macchiato-1178160.jpg?fmt=webp&w=500" 
              alt="Chaat"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Milk Coffe</h3>
              <p className="text-gray-600 mt-2">A savory delight to share with friends.</p>
            </div>
          </div>

          {/*Items 4*/}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://t3.ftcdn.net/jpg/08/14/28/42/360_F_814284230_xkCVAsq5lgFH6GeagYZX5gjuwK0mvHZC.jpg" 
              alt="Chaat"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Lemon Tea</h3>
              <p className="text-gray-600 mt-2">Warmth, comfort, and flavor in every sip.</p>
            </div>
          </div>
          {/* {item 5} */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://t3.ftcdn.net/jpg/01/06/14/76/360_F_106147605_xmXfzxpraUtLQZkwTYWhjIJc0dkBkN8Y.jpg" 
              alt="Chaat"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Milk Tea</h3>
              <p className="text-gray-600 mt-2">Warmth, comfort, and flavor in every sip.</p>
            </div>
          </div>
        
        </div>
      </div>

      {/* group 4 */}

      <div className="mt-12">
        <h2 id="SoftDrink" className="text-2xl font-bold text-center text-gray-800 mb-10">Our Soft Drinks Collection</h2>
        
        <div className="flex overflow-x-auto gap-6 w-full px-2">
          
          {/* Item 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://www.shutterstock.com/image-photo/poznan-pol-nov-24-2022-260nw-2233059767.jpg" 
              alt="Doma"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Ice Coke</h3>
              <p className="text-gray-600 mt-2">A refreshing treat for a fresh start.</p>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://img.freepik.com/free-photo/ayran-drink-with-mint-cucumber-glass-wooden-table_123827-21398.jpg" 
              alt="Pani Puri"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Lassi</h3>
              <p className="text-gray-600 mt-2">Experience a burst of flavors with every bite.</p>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/03/28/cookies-and-cream-milkshake.jpg.rend.hgtvcom.1280.960.suffix/1648501387256.jpeg" 
              alt="Chaat"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Chocalate Shake</h3>
              <p className="text-gray-600 mt-2">A savory delight to share with friends.</p>
            </div>
          </div>

          {/*Items 4*/}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/banana-milkshake-9c56237.jpg" 
              alt="Chaat"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Milk Shake</h3>
              <p className="text-gray-600 mt-2">Warmth, comfort, and flavor in every sip.</p>
            </div>
          </div>
          {/* {item 5} */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/029/302/962/non_2x/a-front-view-fresh-fruit-cocktails-with-fresh-fruit-slices-ice-cooling-on-blue-drink-juice-co-free-photo.jpg" 
              alt="Chaat"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Fruit juice</h3>
              <p className="text-gray-600 mt-2">Warmth, comfort, and flavor in every sip.</p>
            </div>
          </div>
        
        </div>
      </div>


 {/* group 5 */}
      <div className="mt-12">
        <h2 id="HardDrink" className="text-2xl font-bold text-center text-gray-800 mb-10">Our HardDrinks Collection</h2>
        
        <div className="flex overflow-x-auto gap-6 w-full px-2">
          
          {/* Item 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/proxy/o_EqvM9p2TEp_vOhgv2pj5A-WvjlezntWYnsES-JmIU-o09n3M5P4WnLFt0n_r-fCbTwwHv1jGJt7RfE8lf4gSqGhJM" 
              alt="Doma"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">K5</h3>
              <p className="text-gray-600 mt-2">A refreshing treat for a fresh start.</p>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://www.azhapasa.com/uploads/shops/products/banner/1656844607-PPDvQDfd.jpeg" 
              alt="Rock bee"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Rock Bee</h3>
              <p className="text-gray-600 mt-2">Experience a burst of flavors with every bite.</p>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://static.wixstatic.com/media/b358e7_e1cd8f55716e4680a45e87b8d9f195dd~mv2.png/v1/fill/w_648,h_579,al_c,q_90,enc_auto/b358e7_e1cd8f55716e4680a45e87b8d9f195dd~mv2.png" 
              alt="drinks"
              className="w-full h-56 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Reven Vodka</h3>
              <p className="text-gray-600 mt-2">A savory delight to share with friends.</p>
            </div>
          </div>

          {/*Items 4*/}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://dukaan.b-cdn.net/700x700/webp/16896/3f151727-f9d7-4c99-91ad-d9d9697bb181.png" 
              alt="Chaat"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Royal challange</h3>
              <p className="text-gray-600 mt-2">Warmth, comfort, and flavor in every sip.</p>
            </div>
          </div>
          {/* {item 5} */}
          
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3089663/pexels-photo-3089663.jpeg?cs=srgb&dl=pexels-ywanphoto-3089663.jpg&fm=jpg"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Red Level</h3>
              <p className="text-gray-600 mt-2">Warmth, comfort, and flavor in every sip.</p>
            </div>
          </div> 

          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/3 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://shoponline.bt/cdn/shop/collections/beer_tashi_1200x1200.jpg?v=1616420709" 
              alt="Chaat"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Beer</h3>
              <p className="text-gray-600 mt-2">Warmth, comfort, and flavor in every sip.</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-white py-6 bg-gradient-to-r from-red-500 to-pink-500 mt-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-12 text-sm">
          <a href="#" className="hover:underline">Shop Info</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Location</a>
          <a href="#" className="hover:underline">Email Address</a>
          <a href="#" className="hover:underline">Home</a>
        </div>
        <div className="flex space-x-6 ">
        <svg xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 32 32"
          className="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
          <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
        </svg> 
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" height="32" 
          viewBox="0 0 32 32"
          className="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
          <path 
              d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0">
          </path>
        </svg>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" height="32" 
          viewBox="0 0 32 32"
          className="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
          <path 
              d="M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z" 
              fill-rule="evenodd">
          </path>
        </svg>
  
        </div>
      </div>
    </footer>
</main>

  )
}