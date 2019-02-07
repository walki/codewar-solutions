using System;

    public class Kata
    {
        public static int[] Get_size(int w,int h,int d)
        {
            return new int[]{ GetArea(w,h,d), GetVolume(w,h,d) };
        }
        
        private static int GetArea(int w, int h, int d)
        {
          return 2 * (h * w) + 2 * (h * d) + 2 * (w * d);
        }
        
        private static int GetVolume(int w, int h, int d)
        {
          return w * h * d;
        }
    }