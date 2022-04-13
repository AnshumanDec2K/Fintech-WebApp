package com.Winter_internship;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet(name = "getDataByCustID", value = "/getDataByCustID")
public class GetSearchCust extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public GetSearchCust() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String cid = request.getParameter("cn");

        Winter_internshipDAO winter_internshipDAO = new Winter_internshipDAO();

        ArrayList<Winter_internship> data = winter_internshipDAO.getDataByCustID(cid);

        Gson gson = new Gson();
        String respData = gson.toJson(data);

        response.getWriter().print(respData);
    }
}