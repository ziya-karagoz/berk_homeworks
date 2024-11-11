function checkExam(correctAnswers, studentAnswers) {
    const correctAnswers = ['a','b','c','d']
    const studentAnswers = ['a','b','d','c']
    let sonuc = 0;
    for (let i = 0; i <correctAnswers.length; i++) {
        if (correctAnswers[i]===studentAnswers[i]) {
            return sonuc += 4;
        } else if (correctAnswers[i]!==studentAnswers[i] ) {
            return sonuc -= 1;
            
        }else if (studentAnswers[i]===''){
            return sonuc ;
        }   
    }
}

module.exports = checkExam;
