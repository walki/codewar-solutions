public class SequenceSum
{
  public static int[] SumOfN(int n)
  {
    int m = 1;
    if (n < 0)
    {
      m = -1;
      n = -n;
    }
    int[] a = new int[n+1];
    int sum = 0;
    for (int i = 0; i <= n; ++i)
    {
      a[i] = sum;
      sum += m*(i+1);
    }
    return a;
  }
}