using System;
using System.Collections.Generic;
using System.Linq;

namespace codewars_solutions
{



    public class Dec2Fact
    {
        public static List<long> Facts = new List<long>()
        {
            0L, // Not factually accurate, but we always encode 1 as 1!, not 0!
            1L,
            2L,
            6L,
            24L,
            120L,
            720L,
            5040L,
            40320L,
            362880L,
            3628800L,
            39916800L,
            479001600L,
            6227020800L,
            87178291200L,
            1307674368000L,
            20922789888000L,
            355687428096000L,
            6402373705728000L,
            121645100408832000L,
            2432902008176640000L,
            //51090942171709440000L,
            //1124000727777607680000L,
            //25852016738884976640000L,
            //620448401733239439360000L,
            //15511210043330985984000000L,
            //403291461126605635584000000L,
            //10888869450418352160768000000L,
            //304888344611713860501504000000L,
            //8841761993739701954543616000000L,
            //265252859812191058636308480000000L,
            //8222838654177922817725562880000000L,
            //263130836933693530167218012160000000L,
            //8683317618811886495518194401280000000L,
            //295232799039604140847618609643520000000L,
            //10333147966386144929666651337523200000000L,
            //371993326789901217467999448150835200000000L,
        };

        public static Dictionary<char, long> Encoding = new Dictionary<char, long>()
        {
            { '0', 0 },
            { '1', 1 },
            { '2', 2 },
            { '3', 3 },
            { '4', 4 },
            { '5', 5 },
            { '6', 6 },
            { '7', 7 },
            { '8', 8 },
            { '9', 9 },
            { 'A', 10 },
            { 'B', 11 },
            { 'C', 12 },
            { 'D', 13 },
            { 'E', 14 },
            { 'F', 15 },
            { 'G', 16 },
            { 'H', 17 },
            { 'I', 18 },
            { 'J', 19 },
            { 'K', 20 },
            { 'L', 21 },
            { 'M', 22 },
            { 'N', 23 },
            { 'O', 24 },
            { 'P', 25 },
            { 'Q', 26 },
            { 'R', 27 },
            { 'S', 28 },
            { 'T', 29 },
            { 'U', 30 },
            { 'V', 31 },
            { 'W', 32 },
            { 'X', 33 },
            { 'Y', 34 },
            { 'Z', 35 },
        };
        public static Dictionary<long, char> EncodingInv
            = Encoding.ToDictionary((i) => i.Value, (i) => i.Key);

        internal static long factString2Dec(string fact)
        {
           return fact.Reverse()
                .Select( (cur, idx) => Facts[idx] * Encoding[cur] )
                .Sum();
        }

        internal static string dec2FactString(long dec)
        {
            var factString = "";

            for(int i = Facts.Count - 1; i >= 0; i--)
            {
                if (dec >= Facts[i])
                {
                    for (int j = i; j >= 0; j--)
                    {
                        if (dec >= Facts[i] * j)
                        {
                            dec -= Facts[i] * j;
                            factString += EncodingInv[j];
                            break;
                        }
                    }
                }
                else
                {
                    factString += "0";
                }
                
            }

            factString = factString.TrimStart('0');
            
            return factString.Equals("") ? "0" : factString;
        }
    }
}