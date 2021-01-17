using System;

namespace arythmetique
{
    class Program
    {
        static void Main()
        {
            calculs c = new calculs();
            c.byteAddition();
            c.byteMultiplication();
            c.byteShortAddition();
            c.multipleOperation();
            c.multipleOperation2();
            c.multipleOperation3();
            c.multipleOperation4();
            c.multipleOperation5();
        }
    }

    public class calculs
    {
        public byte b1 = 10, b2 = 20;
        public short p = 200;
        public int n = 500;
        public long q = 100;
        public float x = 2.5F;
        public double y = 5.25;
        
        public void byteAddition(){
            byte addition = (byte)(this.b1 + this.b2);
            Console.WriteLine("type " + addition.GetType().Name + " and result "+ addition);
        }   
         public void byteMultiplication(){
            byte addition = (byte)(this.b1 * this.b2);
            Console.WriteLine("type " + addition.GetType().Name + " and result "+ addition);
        }    
        public void byteShortAddition(){
            short addition = (short)(this.p + this.b1);
            Console.WriteLine("type " + addition.GetType().Name + " and result "+ addition);
        }
        public void multipleOperation(){
            long addition = (long)(this.q + this.p*(this.b1+this.b2));
            Console.WriteLine("type " + addition.GetType().Name + " and result "+ addition);
        }    
        public void multipleOperation2(){
            float addition = (float)(this.x + this.b1*this.n);
            Console.WriteLine("type " + addition.GetType().Name + " and result "+ addition);
        }   
        public void multipleOperation3(){
            long addition = (long)(this.b1 *(this.q/this.x));
            Console.WriteLine("type " + addition.GetType().Name + " and result "+ addition);
        }    
        public void multipleOperation4(){
            double addition = (double)(this.b1 *this.q*(2.0/this.x));
            Console.WriteLine("type " + addition.GetType().Name + " and result "+ addition);
        }    
        public void multipleOperation5(){
            double addition = (double)(this.b1 *this.q*(2F/this.x));
            Console.WriteLine("type " + addition.GetType().Name + " and result "+ addition);
        }
    }

}
