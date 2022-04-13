package com.Customer;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet(name = "getAllCustomer", value = "/api/customer")
public class GetAllCustomer extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public GetAllCustomer() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        CustomerDAO customerDAO = new CustomerDAO();

        ArrayList<Customer> data = customerDAO.getAllCustomeres();

        Gson gson = new Gson();
        String respData = gson.toJson(data);

        response.getWriter().print(respData);
    }
}