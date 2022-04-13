package com.Winter_internship;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
@WebServlet(name = "searchData", value = "/searchData")
public class GetSearchWinter extends HttpServlet{
    private static final long serialVersionUID = 1L;

    public GetSearchWinter() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        
        int custnum = Integer.parseInt(request.getParameter("cn"));
        String docid = request.getParameter("doc");
        int invoice = Integer.parseInt(request.getParameter("inv"));
        int bus_year = Integer.parseInt(request.getParameter("byear"));

        Winter_internshipDAO windao = new Winter_internshipDAO();

        Winter_internship data = windao.searchData(custnum,docid,invoice,bus_year);

        Gson gson = new Gson();
        String respData = gson.toJson(data);

        PrintWriter out = response.getWriter();
        out.write(respData);
    }
}
