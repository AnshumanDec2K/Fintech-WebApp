package com.Business;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class BusinessDAO {
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

    public ArrayList<Business> getAllBusinesses() {
        ArrayList<Business> allBusiness = new ArrayList<Business>();
        try {
            Connection conn = getConnection();
            String sql_query = "SELECT * FROM business";
            PreparedStatement pst = conn.prepareStatement(sql_query);

            ResultSet resultSet = pst.executeQuery();

            while (resultSet.next()) {
                Business b = new Business();

                b.setBusinessCode(resultSet.getString("business_code"));
                b.setBusinessName(resultSet.getString("business_name"));

                allBusiness.add(b);
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }
        return allBusiness;
    }

    public Business getBussinessByCode(String code) {
        Business business;
        try {
            Connection conn = getConnection();
            String sql_query = "SELECT * FROM business WHERE business_code = ?";
            PreparedStatement preparedStatement = conn.prepareStatement(sql_query);
            preparedStatement.setString(1, code);

            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                business = new Business();
                business.setBusinessCode(resultSet.getString("business_code"));
                business.setBusinessName(resultSet.getString("business_name"));
                return business;
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }

        business = null;
        return business;
    }

    public int insertIntoBussiness(Business b) {
        int status = 0;
        try {
            Connection con = getConnection();
            String sql_query = "INSERT into business(business_code,business_name) values (?,?)";
            PreparedStatement ps = con.prepareStatement(sql_query);
            ps.setString(1, b.getBusinessCode());
            ps.setString(2, b.getBusinessName());

            status = ps.executeUpdate();

            con.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return status;
    }

    public int updateInBussiness(Business b) {
        int status = 0;
        try {
            Connection con = getConnection();
            String sql_query = "UPDATE business SET business_name=? WHERE business_code=?";
            PreparedStatement ps = con.prepareStatement(sql_query);

            ps.setString(1, b.getBusinessName());
            ps.setString(2, b.getBusinessCode());

            status = ps.executeUpdate();

            con.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return status;
    }

    
    public int deleteFromBussiness(String bcode) {
        int status = 0;
        try {
            Connection con = getConnection();
            String sql_query = "DELETE FROM business WHERE business_code=?";
            PreparedStatement ps = con.prepareStatement(sql_query);

            ps.setString(1, bcode);

            status = ps.executeUpdate();

            con.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return status;
    }
    
}