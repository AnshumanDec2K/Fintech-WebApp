package com.Customer;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet(name = "getCustomerByCode", value = "/getCustomerByCode")
public class GetSearchCustomer extends HttpServlet{
    private static final long serialVersionUID = 1L;

    public GetSearchCustomer() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        int id = Integer.parseInt(request.getParameter("cn"));

        
        CustomerDAO cdao = new CustomerDAO();
        
        Customer data = cdao.getCustomerByCode(id);
        Gson gson = new Gson();
        String respData = gson.toJson(data);

        PrintWriter out = response.getWriter();
        out.write(respData);
    }
}
