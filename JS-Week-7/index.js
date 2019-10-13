class Movie1 {
    constructor(title, director) {
      this.title=title,
      this.director=director
    }
  
    getTitle() {
      return this.title
    }
  
    getDirector() {
      return this.director
    }
  
    addStar(star) {
      this.star=star
    }
  
    getStars() {
      return [this.star]
    }
  
    addWriter(writer) {
      this.writer=writer
    }
  
    getWriters() {
      return this.writer
    }
  
    addRating(rating) {
      this.rating=rating
    }
  
    getRating() {
      return this.rating
    }
  
    // ... Add yours :-) Look to IMDB for inspiration
  }

  
  class StaffMember {
    constructor(name, role, dateOfBirth) {
      this.name=name,
      this.role=role,
      this.dateOfBirth=dateOfBirth
    }
  
    addMovie(movie) {
      this.movie=movie
    }
  
    getName() {
       return this.name
    }
  
    getRole() {
      return this.role
    }
  
    getAge() {
      return (new Date().getFullYear())-(this.dateOfBirth);
    }
  }
  const firstActor = new StaffMember("Scott Moore","Producer",1970); 
  
  const myMovie = new Movie1("Jexi","Jon Lucas",firstActor);
  myMovie.addStar("***")
  myMovie.addStar(firstActor);
  
//   create and add more staff members
  
  // Make sure that the following actions work.
  document.querySelector("h1").innerHTML=(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
  const director = myMovie.getDirector();
  document.querySelector("h2").innerHTML=("Director:"+ director);



