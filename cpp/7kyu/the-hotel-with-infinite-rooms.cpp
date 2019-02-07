long long int groupSize(long long int S,long long int D){

  // The Day is Triangular Number, G is n...
  // G * (G + 1) / 2 = D; 
  // G = 1/2 ( Sqrt( 8*D + 1) -1 )
  
  // However, we need to find the offset Day to map, total to add to D if S > 1
  long long toAdd = (S - 1) * S / 2;
  double offsetDay = D + toAdd;
  
  
  long long G = ceil(1.0/2.0 * ( sqrt( 8.0 * offsetDay + 1 ) - 1 ));
  
  return G;
}