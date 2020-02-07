using System;

public class DivSeven
{
  public static long[] Seven(long m)
  {
    long count = 0;
    
    
    while ( m >= 100 )
    {
      long x = m / 10;
      long y = m % 10;
      
      m = x - 2 * y;
      count++;
    }
    
    return new long[] { m, count };
    
  }
}