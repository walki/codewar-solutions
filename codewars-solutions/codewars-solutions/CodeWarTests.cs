using NUnit.Framework;

namespace codewars_solutions
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        [TestCase(0, 0)]
        [TestCase(1, 1)]
        [TestCase(2, 0 + 1)]
        [TestCase(3, 1 + 1)]
        [TestCase(4, 1 + 2)]
        [TestCase(5, 2 + 3)]
        [TestCase(10, 55)]
        public void FibonacciTest(int n, int expected)
        {
            int fib = Fibonacci.Fib(n);
            Assert.AreEqual(fib, expected);
        }

        [Test]
        [TestCase("12:30 am", new bool[] {false, false, true})]
        [TestCase("12:02 pm", new bool[] {false, true, false})]
        [TestCase("01:00 pm", new bool[] {true, false, false})]
        [TestCase("11:12 am", new bool[] {false, false, true})]
        [TestCase("05:20 pm", new bool[] {false, false, true})]
        [TestCase("04:20 am", new bool[] {false, true, false})]
        public void BasicTests(string time, bool[] expected)
        {
            var kata = new MomentInTime();
            var actual = kata.MomentOfTimeInSpace(time);
            Assert.AreEqual(expected, actual);
        }




    }
}