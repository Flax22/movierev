const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey : 'b0a80fde910c4a27ad2bff8a9d4962ae',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;