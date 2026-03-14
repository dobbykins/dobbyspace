import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        Scanner myScanner = new Scanner(System.in);
        do{
            System.out.print("Enter!: ");
            String input = myScanner.nextLine();
            list.add(input);
        }while(!myScanner.nextLine().equals("exit"));
        for(int j = 0; j < list.size(); j++) {
            System.out.print(list.get(j) + " ");
        }
    }
}