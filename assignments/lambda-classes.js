// CODE here for your Lambda Classes

class Person {

    constructor (demographics) {

      this.name = demographics.name
      this.age = demographics.age
      this.location = demographics.location
      this.gender = demographics.gender
    }

    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {

  constructor (instructorInfo) {
    super (instructorInfo)
    this.specialty = instructorInfo.specialty
    this.favLanguage = instructorInfo.favLanguage
    this.catchPhrase = instructorInfo.catchPhrase
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }

  grade(student,subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
}

class Student extends Person {

  constructor (studentInfo) {
    super (studentInfo)
    this.previousBackground = studentInfo.previousBackground
    this.className = studentInfo.className
    this.favSubjects = studentInfo.favSubjects
  }

  listsSubjects() {
    console.log()
  }

  PRAssignment() {

  }

  sprintChallenge() {

  }
}

class ProjectManager extends Instructor {

  constructor (PMInfo) {
    super (PMInfo) 
      this.gradClassName = PMInfo.gradClassName
      this.favInstructor = PMInfo.favInstructor
  }

  standUp() {

  }

  debugsCode() {

  }
}


// Objects - Instructors

const Ashe = new Instructor({
  name: 'Ashe',
  location: 'Southwest USA',
  age: 28,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Design',
  catchPhrase: 'Yo, this needs to be prettier.'
})

const Hanzo = new Instructor({
  name: 'Hanzo',
  location: 'Japan',
  age: 39,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: 'Why isn\'t this working?'
})

const Moira = new Instructor({
  name: 'Moira',
  location: 'Rialto',
  age: '37',
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Full-stack',
  catchPhrase: 'Sup?'
})

// Objects - Students

const Mei = new Student({
  name: 'Mei',
  location: 'Japan',
  age: '21',
  gender: 'female',
  previousBackground: 'Environmental Science',
  className: 'CS22',
  favSubjects: [
    'Less',
    'HTML',
    'CSS'
  ]
})

const Brigtte = new Student({
  name: 'Brigtte',
  location: 'Stockholm',
  age: '23',
  gender: 'female',
  previousBackground: 'Shield Crafting',
  className: 'CS21',
  favSubjects: [
    'JavaScript',
    'React',
    'Redux'
  ]
})

const McCree = new Student({
  name: 'McCree',
  location: 'Southwest USA',
  age: '30',
  gender: 'male',
  previousBackground: 'Outlaw',
  className: 'CS22',
  favSubjects: [
    'Python',
    'Front-End Development',
    'JavaScript'
  ]
})

// Objects - Project Managers

const Symmetra = new ProjectManager({
  name: 'Symmetra',
  location: 'India',
  age: '30',
  gender: 'female',
  gradClassName: 'CS14',
  favInstructor: 'Lucio'
})

const Reaper = new ProjectManager({
  name: 'Reaper',
  location: 'Los Angeles',
  age: '33',
  gender: 'male',
  gradClassName: 'CS9',
  favInstructor: 'Roadhog'
})

const Widowmaker = new ProjectManager({
  name: 'Widowmaker',
  location: 'Paris',
  age: '27',
  gender: 'female',
  gradClassName: 'CS17',
  favInstructor: 'Zenyatta'
})