package inqubate;
public class Employee {

    private String id;
    private String name;
    private String role;
    private boolean available;

    public Employee(String id, String name, String role, boolean available) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.available = available;
    }

    // Getters
    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getRole() {
        return role;
    }

    public boolean isAvailable() {
        return available;
    }

    // Setters
    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }
}