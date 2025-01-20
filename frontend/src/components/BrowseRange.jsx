

const BrowseRange = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Browse The Range</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center gap-8">
          {/* Dining */}
          <div className="bg-yellow-300 rounded-lg overflow-hidden w-80">
            <img
              src="./diningRoom.jpg"
              alt="Dining"
              className="w-full h-[25rem] object-cover"
            />
            <div className="py-4 text-center">
              <h3 className="text-lg font-medium">Dining</h3>
            </div>
          </div>

          {/* Living */}
          <div className="bg-white rounded-lg overflow-hidden w-80">
            <img
              src="./livingRoom.jpg"
              alt="Living"
              className="w-full h-[25rem] object-cover"
            />
            <div className="py-4 text-center">
              <h3 className="text-lg font-medium">Living</h3>
            </div>
          </div>

          {/* Bedroom */}
          <div className="bg-white rounded-lg overflow-hidden w-80">
            <img
              src="./Bedroom.jpg"
              alt="Bedroom"
              className="w-full h-[25rem] object-cover"
            />
            <div className="py-4 text-center">
              <h3 className="text-lg font-medium">Bedroom</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;