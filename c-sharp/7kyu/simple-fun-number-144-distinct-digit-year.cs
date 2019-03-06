namespace myjinxin
{
    using System;
    using System.Linq;
    using System.Collections.Generic;
    
    public class Kata
    {
        public int DistinctDigitYear(int year){
          do
          {
            year++;
          }
          while (!HasOnlyDistinctDigits(year));
          
          return year;
        }
        
        public bool HasOnlyDistinctDigits(int num)
        { 
          return Convert.ToString(num).Distinct().Count() == Convert.ToString(num).Count();
        }
    }
}