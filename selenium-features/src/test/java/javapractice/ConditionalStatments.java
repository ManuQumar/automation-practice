package javapractice;

public class ConditionalStatments {
    public static void main(String[] args) {
            ConditionalStatments cs= new ConditionalStatments();
            cs.getAgeCatgeory(19);
        cs.getAgeCatgeory(0);
        cs.getAgeCatgeory(100);
        cs.getAgeCatgeory(-100);
    }
    public  void getAgeCatgeory(int age){
        if(age>=18){
            System.out.println("he is eligable to vote");
        }else if(age<=0){
            System.out.println("Please enter a value greaterthan 0");
        }else{
            System.out.println("not eligable to vote");
        }
        }

}
