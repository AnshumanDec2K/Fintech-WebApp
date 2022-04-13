package com.Business;

public class Business {
    

    private String businessCode;
    private String businessName;

    @Override
    public String toString() {
        return "Business [businessCode=" + businessCode + ", businessName=" + businessName + "]";
    }

    public String getBusinessCode() {
        return businessCode;
    }

    public void setBusinessCode(String businessCode) {
        this.businessCode = businessCode;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

}