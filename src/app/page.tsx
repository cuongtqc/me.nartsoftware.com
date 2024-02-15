'use server';
import { HomeCarousel } from '@/app/components/Carousel/HomeCarousel';

export default async function Home() {
  return (
    <>
      <section className="h-[500px]">
        <HomeCarousel></HomeCarousel>
      </section>
      <section className="p-4">
        <h2 className="text-3xl font-bold mb-4">Games</h2>
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
      <section className="p-4">
        <h2 className="text-3xl font-bold mb-4">Websites</h2>
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
