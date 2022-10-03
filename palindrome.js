
const palindromeChecker = (str) => {
    let word=[]
    let answer = true;

    for (let i=0; i<str.length;i++) {
        let forwardandbackward=str.length - i;
        word[forwardandbackward - 1] = str[i];
        }
    for (let i=0; i<str.length;i++) {
        if(word[i]==str[i]) continue;
        answer=false;
    }

    console.log(answer);

}

palindromeChecker("caopapoac")
