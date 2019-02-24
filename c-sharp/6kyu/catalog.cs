using System;
using System.Text.RegularExpressions;

public class Catalogue
{
    public static string Catalog(string s, string article)
    {
        string result = "";
        
        string[] entries = s.Split("\n\n");
        foreach(string item in entries)
        {
          Entry entry = new Entry(item);
          if (entry.Name.Contains(article))
          {
            if (result.Length > 0)
            {
              result += "\n";
            }
            result += entry.Print();
          }
          
          
        }
        
        if (result.Length == 0) result = "Nothing";
        
        return result;
    }
    
    
    public class Entry
    {
      public string Name = "";
      public string Price = "";
      public string Qty = "";
      
      private static string pattern = "<prod><name>(.*)</name><prx>(.*)</prx><qty>(.*)</qty></prod>";
      private static Regex regex = new Regex(pattern);
      
      public Entry(string e)
      {
        Match m = regex.Match(e);
        if (m.Success)
        {
          Name = m.Groups[1].Value;
          Price = m.Groups[2].Value;
          Qty = m.Groups[3].Value;
        }
      }
      
      public string Print()
      {
        return $"{Name} > prx: ${Price} qty: {Qty}";
      }
      
    }
    
}