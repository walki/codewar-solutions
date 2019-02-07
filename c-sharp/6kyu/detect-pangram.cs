using System;
using System.Collections.Generic;
using System.Linq;

public static class Kata
{
  private const string alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  public static bool IsPangram(string str)
  {
    var letters = GetEmptyDictionary();

    var lowerLetters = str.ToLower().Where( ch => IsLetter( ch ));
    
    foreach (var v in lowerLetters)
    {
      letters[v]++;
    }
    
    
    return letters.Where( x => x.Value > 0).Count() == alphabet.Length;
  }
  
  public static bool IsLetter(char c)
  { 
    return alphabet.Contains(Char.ToLower(c));
  }
  
  public static Dictionary <char, int> GetEmptyDictionary()
  {
    var empty = new Dictionary<char, int>();
    foreach(char ch in alphabet)
    {
      empty.Add(ch, 0);
    }
    return empty;
  }
}