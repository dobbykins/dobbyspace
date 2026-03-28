package inqubate;
public class Manager {

    private String id;
    private String name;
    private Company company;

    public Manager(String id, String name, Company company) {
        this.id = id;
        this.name = name;
        this.company = company;
    }

    // Getters
    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Company getCompany() {
        return company;
    }

    // Setters
    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    // MVP sharing method
    public boolean requestShare(Employee e, Company fromCompany) {
        return main.shareEmployee(e, fromCompany, this.company);
    }
}