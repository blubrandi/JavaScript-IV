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

class ProjectManagers extends Instructor {

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