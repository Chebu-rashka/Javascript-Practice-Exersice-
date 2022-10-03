
// } //100 hurtelh Prime numbers print hiie
// Prime number 2-oos ehleed 100 hurtelh, 1-eer nemh ybna
// Hervee tuhain too n omno bgaa toonuuddaa huvaagdaad unen bvl Prime number mun gj printley
// Prime too munu gej shalgahiin tuld, uur toond huvaagdjinu gj shalgaval iluu amar
// Uur toond huvaagdchval ter maani prime bish bolchino gsn ug
// Uur toond huvaagdjiinuu shalgahiin tuld ugugdsun toonii hagas hurtel shalgahad bolno, 
// hagasaas deeshee dhiad davtagdah uchraas

// Zoe Chinbat, 1:33 PM
// uur toond huvaagdjinu gj tomyo biched prime too= false ued loop hiine?

// Badral Batbold, 1:36 PM
// Uguu loop maani bolohoor 2oos ehleed ugugdsun toonii hagas hurtel yavna
// Tgd ugugdsun too, loop hj bga 2 toonii remainder 0 tei tentsuu biaval huvaagdchlaa gsn ug buyu prume too bish gsn ug
// Ter uyd return keyword oo adhiglaad zogsoochino gsn ug



function isPrimeNumber(number) {
    let isNotPrime= true;
    for (let index=2 ;  index<50 ; index++) 
    {    // 2oos ehleed 'number' gesen too hurtel davtan
    
        if(number%index===0) 
        {  //number n 2d huvaagdaad true bvl Prime number bish tul shalgah herggu break
        isNotPrime = false; 
        break;
    
    }
} return isNotPrime; // bodol olson huvisagchaa butsaan
}
for (let i=2;i<=100; i++) {
    if(isPrimeNumber(i)=== true) console.log(i+ "is a Prime number") }
console.log(isPrimeNumber(2));