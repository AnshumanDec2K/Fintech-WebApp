package com.Winter_internship;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@WebServlet(name = "insertIntoWinter", value = "/insertIntoWinter")
public class InsertWinter extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public InsertWinter() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

                StringBuilder sb = new StringBuilder();
                InputStream is = request.getInputStream();
                BufferedReader br = new BufferedReader(new InputStreamReader(is));
                char[] charBuffer = new char[128];
                int bytesRead = -1;
                while ((bytesRead = br.read(charBuffer)) > 0) {
                    sb.append(charBuffer, 0, bytesRead);
                }
                String bodystring = sb.toString();
                Map<String, Object> body = new Gson().fromJson(bodystring, new TypeToken<HashMap<String, Object>>() {
                }.getType());

        Winter_internshipDAO windao = new Winter_internshipDAO();

        String bcode = body.get("bcode").toString();
        int cn = Integer.parseInt(body.get("cn").toString());
        String cdate = body.get("cdate").toString();
        int byear = Integer.parseInt(body.get("byear").toString());
        String doc = body.get("doc").toString();
        String pdate = body.get("pdate").toString();
        String dcd = body.get("dcd").toString();
        String ddate = body.get("ddate").toString();
        String ic = body.get("ic").toString();
        String dtype = body.get("dtype").toString();
        int pid = Integer.parseInt(body.get("pid").toString());
        Double toa = Double.parseDouble(body.get("toa").toString());
        String bcd = body.get("bcd").toString();
        String cpt = body.get("cpt").toString();
        int invid = Integer.parseInt(body.get("invid").toString());

        Winter_internship w = new Winter_internship();
        w.setBusiness_code(bcode);
        w.setCust_number(cn);
        w.setClear_date(cdate);
        w.setBusiness_year(byear);
        w.setDoc_id(doc);
        w.setPosting_date(pdate);
        w.setDocument_create_date(dcd);
        w.setDue_in_date(ddate);
        w.setInvoice_currency(ic);
        w.setDocument_type(dtype);
        w.setPosting_id(pid);
        w.setTotal_open_amount(toa);
        w.setBaseline_create_date(bcd);
        w.setCust_payment_terms(cpt);
        w.setInvoice_id(invid);

        int status = windao.insertIntoWinter(w);
        PrintWriter out = response.getWriter();
        if (status > 0) {
            out.print("<p>Record saved successfully!</p>");
            request.getRequestDispatcher("wcrud.html").include(request, response);
        } else {
            out.print("<p>Sorry! unable to save record</p>");
            request.getRequestDispatcher("wcrud.html").include(request, response);
        }

    }
}
