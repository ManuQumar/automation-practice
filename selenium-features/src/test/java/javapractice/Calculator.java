package javapractice;

import org.checkerframework.checker.units.qual.C;

import java.sql.SQLOutput;

public class Calculator {
    public  static  void main(String[]args){
        Calculator c= new Calculator();
        int output =c.add(1,1);
        System.out.println("Addition "+output);
        c.div(10,20);
        c.sub(20,10);
        c.multiply(20,10);
    }
    public  int add(int a , int b){
        int c=a+b;
        return c;
    }
    public  void sub(int a,int b){
        int c=a-b;
        System.out.println(c);
    }
    public  void div(int a,int b){
        int c=a/b;
        System.out.println(c);
    }
    public void  multiply(int a, int b){
        int c=a*b;
        System.out.println(c);
    }
}
