function smallEnough(a, limit){
    return a.filter( elem => elem <= limit ).length === a.length;
  }