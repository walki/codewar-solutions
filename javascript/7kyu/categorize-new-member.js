function openOrSenior(data){
   return data.map( player => {
     age = player[0];
     hcp = player[1];
     return (age >= 55 && hcp > 7) ? 'Senior' : 'Open';
    });
}