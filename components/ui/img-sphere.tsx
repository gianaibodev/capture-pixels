  const renderSpotlightModal = () => {
    if (!selectedImage) return null;
    
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={() => setSelectedImage(null)}
        style={{ 
          animation: 'fadeIn 0.3s ease-out'
        }}
      >
        <div 
          className="bg-card border border-border rounded-xl max-w-lg w-full overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{ 
            animation: 'scaleIn 0.3s ease-out'
          }}
        >
          <div className="relative aspect-square">
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-cover"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full text-foreground flex items-center justify-center hover:bg-background transition-all cursor-pointer border border-border"
            >
              <X size={16} />
            </button>
          </div>
          <div className="p-6 bg-card">
            {selectedImage.title && (
              <h3 className="text-2xl font-bold mb-3 text-foreground">{selectedImage.title}</h3>
            )}
            {selectedImage.description && (
              <p className="text-muted-foreground leading-relaxed">{selectedImage.description}</p>
            )}
            {!selectedImage.title && !selectedImage.description && (
              <p className="text-muted-foreground italic">No description available</p>
            )}
          </div>
        </div>
      </div>
    );
  };
