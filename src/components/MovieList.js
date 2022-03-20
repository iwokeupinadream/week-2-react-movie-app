import React from 'react'
import Movie from './Movie'

export default class MovieList extends React.Component {

  render() {

    // let movieOne = {
    //   title: 'Spider Man: No Way Home',
    //   releaseDate: 'December 17, 2021',
    //   image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg',
    //   summary: 'A bigger, bolder Spider-Man sequel, No Way Home expands the franchises scope and stakes without losing sight of its humor and heart.'
    // }

    // let movieTwo = {
    //   title: 'Raya and the Last Dragon',
    //   releaseDate: 'March 5, 2021',
    //   image: 'https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg',
    //   summary: 'Another gorgeously animated, skillfully voiced entry in the Disney canon, Raya and the Last Dragon continues the studios increased representation while reaffirming that its classic formula is just as reliable as ever.'
    // }

    // let movieThree = {
    //   title: 'West Side Story',
    //   releaseDate: 'December 10, 2021',
    //   image: 'https://m.media-amazon.com/images/M/MV5BMzQ5ZDZhZDItZTNmZi00MWQ0LWJlNDUtZTE4ZWJmODNlM2Y3XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg',
    //   summary:'Steven Spielbergs West Side Story presents a new look at the classic musical that lives up to its beloved forebear -- and in some respects might even surpass it.'
    // }

  

    return (
      <div className='row'>
          <h1>Movie Reviews</h1>
          <div className='movie-list-div'>
                <Movie {...{
                  key: 1,
                  title: 'Spider Man: No Way Home',
                  releaseDate: 'December 17, 2021',
                  image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg',
                  summary: 'A bigger, bolder Spider-Man sequel, No Way Home expands the franchises scope and stakes without losing sight of its humor and heart.'
                }} />
                <Movie {...{
                  key: 2,
                  title: 'Raya and the Last Dragon',
                  releaseDate: 'March 5, 2021',
                  image: 'https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg',
                  summary: 'Another gorgeously animated, skillfully voiced entry in the Disney canon, Raya and the Last Dragon continues the studios increased representation while reaffirming that its classic formula is just as reliable as ever.'
                }} />
                <Movie {...{
                  key: 3,
                  title: 'West Side Story',
                  releaseDate: 'December 10, 2021',
                  image: 'https://m.media-amazon.com/images/M/MV5BMzQ5ZDZhZDItZTNmZi00MWQ0LWJlNDUtZTE4ZWJmODNlM2Y3XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg',
                  summary:'Steven Spielbergs West Side Story presents a new look at the classic musical that lives up to its beloved forebear -- and in some respects might even surpass it.'

                }} />
                
                
          </div>
      </div>
    )
  }
}
