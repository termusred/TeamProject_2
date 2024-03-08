let Movies_db = [
    {
        title: "Chida" ,
        BackDropPath: "https://videos.voxe.tv/imgs/CHida-yulduzim-Erali-origenal-koda-941234/CHida-yulduzim-Erali-origenal-koda-941234_thumbnail_min.webp"
      } ,
      {
          title: "Hokim buva" ,
          BackDropPath: "https://videos.voxe.tv/imgs/Trailer-hokimbuvo-948123/Trailer-hokimbuvo-948123_thumbnail_min.webp"
        } ,
      {
        title: "Stand Up" ,
        BackDropPath: "https://videos.voxe.tv/imgs/ozod-FINAL-4k/ozod-FINAL-4k_thumbnail_min.webp"
      } ,
      {
        title: "Chida" ,
        BackDropPath: "https://videos.voxe.tv/imgs/CHida-yulduzim-Erali-origenal-koda-941234/CHida-yulduzim-Erali-origenal-koda-941234_thumbnail_min.webp"
      } ,
      {
          title: "Hokim buva" ,
          BackDropPath: "https://videos.voxe.tv/imgs/Trailer-hokimbuvo-948123/Trailer-hokimbuvo-948123_thumbnail_min.webp"
        } ,
      {
        title: "Stand Up" ,
        BackDropPath: "https://videos.voxe.tv/imgs/ozod-FINAL-4k/ozod-FINAL-4k_thumbnail_min.webp"
      } ,
      {
        title: "Chida" ,
        BackDropPath: "https://videos.voxe.tv/imgs/CHida-yulduzim-Erali-origenal-koda-941234/CHida-yulduzim-Erali-origenal-koda-941234_thumbnail_min.webp"
      } ,
      {
          title: "Hokim buva" ,
          BackDropPath: "https://videos.voxe.tv/imgs/Trailer-hokimbuvo-948123/Trailer-hokimbuvo-948123_thumbnail_min.webp"
        } ,
      {
        title: "Stand Up" ,
        BackDropPath: "https://videos.voxe.tv/imgs/ozod-FINAL-4k/ozod-FINAL-4k_thumbnail_min.webp"
      } ,
      {
        title: "Chida" ,
        BackDropPath: "https://videos.voxe.tv/imgs/CHida-yulduzim-Erali-origenal-koda-941234/CHida-yulduzim-Erali-origenal-koda-941234_thumbnail_min.webp"
      } ,
      {
          title: "Hokim buva" ,
          BackDropPath: "https://videos.voxe.tv/imgs/Trailer-hokimbuvo-948123/Trailer-hokimbuvo-948123_thumbnail_min.webp"
        } ,
      {
        title: "Stand Up" ,
        BackDropPath: "https://videos.voxe.tv/imgs/ozod-FINAL-4k/ozod-FINAL-4k_thumbnail_min.webp"
      } ,
      {
        title: "Chida" ,
        BackDropPath: "https://videos.voxe.tv/imgs/CHida-yulduzim-Erali-origenal-koda-941234/CHida-yulduzim-Erali-origenal-koda-941234_thumbnail_min.webp"
      } ,
      {
          title: "Hokim buva" ,
          BackDropPath: "https://videos.voxe.tv/imgs/Trailer-hokimbuvo-948123/Trailer-hokimbuvo-948123_thumbnail_min.webp"
        } ,
      {
        title: "Stand Up" ,
        BackDropPath: "https://videos.voxe.tv/imgs/ozod-FINAL-4k/ozod-FINAL-4k_thumbnail_min.webp"
      } ,
  ]
  
  Movies_db.forEach(el => {
    document.write(
      `
      <div class="card" style="width: 18rem;">
      <img src=${el.BackDropPath} class="card-img-top" alt="BackDropPath error">
      <div class="card-body">
        <h5 class="card-title">${el.title}</h5>
      </div>
    </div>
      `
    )
  })