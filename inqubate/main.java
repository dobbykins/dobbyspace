package inqubate;
public class main {

    public static boolean shareEmployee(Employee e, Company from, Company to) {
        if (!from.hasEmployee(e)) {
            System.out.println("Employee not found in source company.");
            return false;
        }

        if (!e.isAvailable()) {
            System.out.println("Employee is not available.");
            return false;
        }

        from.removeEmployee(e);
        to.addEmployee(e);
        e.setAvailable(false);

        System.out.println("Employee shared successfully.");
        return true;
    }

    public static void main(String[] args) {
        // Example setup for testing
        Company c1 = new Company("C1", "Alpha Corp");
        Company c2 = new Company("C2", "Beta Ltd");

        Employee e1 = new Employee("E1", "John Doe", "Technician", true);
        c1.addEmployee(e1);

        Manager m1 = new Manager("M1", "Alice", c2);

        m1.requestShare(e1, c1);
    }
}
