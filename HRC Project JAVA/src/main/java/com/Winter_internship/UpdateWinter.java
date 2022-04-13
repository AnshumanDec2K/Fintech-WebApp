package com.Winter_internship;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "updateInWinter", value = "/updateInWinter")
public class UpdateWinter extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public UpdateWinter() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Winter_internshipDAO windao = new Winter_internshipDAO();
        String ic = request.getParameter("ic");
        String cpt = request.getParameter("cpt");
        int sn = Integer.parseInt(request.getParameter("sn"));

        int status = windao.updateInWinter(ic, cpt, sn);

        PrintWriter out = response.getWriter();
        if (status > 0) {
            out.print("Record updated successfully!");
            request.getRequestDispatcher("wcrud.html").include(request, response);
        } else {
            out.print("Sorry! unable to update record");
            request.getRequestDispatcher("wcrud.html").include(request, response);

        }

    }
}
