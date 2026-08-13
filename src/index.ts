import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator";

  function displayCatalogdata (){
    const variable = fetchProductCatalog()

    variable.then (data =>{
        console.log(data)
    })
  }

  displayCatalogdata()


  function displayReviewsdata (){
    const Reviewsvariable = fetchProductReviews()

    Reviewsvariable.then (data =>{
        console.log(data)
    })
  }

  displayReviewsdata()

    function displaySalesdata (){
    const Salesvariable = fetchSalesReport()

    Salesvariable.then (data =>{
        console.log(data)
    })
  }

  displaySalesdata()

