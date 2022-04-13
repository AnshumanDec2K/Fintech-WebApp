package com.Customer;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class CustomerDAO {

    static final String DB_URL = "jdbc:mysql://localhost/grey_goose";
    static final String USER = "root";
    static final String PASS = "Ad.7532159";

    public Connection getConnection() {
        Connection conn = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return conn;
    }

    public ArrayList<Customer> getAllCustomeres() {
        ArrayList<Customer> allCustomer = new ArrayList<Customer>();
        try {
            Connection conn = getConnection();
            String sql_query = "SELECT * FROM customer";
            PreparedStatement pst = conn.prepareStatement(sql_query);

            ResultSet resultSet = pst.executeQuery();

            while (resultSet.next()) {
                Customer b = new Customer();

                b.setCustNumber(resultSet.getInt("cust_number"));
                b.setCustName(resultSet.getString("name_customer"));

                allCustomer.add(b);
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }
        return allCustomer;
    }

    public Customer getCustomerByCode(int code) {
        Customer Customer;
        try {
            Connection conn = getConnection();
            String sql_query = "SELECT * FROM customer WHERE cust_number = ?";
            PreparedStatement preparedStatement = conn.prepareStatement(sql_query);
            preparedStatement.setInt(1, code);

            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                Customer = new Customer();
                Customer.setCustNumber(resultSet.getInt("cust_number"));
                Customer.setCustName(resultSet.getString("name_customer"));
                return Customer;
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }

        Customer = null;
        return Customer;
    }

    public int insertIntoCustomer(Customer c) {
        int status = 0;
        try {
            Connection conn = getConnection();
            String add_query = "INSERT INTO customer (name_customer,cust_number) values (?,?)";
            PreparedStatement preparedStatement = conn.prepareStatement(add_query);
            preparedStatement.setString(1, c.getCustName());
            preparedStatement.setInt(2, c.getCustNumber());

            status = preparedStatement.executeUpdate();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }
        return status;
    }

    public int updateInCustomer(Customer c) {
        int status = 0;
        try {
            Connection conn = getConnection();
            String upd_query = "UPDATE customer SET name_customer = ? WHERE cust_number = ?";
            PreparedStatement preparedStatement = conn.prepareStatement(upd_query);
            preparedStatement.setString(1, c.getCustName());
            preparedStatement.setInt(2, c.getCustNumber());

            status = preparedStatement.executeUpdate();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }
        return status;
    }

    public int deleteFromCustomer(String code) {
        int status = 0;
        try {
            Connection conn = getConnection();
            String del_querry = "DELETE FROM customer WHERE cust_number = ?";
            PreparedStatement ps = conn.prepareStatement(del_querry);
            ps.setString(1, code);

            status = ps.executeUpdate();
            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }
        return status;
    }

}
