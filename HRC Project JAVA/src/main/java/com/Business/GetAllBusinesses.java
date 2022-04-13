package com.Business;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



import com.google.gson.Gson;



@WebServlet(name = "getAllBusinesses", value = "/api/business")
public class GetAllBusinesses extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public GetAllBusinesses() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        

        BusinessDAO bussinessDAO = new BusinessDAO();

        ArrayList<Business> data = bussinessDAO.getAllBusinesses();

        Gson gson = new Gson();
        String respData = gson.toJson(data);

        response.getWriter().print(respData);
        
    }
}