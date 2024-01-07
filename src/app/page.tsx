import { Carousel } from "flowbite-react";

export default function Home() {
  return (
    <>
      <section className="h-80 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </section>
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
              <p className="text-gray-600">
                Works on all devices and screen sizes.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Pixel Perfection</h3>
              <p className="text-gray-600">
                Designed with attention to pixel details.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Intuitive and user-friendly interface.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
