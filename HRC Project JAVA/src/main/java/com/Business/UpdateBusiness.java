package com.Business;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "updateInBussiness", value = "/updateInBussiness")
public class UpdateBusiness extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public UpdateBusiness() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        BusinessDAO bussinessDAO = new BusinessDAO();

        String bcode = request.getParameter("ubcode");
        String bname = request.getParameter("ubname");

        Business b = new Business();
        b.setBusinessCode(bcode);
        b.setBusinessName(bname);

        int status = bussinessDAO.updateInBussiness(b);

        PrintWriter out = response.getWriter();
        if (status > 0) {
            out.print("<p>Record updated successfully!</p>");
            request.getRequestDispatcher("bcrud.html").include(request, response);
        } else {
            out.print("<p>Sorry! unable to update record</p>");
            request.getRequestDispatcher("bcrud.html").include(request, response);

        }

    }
}