// function array() {
//     const students= ['Mandahaa', 'Anar', "Huluguu",  "Dee,",
//     "Ziggy"," Tsatsa", "Jaagii", "Muugii", "Zoe", "Meg", "Jamia"]
//     let count=0;
//     while(count<students.length) {
//     console.log(Math.floor((Math.random()*10))
//     count++

//     }
  
// }

// array()

// let r = Math.random()


    const students= ['Mandahaa', 'Anar', "Huluguu",  "Dee,",
    "Ziggy"," Tsatsa", "Jaagii", "Muugii", "Zoe", "Meg", "Jamia"];
    const  randomStudent = () => {
        const tomyo=Math.round(Math.random()*students.length);
        console.log(students[tomyo])
    }



randomStudent()

