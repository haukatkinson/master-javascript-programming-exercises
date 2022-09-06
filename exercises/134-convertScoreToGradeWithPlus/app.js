function convertScoreToGradeWithPlusAndMinus(score) {
    if( score > 100 || score < 0){
        return 'INVALID SCORE'
    }else if(score >= 98){
        return 'A+'
    }
     else if(score > 92){
        return 'A'
    }
    else if(score >= 90){
        return 'A-'
    } else if(score >= 88){
        return 'B+'
    }
     else if(score > 82){
        return 'B'
    }
    else if(score >= 80){
        return 'B-'
    }  else if(score >= 78){
        return 'C+'
    }
     else if(score > 72){
        return 'C'
    }
    else if(score >= 70){
        return 'C-'
    } else if(score >= 68){
        return 'D+'
    }
     else if(score > 72){
        return 'D'
    }
    else if(score >= 80){
        return 'D-'
    } else if ( score <= 50){
        return 'F'
    } 
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'