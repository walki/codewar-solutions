using System;

public class Kata
{
  public static bool IsPronic(int n)
  {
    if (n<0)
      return false;
      
    double sqrt = Math.Sqrt( n );
    int x = Convert.ToInt32( sqrt );
    if (x * (x + 1) == n )
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}