using System;

namespace Rectangle
{

    public class rectangle
    {
        public double xarea, yarea;

        public void setArea(double x, double y) 
        {
            this.xarea = x;
            this.yarea = y;
        }

        
        public double getArea()
        {
            double response = this.xarea * this.yarea;
            return response;
        }


        public void displayArea()
        {
            Console.WriteLine( "----------------------------------------" );
            Console.WriteLine( "--------------RÉSULTATS-----------------" );
            Console.WriteLine( "Hauteur = " + this.xarea );
            Console.WriteLine( "Largeur = " + this.yarea );
            Console.WriteLine( "Aire = " + this.getArea() );
            Console.WriteLine( "----------------------------------------" );
            Console.WriteLine( "----------------------------------------" );
        }

    }

    public class executeRectangle
    {

        static void Main()
        {
            rectangle r = new rectangle();
            
            r.setArea(10, 22);
            r.displayArea();
        }

    }
    
}