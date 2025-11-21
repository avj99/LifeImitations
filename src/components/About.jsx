const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-nature-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-nature-900 mb-6">
              About the Artist
            </h2>
            
            <div className="space-y-4 text-lg text-nature-700 leading-relaxed">
              <p>
                Hi, I'm <span className="font-semibold text-nature-800">Nikitha Yelukati</span>, 
                an artist passionate about capturing the intricate beauty of nature through textured art.
              </p>
              
              <p>
                My work explores the organic patterns, tactile surfaces, and subtle details 
                that often go unnoticed in our natural world. From the rough bark of ancient 
                trees to the delicate veins of leaves, I find inspiration in the textures that 
                surround us.
              </p>
              
              <p>
                Each piece is a journey into the heart of nature, created with careful attention 
                to texture, color, and composition. I work with various mediums to bring out the 
                dimensional quality that makes nature so captivating.
              </p>
              
              <p>
                Through my art, I hope to inspire a deeper appreciation for the natural world 
                and encourage viewers to pause and notice the beautiful details in their everyday 
                environment.
              </p>
            </div>

            {/* Skills/Techniques */}
            <div className="pt-6">
              <h3 className="text-2xl font-serif font-semibold text-nature-800 mb-4">
                Artistic Focus
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Texture Art', 'Mixed Media', 'Organic Patterns', 'Botanical Art'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-nature-600 text-white rounded-full text-sm font-medium shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Profile_pic.jpg"
                alt="Nikitha Yelukati - Artist"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-nature-200 rounded-full -z-10 blur-3xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-nature-300 rounded-full -z-10 blur-3xl opacity-50" />
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-nature-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-nature-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-nature-800 mb-2">
              Unique Textures
            </h3>
            <p className="text-nature-600">
              Every piece features hand-crafted textures that bring nature to life in three dimensions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-nature-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-nature-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-nature-800 mb-2">
              Nature Inspired
            </h3>
            <p className="text-nature-600">
              Drawing inspiration from forests, mountains, oceans, and the changing seasons.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-nature-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-nature-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-nature-800 mb-2">
              Handcrafted Art
            </h3>
            <p className="text-nature-600">
              Each artwork is carefully created by hand, ensuring every piece is truly one-of-a-kind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
