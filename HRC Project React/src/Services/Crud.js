import axios from "axios";

export const Data = async () => {
  let res
  await axios.get(`http://localhost:8080/demo/getAllWinterInternship?limit=50000`).then((response) => {
    res = response;

  }).catch(({ response }) => {
    res = response;
  });

  return res;
}


export const Analytics = async (clearFrom, clearTo, dueFrom, dueTo, baselineFrom, baselineTo, invoiceCurrency) => {
  
  const url = `http://localhost:8080/demo/analytics?clearFrom=${clearFrom?clearFrom?.format("YYYY-MM-DD"):""}&clearTo=${clearTo?clearTo?.format("YYYY-MM-DD"):""}&dueFrom=${dueFrom?dueFrom?.format("YYYY-MM-DD"):""}&dueTo=${dueTo?dueTo?.format("YYYY-MM-DD"):""}&baselineFrom=${baselineFrom?baselineFrom?.format("YYYY-MM-DD"):""}&baselineTo=${baselineTo?baselineTo?.format("YYYY-MM-DD"):""}&invoiceCurrency=${invoiceCurrency}`
  let res;
  await axios.get(url).then((response) => {
    res = response;
  }).catch(({ response }) => {
    res = response;
  });

  return res;
}


export const AdvSearch = async (documentID, invoiceID, customerNumber, businessYear) => {
  const url = `http://localhost:8080/demo/searchData?cn=${customerNumber}&doc=${documentID}&inv=${invoiceID}&byear=${businessYear}`
  
  let res;
  await axios.get(url).then((response) => {
    res = response;
  }).catch(({ response }) => {
    res = response;
  });

  return res;
}


export const BasicSearch = async (customerNumber) => {
  const url = `http://localhost:8080/demo/getDataByCustID?cn=${customerNumber}`
  let res;
  await axios.get(url).then((response) => {
    res = response;
  }).catch(({ response }) => {
    res = response;
  });

  return res;
}


export const Add = async (body) => {
  let res;
  await axios.post(`http://localhost:8080/demo/insertIntoWinter`, body).then((response) => {
    res = response;
  }).catch(({ response }) => {
    res = response;
  });
  return res;

}


export const Edit = async (ic, cpt, sl) => {
  let res;
  await axios.put(`http://localhost:8080/demo/updateInWinter?ic=${ic}&cpt=${cpt}&sn=${sl}`).then((response) => {
    res = response;
  }).catch(({ response }) => {

  });

  return res;
}


export const Delete = async (sl) => {
  let res;
  await axios.get(`http://localhost:8080/demo/deleteFromWinter?&sn=${sl}`).then((response) => {
    res = response;
  }).catch(({ response }) => {
    res = response;
  });

  return res;
}

