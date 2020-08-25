
function saveThePrisioner(n,m,s){

    m--;

    while(m != 0){

        if(s == n && m != 0){
            s = 1;
            m--;
        }

        s++;
        m--;
    }


    return s;
}


console.log(saveThePrisioner(1,1,1) === 1);
console.log(saveThePrisioner(5,2,1) === 2);
console.log(saveThePrisioner(5,2,2) === 3);
console.log(saveThePrisioner(3,7,3) === 3);
console.log(saveThePrisioner(7,19,2) === 6);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(353972922, 573651462, 244520504) === 110226121);


