document.querySelectorAll(".gallery-wrapper").forEach((gallery) => {

    const mainImage = gallery.querySelector(".main-image");
    const thumbs = gallery.querySelectorAll(".thumb");
  
    thumbs.forEach((thumb) => {
  
      thumb.addEventListener("click", (e) => {
  
        // update ONLY this gallery
        mainImage.src = thumb.dataset.large;
  
        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
  
      });
  
    });
  
  });