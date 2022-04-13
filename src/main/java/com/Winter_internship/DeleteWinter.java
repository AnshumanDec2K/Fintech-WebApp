package com.Winter_internship;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "deleteFromWinter", value = "/deleteFromWinter")
public class DeleteWinter extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public DeleteWinter() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Winter_internshipDAO windao = new Winter_internshipDAO();
        String slnum = request.getParameter("sn");

        int status = windao.deleteFromWinter(slnum);

        PrintWriter out = response.getWriter();
        if (status > 0) {
            out.print("<p>Record deleted successfully!<p>");
            request.getRequestDispatcher("wcrud.html").include(request, response);
        } else {
            out.print("<p>Sorry! unable to delete record<p>");
            request.getRequestDispatcher("wcrud.html").include(request, response);

        }

    }
}
