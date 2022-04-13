package com.Winter_internship;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Winter_internshipDAO {
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

    public ArrayList<Winter_internship> getAllWinterInternship(int limit) {
        ArrayList<Winter_internship> allWinter_internship = new ArrayList<Winter_internship>();
        try {
            Connection conn = getConnection();
            String sql_query = "SELECT * FROM winter_internship WHERE is_deleted = 0 limit ?";
            PreparedStatement pst = conn.prepareStatement(sql_query);

            pst.setInt(1, limit);

            ResultSet resultSet = pst.executeQuery();

            while (resultSet.next()) {
                Winter_internship w = new Winter_internship();

                w.setSl_no(resultSet.getInt("sl_no"));
                w.setBusiness_code(resultSet.getString("business_code"));
                w.setCust_number(resultSet.getInt("cust_number"));
                w.setClear_date(resultSet.getString("clear_date"));
                w.setBusiness_year(resultSet.getInt("buisness_year"));
                w.setDoc_id(resultSet.getString("doc_id"));
                w.setPosting_date(resultSet.getString("posting_date"));
                w.setDocument_create_date(resultSet.getString("document_create_date"));
                w.setDocument_create_date1(resultSet.getString("document_create_date1"));
                w.setDue_in_date(resultSet.getString("due_in_date"));
                w.setInvoice_currency(resultSet.getString("invoice_currency"));
                w.setDocument_type(resultSet.getString("document_type"));
                w.setPosting_id(resultSet.getInt("posting_id"));
                w.setTotal_open_amount(resultSet.getDouble("total_open_amount"));
                w.setBaseline_create_date(resultSet.getString("baseline_create_date"));
                w.setCust_payment_terms(resultSet.getString("cust_payment_terms"));
                w.setInvoice_id(resultSet.getInt("invoice_id"));
                w.setIsOpen(resultSet.getInt("isOpen"));
                w.setAging_bucket(resultSet.getString("aging_bucket"));
                w.setIs_deleted(resultSet.getInt("is_deleted"));

                allWinter_internship.add(w);
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }
        return allWinter_internship;
    }

    public ArrayList<Winter_internship> getDataByCustID(String code) {
        ArrayList<Winter_internship> allCustomer = new ArrayList<Winter_internship>();
        try {
            Connection conn = getConnection();
            String sql_query = "SELECT * FROM winter_internship WHERE cust_number = ? AND is_deleted = 0";
            PreparedStatement preparedStatement = conn.prepareStatement(sql_query);
            preparedStatement.setString(1, code);

            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                Winter_internship w = new Winter_internship();

                w.setSl_no(resultSet.getInt("sl_no"));
                w.setBusiness_code(resultSet.getString("business_code"));
                w.setCust_number(resultSet.getInt("cust_number"));
                w.setClear_date(resultSet.getString("clear_date"));
                w.setBusiness_year(resultSet.getInt("buisness_year"));
                w.setDoc_id(resultSet.getString("doc_id"));
                w.setPosting_date(resultSet.getString("posting_date"));
                w.setDocument_create_date(resultSet.getString("document_create_date"));
                w.setDocument_create_date1(resultSet.getString("document_create_date1"));
                w.setDue_in_date(resultSet.getString("due_in_date"));
                w.setInvoice_currency(resultSet.getString("invoice_currency"));
                w.setDocument_type(resultSet.getString("document_type"));
                w.setPosting_id(resultSet.getInt("posting_id"));
                w.setTotal_open_amount(resultSet.getDouble("total_open_amount"));
                w.setBaseline_create_date(resultSet.getString("baseline_create_date"));
                w.setCust_payment_terms(resultSet.getString("cust_payment_terms"));
                w.setInvoice_id(resultSet.getInt("invoice_id"));
                w.setIsOpen(resultSet.getInt("isOpen"));
                w.setAging_bucket(resultSet.getString("aging_bucket"));
                w.setIs_deleted(resultSet.getInt("is_deleted"));

                allCustomer.add(w);
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }
        return allCustomer;
    }

    public Winter_internship searchData(int custnum, String doc, int inv, int byear) {
        Winter_internship w;
        try {
            Connection conn = getConnection();
            String search_querry = "SELECT * FROM winter_internship WHERE doc_id = ? AND cust_number = ? AND invoice_id = ? AND buisness_year=? AND is_deleted = 0";
            PreparedStatement ps = conn.prepareStatement(search_querry);
            ps.setString(1, doc);
            ps.setInt(2, custnum);
            ps.setInt(3, inv);
            ps.setInt(4, byear);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                w = new Winter_internship();
                w.setSl_no(rs.getInt("sl_no"));
                w.setBusiness_code(rs.getString("business_code"));
                w.setCust_number(rs.getInt("cust_number"));
                w.setClear_date(rs.getString("clear_date"));
                w.setBusiness_year(rs.getInt("buisness_year"));
                w.setDoc_id(rs.getString("doc_id"));
                w.setPosting_date(rs.getString("posting_date"));
                w.setDocument_create_date(rs.getString("document_create_date"));
                w.setDocument_create_date1(rs.getString("document_create_date1"));
                w.setDue_in_date(rs.getString("due_in_date"));
                w.setInvoice_currency(rs.getString("invoice_currency"));
                w.setDocument_type(rs.getString("document_type"));
                w.setPosting_id(rs.getInt("posting_id"));
                w.setTotal_open_amount(rs.getDouble("total_open_amount"));
                w.setBaseline_create_date(rs.getString("baseline_create_date"));
                w.setCust_payment_terms(rs.getString("cust_payment_terms"));
                w.setInvoice_id(rs.getInt("invoice_id"));
                w.setIsOpen(rs.getInt("isOpen"));
                w.setAging_bucket(rs.getString("aging_bucket"));
                w.setIs_deleted(rs.getInt("is_deleted"));
                return w;
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }
        w = null;
        return w;
    }

    public int insertIntoWinter(Winter_internship w) {
        int status = 0;
        // To be done
        String rc = "SET FOREIGN_KEY_CHECKS=0"; // Remove Foreign Key Constraint
        try {
            Connection conn = getConnection();
            String add_querry = "INSERT INTO winter_internship (business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency"
                    +
                    ",document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id) values "
                    +
                    "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

            PreparedStatement pst = conn.prepareStatement(rc);
            pst.executeUpdate();

            PreparedStatement ps = conn.prepareStatement(add_querry);
            ps.setString(1, w.getBusiness_code());
            ps.setInt(2, w.getCust_number());
            ps.setString(3, w.getClear_date());
            ps.setInt(4, w.getBusiness_year());
            ps.setString(5, w.getDoc_id());
            ps.setString(6, w.getPosting_date());
            ps.setString(7, w.getDocument_create_date());
            ps.setString(8, w.getDue_in_date());
            ps.setString(9, w.getInvoice_currency());
            ps.setString(10, w.getDocument_type());
            ps.setInt(11, w.getPosting_id());
            ps.setDouble(12, w.getTotal_open_amount());
            ps.setString(13, w.getBaseline_create_date());
            ps.setString(14, w.getCust_payment_terms());
            ps.setInt(15, w.getInvoice_id());

            status = ps.executeUpdate();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }
        return status;
    }

    public int updateInWinter(String ic, String cpt, int cn) {
        int status = 0;
        try {

            Connection conn = getConnection();
            String upd_query = "UPDATE winter_internship SET invoice_currency = ?, cust_payment_terms = ? WHERE sl_no = ?";
            PreparedStatement ps = conn.prepareStatement(upd_query);

            ps.setString(1, ic);
            ps.setString(2, cpt);
            ps.setInt(3, cn);

            status = ps.executeUpdate();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }
        return status;

    }

    public int deleteFromWinter(String cd) {

        int status = 0;
        String rc = "SET FOREIGN_KEY_CHECKS=0"; // Remove Foreign Key Constraint
        try {
            Connection conn = getConnection();
            PreparedStatement pst = conn.prepareStatement(rc);
            pst.executeUpdate();
            conn.close();

            Connection con = getConnection();
            String del_querry = "UPDATE winter_internship SET is_deleted = 1 WHERE sl_no = ?";
            // UPDATE winter_internship SET is_deleted = 1 WHERE sl_no = ?
            // DELETE FROM winter_internship WHERE sl_no = ?
            PreparedStatement ps = con.prepareStatement(del_querry);
            ps.setString(1, cd);

            status = ps.executeUpdate();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("exception occur");
        }
        return status;
    }

    public List<Map<String, Object>> getBusinessAnalysis(String clearDateFrom, String clearDateTo, String dueDateFrom,
            String dueDateTo, String baselineDateFrom, String baselineDateTo, String invoiceCurrency) throws Exception {
        try {
            List<Map<String, Object>> insights = new ArrayList<Map<String, Object>>();

            String sql_query = "SELECT business_name, SUM(total_open_amount) AS total_amount_amount, COUNT(DISTINCT cust_number) AS customer_count FROM  winter_internship LEFT JOIN business ON winter_internship.business_code = business.business_code WHERE winter_internship.sl_no IS NOT NULL";

            if (clearDateFrom != null && clearDateTo != null) {
                sql_query += " AND winter_internship.clear_date BETWEEN '" + clearDateFrom + "' AND '" + clearDateTo
                        + "'";
            }

            if (dueDateFrom != null && dueDateTo != null) {
                sql_query += " AND winter_internship.due_in_date BETWEEN  '" + dueDateFrom + "' AND '" + dueDateTo
                        + "'";
            }

            if (baselineDateFrom != null && baselineDateTo != null) {
                sql_query += " AND winter_internship.baseline_create_date BETWEEN  '" + baselineDateFrom + "' AND '"
                        + baselineDateTo
                        + "'";
            }

            if (invoiceCurrency != null && invoiceCurrency != "") {
                sql_query += " AND winter_internship.invoice_currency = '" + invoiceCurrency + "'";
            }

            sql_query += " AND is_deleted = 0 GROUP BY business_name";

            Connection conn = getConnection();
            PreparedStatement pst = conn.prepareStatement(sql_query);

            ResultSet resultSet = pst.executeQuery();

            while (resultSet.next()) {
                Map<String, Object> businessInsight = new HashMap<String, Object>();

                businessInsight.put("business_name", resultSet.getString("business_name"));
                businessInsight.put("total_open_amount", resultSet.getDouble("total_amount_amount"));
                businessInsight.put("customer_count", resultSet.getInt("customer_count"));

                insights.add(businessInsight);
            }

            return insights;
        } catch (Exception e) {
            throw e;
        }
    }

    public List<Map<String, Object>> getCurrencyAnalysis(String clearDateFrom, String clearDateTo, String dueDateFrom,
            String dueDateTo, String baselineDateFrom, String baselineDateTo) throws SQLException {
        try {
            List<Map<String, Object>> insights = new ArrayList<Map<String, Object>>();

            String sql_query = "SELECT invoice_currency, COUNT(DISTINCT doc_id) AS count FROM winter_internship WHERE sl_no IS NOT NULL\r\n";

            if (clearDateFrom != null && clearDateTo != null) {
                sql_query += " AND clear_date BETWEEN \r\n" +
                        " '" + clearDateFrom + "'\r\n" +
                        " AND '" + clearDateTo + "'\r\n";
            }

            if (dueDateFrom != null && dueDateTo != null) {
                sql_query += " AND due_in_date BETWEEN \r\n" +
                        " '" + dueDateFrom + "'\r\n" +
                        " AND '" + dueDateTo + "'\r\n";
            }

            if (baselineDateFrom != null && baselineDateTo != null) {
                sql_query += " AND baseline_create_date BETWEEN \r\n" +
                        " '" + baselineDateFrom + "'\r\n" +
                        " AND '" + baselineDateTo + "'\r\n";
            }

            sql_query += " AND is_deleted = 0 GROUP BY invoice_currency";

            Connection conn = getConnection();
            PreparedStatement pst = conn.prepareStatement(sql_query);

            ResultSet resultSet = pst.executeQuery();

            while (resultSet.next()) {
                Map<String, Object> currencyInsight = new HashMap<String, Object>();

                currencyInsight.put("currency", resultSet.getString("invoice_currency"));
                currencyInsight.put("invoiceCount", resultSet.getInt("count"));

                insights.add(currencyInsight);
            }

            return insights;
        } catch (Exception e) {
            throw e;
        }
    }
}