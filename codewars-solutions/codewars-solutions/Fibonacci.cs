namespace codewars_solutions
{
    internal class Fibonacci
    {
        // n_0 = 0, n_1 = 1
        // f_n = f_n-1 + f_n-2

        public static int Fib(int n)
        {
            int fib = 0;
            int n0 = 0;
            int n1 = 1;

            if (n == 0) fib = n0;
            else if (n == 1) fib = n1;


            while (n > 1)
            {
                fib = n0 + n1;
                n0 = n1;
                n1 = fib;

                n--;
            }

            return fib;
        }
    }
}