package javapractice;

public class CondtionsSecondProg {
    public static void main(String[] args) {
        CondtionsSecondProg csp = new CondtionsSecondProg();
        csp.genderAndAge("male", 70);
        csp.genderAndAge("female", 2);
    }
    public void genderAndAge(String gender, int age){
        if(age>=0 && age<=18){
            if(gender.equals("male")){
                System.out.println("boy");
            }else if( gender.equals("female")) {
                System.out.println("girl");

            }}else if( age<=60){
                System.out.println("adult");
            }else{
                System.out.println("senior citizen");
            }
        }


}
