package com.Customer;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "updateInCustomer", value = "/updateInCustomer")
public class UpdateCustomer extends HttpServlet{
    private static final long serialVersionUID = 1L;

    public UpdateCustomer() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        CustomerDAO cdao = new CustomerDAO();

        int cn = Integer.parseInt(request.getParameter("unum"));
        String cname = request.getParameter("uname");

        
        Customer c = new Customer();
        c.setCustName(cname);
        c.setCustNumber(cn);

        int status = cdao.updateInCustomer(c);

        PrintWriter out = response.getWriter();
        if (status > 0) {
            out.print("<p>Record updated successfully!</p>");
            request.getRequestDispatcher("ccrud.html").include(request, response);
        } else {
            out.print("<p>Sorry! unable to update record</p>");
            request.getRequestDispatcher("ccrud.html").include(request, response);
        }

    }
}
