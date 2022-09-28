function obnulenie(){
    stanPower[stanPower.length-1]=[];
    stanKol[stanKol.length-1]=[];
    kolPosition=0;
    let deltr = document.getElementById('newtr');
    deltr.remove();
    kolPosition-=1;
}

function calculated(p,n){
    if(p<=5.5){
        return n;
    }
    if(p<=11){
        return 2*n;
    }
    if(p>11){
        return 3*n;
    }
}

document
    .querySelector('#clear')
    .addEventListener('click', obnulenie);


document
    .querySelector('#addStan')
    .addEventListener('click', addStanok);

document
    .querySelector('#kolDvig')
    .addEventListener('click', kolDviga);

function kolDviga(){
    let dvig=0;
    for(let i=0; i<stanKol.length;i++){
        dvig+=calculated(stanPower[i],stanKol[i])
    }
    document.querySelector('#result1').innerHTML=String(dvig);
}

function addtable(power,kol){
    kolPosition++;
    let newtr=document.createElement('tr');
    newtr.className = 'newtr';
    newtr.id='newtr';
    tableMotor.append(newtr);
    let newth1=document.createElement('th');
    newtr.className = 'newth1';
    newth1.innerText=String(kolPosition);
    newtr.append(newth1);
    let newth2=document.createElement('th');
    newtr.className = 'newth2';
    newth2.innerText=String(power)
    newtr.append(newth2);
    let newth3=document.createElement('th');
    newtr.className = 'newth3';
    newth3.innerText=String(kol)
    newtr.append(newth3);
}
var stanPower=new Array;
var stanKol=new Array;
var kolPosition=0;

function addStanok(){
    stanPower.push(Number(getPower()));
    stanKol.push(Number(getKol()));
    addtable(stanPower[stanPower.length-1],stanKol[stanKol.length-1])
}

function getPower(){
    return[
        document.querySelector('#powerInp').value
    ];
}

function getKol(){
    return[
        document.querySelector('#kolInp').value
    ];
}
