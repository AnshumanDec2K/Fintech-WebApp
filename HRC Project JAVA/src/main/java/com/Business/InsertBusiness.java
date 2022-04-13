package com.Business;

import java.io.IOException;
// import java.util.ArrayList;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "insertIntoBussiness", value = "/insertIntoBussiness")
public class InsertBusiness extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public InsertBusiness() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        BusinessDAO bussinessDAO = new BusinessDAO();

        String bcode = request.getParameter("bcode");
        String bname = request.getParameter("bname");

        Business b = new Business();
        b.setBusinessCode(bcode);
        b.setBusinessName(bname);

        int status = bussinessDAO.insertIntoBussiness(b);

        PrintWriter out = response.getWriter();
        if (status > 0) {
            out.print("<p>Record saved successfully!</p>");
            request.getRequestDispatcher("bcrud.html").include(request, response);
        } else {
            out.print("<p>Sorry! unable to save record</p>");
            request.getRequestDispatcher("bcrud.html").include(request, response);

        }

    }
}