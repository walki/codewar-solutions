using System;
using System.Linq;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Globalization;

public class Kata
{
  public static string ToCamelCase(string str)
  {
    
    TextInfo ti = CultureInfo.CurrentCulture.TextInfo;
  
    string pattern = @"[_-]";
    var result = Regex.Split(str, pattern)
                      .Select( (value, index) => index == 0 ? value : ti.ToTitleCase(value))
                      .Aggregate( "", (total, next) => total + next );
    return result;
  }
}