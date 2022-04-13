package com.Business;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "deleteFromBussiness", value = "/deleteFromBussiness")
public class DeleteBusiness extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public DeleteBusiness() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        BusinessDAO bussinessDAO = new BusinessDAO();

        String dbcode = request.getParameter("dbcode");
        
        int status = bussinessDAO.deleteFromBussiness(dbcode);

        PrintWriter out = response.getWriter();
        if (status > 0) {
            out.print("<p>Record deleted successfully!</p>");
            request.getRequestDispatcher("bcrud.html").include(request, response);
        } else {
            out.print("<p>Sorry! unable to delete record</p>");
            request.getRequestDispatcher("bcrud.html").include(request, response);
    
        }

    }
}