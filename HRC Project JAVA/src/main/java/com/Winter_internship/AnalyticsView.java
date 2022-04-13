package com.Winter_internship;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet("/analytics")
public class AnalyticsView extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public AnalyticsView() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            Map<String, Object> allInsights = new HashMap<String, Object>();

            List<Map<String, Object>> totalOpenInsights = new ArrayList<Map<String, Object>>();
            List<Map<String, Object>> currencyCountInsights = new ArrayList<Map<String, Object>>();

            String clearFrom = request.getParameter("clearFrom");
            String clearTo = request.getParameter("clearFrom");
            String dueFrom = request.getParameter("dueFrom");
            String dueTo = request.getParameter("dueTo");
            String baselineFrom = request.getParameter("baselineFrom");
            String baselineTo = request.getParameter("baselineTo");
            String invoiceCurrency = request.getParameter("invoiceCurrency");

            if (clearFrom == "") {
                clearFrom = null;
            }
            if (clearTo == "") {
                clearTo = null;
            }
            if (dueFrom == "") {
                dueFrom = null;
            }
            if (dueTo == "") {
                dueTo = null;
            }
            if (baselineFrom == "") {
                baselineFrom = null;
            }
            if (baselineTo == "") {
                baselineTo = null;
            }
            if (invoiceCurrency == "") {
                invoiceCurrency = null;
            }

            Winter_internshipDAO winDAO = new Winter_internshipDAO();

            totalOpenInsights = winDAO.getBusinessAnalysis(clearFrom, clearTo, dueFrom, dueTo,
                    baselineFrom, baselineTo, invoiceCurrency);
            allInsights.put("totalOpenInsights", totalOpenInsights);

            if (invoiceCurrency == null) {
                currencyCountInsights = winDAO.getCurrencyAnalysis(clearFrom, clearTo, dueFrom, dueTo, baselineFrom,
                        baselineTo);
                allInsights.put("currencyCountInsights", currencyCountInsights);
            }

            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");

            Gson gson = new Gson();
            String respData = gson.toJson(allInsights);
            response.setStatus(200);
            response.getWriter().print(respData);

        } catch (Exception e) {
            e.printStackTrace();
            response.setStatus(500);
            response.getWriter().print("Error: " + e.getMessage());
            return;
        }

    }
}