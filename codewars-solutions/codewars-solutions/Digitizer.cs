using System;
using System.Collections.Generic;

namespace codewars_solutions
{
    internal class Digitizer
    {
        public Digitizer()
        {
        }

        internal int[] Digitize(int numToDigitize)
        {
            string num = numToDigitize.ToString();
            List<int> digitized = new List<int>();

            for(int i = num.Length - 1; i >= 0; i--)
            {
                digitized.Add(Convert.ToInt32(num[i].ToString()));
            }

            return digitized.ToArray();
        }
    }
}