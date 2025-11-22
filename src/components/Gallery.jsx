import { useState } from 'react';

const Gallery = () => {
  // Featured artworks by Nikitha Yelukati
  const artworks = [
    {
      id: 1,
      title: "Enchantment",
      category: "Floral",
      image: "/Peiones.jpeg",
      description: "Textured purple and blue peonies",
      size: "3′ X 3′",
      featured: true
    },
    {
      id: 2,
      title: "Field of Daisies",
      category: "Floral",
      image: "/TexturedDaisiesNY.JPG",
      description: "Creamy white daisies with rich green foliage",
      size:  "4″ X 4″",
      featured: true
    },
    {
      id: 3,
      title: "Elegance",
      category: "Floral",
      image: "/Elegance.jpeg",
      description: "Soft champagne and pink flower with shimmering gold leaf accents",
      size: "10″ X 10″",
      featured: true
    },
    {
      id: 4,
      title: "Ethereal Decay",
      category: "Floral",
      image: "/Ethereal Decay.JPG",
      description: "Textured white flower on weathered wood with gold leaf foliage",
      size: "18″ X 24″",
      featured: true
    },
    {
      id: 5,
      title: "Ruidus",
      category: "Celestial",
      image: "/Ruidus.jpeg",
      description: "Red moon",
      size: "8″ X 8″ each block",
      status: "Sold",
      commissioned: true,
      featured: true
    },
    {
      id: 6,
      title: "Setting Sail",
      category: "Seascape",
      image: "/SettingSail.jpeg",
      description: "Ocean wave with seagull in flight",
      size: "22″ X 28″",
      featured: true
    },
    {
      id: 7,
      title: "Sonder",
      category: "Portrait",
      image: "/Sonder.jpeg",
      description: "Abstract textured portrait with striking turquoise eyes",
      size: "5′ X 4′",
      commissioned: true,
      featured: true
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Commissions', 'Floral', 'Celestial', 'Seascape', 'Portrait'];
  const [lightbox, setLightbox] = useState(null);

  const filteredArtworks = selectedCategory === 'All' 
    ? artworks 
    : selectedCategory === 'Commissions'
    ? artworks.filter(art => art.commissioned === true)
    : artworks.filter(art => art.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nature-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-nature-600 max-w-2xl mx-auto">
            Explore a collection of textured nature art inspired by the world around us
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? category === 'Commissions'
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-nature-600 text-white shadow-lg'
                  : category === 'Commissions'
                  ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                  : 'bg-nature-100 text-nature-700 hover:bg-nature-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-zoom-in"
              onClick={() => setLightbox(artwork)}
              role="button"
              tabIndex={0}
            >
              <div className="aspect-square overflow-hidden bg-nature-100">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-nature-900/90 via-nature-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-serif font-bold mb-2">
                  {artwork.title}
                </h3>
                <p className="text-nature-100 text-sm mb-2">
                  {artwork.description}
                </p>
                <div className="flex gap-2">
                  <span className="inline-block px-3 py-1 bg-nature-500 text-white text-xs rounded-full">
                    {artwork.category}
                  </span>
                  <span className="inline-block px-3 py-1 bg-nature-700 text-white text-xs rounded-full">
                    {artwork.size}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-2 right-2 bg-transparent text-white text-3xl font-bold hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="mt-3 text-center">
              <h3 className="text-white text-2xl font-serif font-bold">{lightbox.title}</h3>
              <p className="text-nature-100 text-sm mb-2">{lightbox.description}</p>
              <div className="flex gap-2 justify-center">
                <span className="inline-block px-3 py-1 bg-nature-500 text-white text-xs rounded-full">
                  {lightbox.category}
                </span>
                <span className="inline-block px-3 py-1 bg-nature-700 text-white text-xs rounded-full">
                  {lightbox.size}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
