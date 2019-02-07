using System;

public class Kata
{
  public static string Add(string a, string b)
  {
    // Need to pad the strings with 0's
    int maxLength = a.Length > b.Length ? a.Length : b.Length;
    
    string result = "";
    
    // Iterating low digits to high
    a = Reverse(PadLength(a, maxLength));
    b = Reverse(PadLength(b, maxLength));
  
    // only dealing with one digit at a time
    int carry_over  = 0;

    for(int i = 0; i < a.Length && i < b.Length; i++)
    {
      int digitA = Int32.Parse(a[i].ToString());  
      int digitB = Int32.Parse(b[i].ToString());
      
      int temp = digitA + digitB + carry_over;
      // concatenation not addition
      result += temp % 10;
      carry_over = temp / 10;
    }
    
    // pick up the extra if the answer is longer than either of the operands
    if (carry_over > 0)
    {
      result += carry_over;
    }
    
    // Reverse the result back to left to right...
    return Reverse(result); // Fix this!
  }
  
  public static string PadLength(string s, int len)
  {
    return s.PadLeft( len, '0' );
  }
  
  public static string Reverse( string s )
  {
    char[] charArray = s.ToCharArray();
    Array.Reverse( charArray );
    return new string( charArray );
  }
  
}