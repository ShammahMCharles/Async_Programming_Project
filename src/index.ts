import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator";

  function displayCatalogdata (){
    const variable = fetchProductCatalog()

    variable 
      .then(data => {
         console.log(data);
       })
      .catch(error => {
         console.error(error);
      })
      .finally(() =>{
        console.log("Product Catalog was attempted")
      })
   }

  displayCatalogdata()


  function displayReviewsdata (){
    const Reviewsvariable = fetchProductReviews()

    Reviewsvariable
    .then (data =>{
        console.log(data)
    })
    .catch(error => {
        console.error(error);
    })

    .finally(() =>{
        console.log("Product Reviews was attempted")
    })
    
  }

  displayReviewsdata()

    function displaySalesdata (){
    const Salesvariable = fetchSalesReport()

    Salesvariable
     .then (data =>{
        console.log(data)
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() =>{
        console.log("Sales Report was attempted")
    })
  }

  displaySalesdata()

