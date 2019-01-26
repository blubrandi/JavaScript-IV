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
    console.log(...this.favSubjects)
  }

  PRAssignment(student,subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`)
  }

  sprintChallenge(student,subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor {

  constructor (PMInfo) {
    super (PMInfo) 
      this.gradClassName = PMInfo.gradClassName
      this.favInstructor = PMInfo.favInstructor
  }

  standUp(pm,channel) {
    console.log(`${pm.name} announces to ${channel}, @channel standy times!`)
  }

  debugsCode(pm,student,subject) {
    console.log(`${pm.name} debugs ${student.name}'s code on ${subject}`)
  }
}


// Objects - Instructors

const ashe = new Instructor({
  name: 'Ashe',
  location: 'Southwest USA',
  age: 28,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Design',
  catchPhrase: 'Yo, this needs to be prettier.'
})

const hanzo = new Instructor({
  name: 'Hanzo',
  location: 'Japan',
  age: 39,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: 'Why isn\'t this working?'
})

const moira = new Instructor({
  name: 'Moira',
  location: 'Rialto',
  age: '37',
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Full-stack',
  catchPhrase: 'Sup?'
})

// Objects - Students

const mei = new Student({
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

const brigitte = new Student({
  name: 'Brigitte',
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

const mccree = new Student({
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

const symmetra = new ProjectManager({
  name: 'Symmetra',
  location: 'India',
  age: '30',
  gender: 'female',
  gradClassName: 'CS14',
  favInstructor: 'Lucio'
})

const reaper = new ProjectManager({
  name: 'Reaper',
  location: 'Los Angeles',
  age: '33',
  gender: 'male',
  gradClassName: 'CS9',
  favInstructor: 'Roadhog'
})

const widowmaker = new ProjectManager({
  name: 'Widowmaker',
  location: 'Paris',
  age: '27',
  gender: 'female',
  gradClassName: 'CS17',
  favInstructor: 'Zenyatta'
})

// Invoking

ashe.speak();
hanzo.demo('JavaScript');
moira.grade(mei,'JavaScript');
brigitte.listsSubjects();
mccree.PRAssignment(mccree,'HTML');
mei.sprintChallenge(mei,'Advanced CSS and LESS');
widowmaker.standUp(widowmaker,'#widowsmallgroup');
symmetra.debugsCode(symmetra, mei, 'React');


