package javapractice;

public class ObjectsAndClasses {
    public String name;
    public  int rollNo;
    public int marks;

    @Override
    public String toString() {
        return "Name: " + name + ", RollNo: " + rollNo + ", Marks: " + marks;
    }

    public static  void  main(String[] args){
        ObjectsAndClasses obj=new ObjectsAndClasses();
            obj.name="Sneha";
            obj.rollNo=23;
            obj.marks=89;

            ObjectsAndClasses obj1=new ObjectsAndClasses();
            obj1.name="Manu";
            obj1.rollNo=24;
            obj1.marks=90;

        System.out.println(obj);   // directly calls toString()
        System.out.println(obj1);  // directly calls toString()
    }
}
