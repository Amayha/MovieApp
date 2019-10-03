const transformInfo =(response)=>{

    return{
        img: response.poster_path,
        title: response.title,
        tagline: response.tagline,
        info: response.overview,
        date: response.release_date,
        money: response.budget,
        runtime: response.runtime,
        voteAverage: response.vote_average
    }
};

export default transformInfo;