package com.Winter_internship;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
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

            String clearFromString = request.getParameter("clearFrom");
            String clearToString = request.getParameter("clearFrom");
            String dueFromString = request.getParameter("dueFrom");
            String dueToString = request.getParameter("dueTo");
            String baselineFromString = request.getParameter("baselineFrom");
            String baselineToString = request.getParameter("baselineTo");
            String invoiceCurrencyString = request.getParameter("invoiceCurrency");

            
            String invoiceCurrency = null;

            if (clearFromString != "" && clearFromString != null) {
                clearFrom = new Date(Long.parseLong(clearFromString));
            }
            if (clearToString != "" && clearToString != null) {
                clearTo = new Date(Long.parseLong(clearToString));
            }
            if (dueFromString != "" && dueFromString != null) {
                dueFrom = new Date(Long.parseLong(dueFromString));
            }
            if (dueToString != "" && dueToString != null) {
                dueTo = new Date(Long.parseLong(dueToString));
            }
            if (baselineFromString != "" && baselineFromString != null) {
                baselineFrom = new Date(Long.parseLong(baselineFromString));
            }
            if (baselineToString != "" && baselineToString != null) {
                baselineTo = new Date(Long.parseLong(baselineToString));
            }
            if (invoiceCurrencyString != "" && invoiceCurrencyString != null) {
                invoiceCurrency = invoiceCurrencyString;
            }

            Winter_internshipDAO windao = new Winter_internshipDAO();

            totalOpenInsights = windao.getCustomersAndAmountForBusinesses(clearFrom, clearTo, dueFrom, dueTo,
                    baselineFrom, baselineTo, invoiceCurrency);
            allInsights.put("totalOpenInsights", totalOpenInsights);

            if (invoiceCurrency == null) {
                currencyCountInsights = windao.getCurrencyCounts(clearFrom, clearTo, dueFrom, dueTo, baselineFrom,
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