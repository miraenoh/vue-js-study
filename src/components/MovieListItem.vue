<template>
  <li class="movie">
    <div class="movie__image">
      <img class="movie__poster" :src="imageURL" :alt="movie.Title" />
      <a class="movie__more" :href="`https://www.imdb.com/title/${movie.imdbID}`">More</a>
    </div>
    <p class="movie__title">{{ movie.Title }}</p>
    <span class="movie__year">{{ movie.Year }}</span>
  </li>
</template>

<script>
import unknownImage from '@/assets/unknown.jpg'

export default {
  name: 'movie-list-item',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageURL () {
      return this.movie.Poster === 'N/A' ? unknownImage : this.movie.Poster
    }
  }
}
</script>

<style lang="scss" scoped>
.movie {
  list-style: none;

  &__image {
    position: relative;
  }

  &__poster {
    width: 100%;
    height: 50rem;
    object-fit: cover;
    border-radius: 1.5rem;
    box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.4);

    @media screen and (max-width: 600px) {
      height: 40rem;
    }
  }

  &__more {
    position: absolute;
    bottom: 10px;
    right: 10px;

    padding: 1.4rem;
    border-radius: 2rem;
    font-size: 1.6rem;
    font-weight: 700;

    background-color: var(--blue-light);
    color: var(--white);
    text-decoration: none;

    transition: all .3s;

    &:hover {
      background-color: #1073BA;
    }
  }

  &__title {
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
    font-size: 2.4rem;
    color: var(--white);
  }

  &__year {
    font-size: 1.8rem;
    color: var(--grey-light);
  }
}
</style>
