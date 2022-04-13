package com.Customer;
import java.io.IOException;
// import java.util.ArrayList;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "insertIntoCustomer", value = "/insertIntoCustomer")
public class InsertCustomer extends HttpServlet{
    private static final long serialVersionUID = 1L;

    public InsertCustomer() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        
        CustomerDAO cdao = new CustomerDAO();

        String cname = request.getParameter("iname");
        int cnum = Integer.parseInt(request.getParameter("inum"));

        
        Customer c = new Customer();
        c.setCustName(cname);
        c.setCustNumber(cnum);
        

        int status = cdao.insertIntoCustomer(c);

        PrintWriter out = response.getWriter();
        if (status > 0) {
            out.print("<p>Record saved successfully!</p>");
            request.getRequestDispatcher("ccrud.html").include(request, response);
        } else {
            out.print("<p>Sorry! unable to save record</p>");
            request.getRequestDispatcher("ccrud.html").include(request, response);
        }

    }
}
