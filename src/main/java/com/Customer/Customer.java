package com.Customer;

public class Customer {
    private int custNumber;
    private String custName;

    @Override
    public String toString() {
        return "Customer [custNumber=" + custNumber + ", custName=" + custName + "]";
    }

    public int getCustNumber() {
        return custNumber;
    }

    public void setCustNumber(int custNumber) {
        this.custNumber = custNumber;
    }

    public String getCustName() {
        return custName;
    }

    public void setCustName(String custName) {
        this.custName = custName;
    }

}
