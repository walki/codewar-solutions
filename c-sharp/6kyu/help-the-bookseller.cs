using System;
using System.Collections.Generic;

public class StockList {

    public static string stockSummary(String[] lstOfArt, String[] lstOf1stLetter)
    {
      string result = "";
      Dictionary<string, int> stock = new Dictionary<string, int>();
      foreach ( string item in lstOfArt)
      {
        (string cat, int qty) = ArtSplit(item);
        if(stock.ContainsKey(cat))
        { 
          stock[cat] += qty;
        }
        else
        {
          stock.Add(cat, qty);
        }
      }
      
      foreach( string item in lstOf1stLetter )
      {
        if (result.Length > 0)
        {
          result += " - ";
        }
        result += stock.ContainsKey(item) ? $"({item} : {stock[item]})" : $"({item} : 0)";
      }
      return result;
    }
    
    public static (string, int) ArtSplit(string item )
    {
      string[] parts = item.Split(new char[]{' '});
      return (parts[0].Substring(0,1), Convert.ToInt32(parts[1]));
    }
}