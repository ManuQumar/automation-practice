package javapractice;

public class MethodsVoidReturn {
    public  static  void  main(String[] args){
        MethodsVoidReturn obj= new MethodsVoidReturn();
        obj.findSqrtwoNum(10,20);
  int output=      obj.findSqrTwoNum(20,20);
        System.out.println(output);
    }
    public void findSqrtwoNum(int a,int b){
        int squareRootOutput= (a*a)+(b*b)+(2*a*b);
        System.out.println("Square root of "+a+" "+b+" is "+ squareRootOutput);
    }

    public  int findSqrTwoNum(int d, int c){
        int squareRootOutputt= (d*d)+(c*c)+(2*d*c);
       return squareRootOutputt;
    }
}
