package com.Business;

import java.io.IOException;
// import java.util.ArrayList;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



import com.google.gson.Gson;



@WebServlet(name = "getBussinessByCode", value="/getBussinessByCode")
public class GetSearchBusiness extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public GetSearchBusiness() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
        String id=request.getParameter("bid");
        BusinessDAO bussinessDAO = new BusinessDAO();

        Business data = bussinessDAO.getBussinessByCode(id);

       
        Gson gson = new Gson();
        String respData = gson.toJson(data);

        PrintWriter out=response.getWriter();
        out.write(respData);
        
        
    }
}