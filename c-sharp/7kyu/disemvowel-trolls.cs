using System;
using System.Linq;

public static class Kata
{
  public static string Disemvowel(string str)
  {
    
    return new String(str.Where( ch => !IsVowel(ch) ).ToArray());
  }
  
  public static bool IsVowel(char ch)
  {
    bool isVowel = false;
    switch(Char.ToLower(ch))
    {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        isVowel = true;
        break;
     }
     return isVowel;
  }
}