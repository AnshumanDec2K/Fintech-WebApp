package com.Customer;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "deleteFromCustomer", value = "/deleteFromCustomer")
public class DeleteCustomer extends HttpServlet{
    private static final long serialVersionUID = 1L;

    public DeleteCustomer() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        CustomerDAO cdao = new CustomerDAO();
        String cn = request.getParameter("dnum");
        
        int status = cdao.deleteFromCustomer(cn);

        PrintWriter out = response.getWriter();
        if (status > 0) {
            out.print("<p>Record deleted successfully!</p>");
            request.getRequestDispatcher("ccrud.html").include(request, response);
        } else {
            out.print("<p>Sorry! unable to delete record</p>");
            request.getRequestDispatcher("ccrud.html").include(request, response);
    
        }

    }
}
