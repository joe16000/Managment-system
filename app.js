let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')




// total



function getTotal(){
    if(price.value != "" ){
      let result = (Number(price.value) + Number(taxes.value) + Number(ads.value) - Number(discount.value))
      total.innerHTML = result
      total.style.background = "green"
    }else{
      total.innerHTML = ""
      total.style.background = "red"
    }
}


// create

  let productData;
  if( localStorage.product != null ){
    productData = JSON.parse(localStorage.product)
  } else{
    productData = [];
  }
   

submit.onclick = function(){
    let newProduct = {
      title: title.value,
      price: price.value,
      taxes: taxes.value,
      ads: ads.value,
      discount: discount.value,
      total: total.innerHTML,
      count: count.value,
      category: category.value,
    }
    productData.push(newProduct)
    localStorage.setItem('product', JSON.stringify(productData))
    clearData()
    showData()
}



// clear data


function clearData(){
  title.value = "",
  price.value = "",
  taxes.value = "",
  ads.value = "",
  discount.value ="",
  total.innerHTML = "",
  count.value ="",
  category.value ="";
  total.style.background = "red"

}
  
// read 



  function showData(){
      let table = ""

      for(let i = 0 ; i < productData.length ; i++){

        table += `
            <tr>
              <td> ${i}  </td>
              <td> ${productData[i].title}  </td>
              <td> ${productData[i].price}  </td>
              <td> ${productData[i].taxes}  </td>
              <td> ${productData[i].ads}  </td>
              <td> ${productData[i].discount}  </td>
              <td> ${productData[i].total}  </td>
              <td> ${productData[i].category}  </td>
              <td> <button>update</button  </td>
              <td> <button onclick="deleteData( ${i} )" >delete</button  </td>
            </tr>
        `
        



      }
      
       document.getElementById('tbody').innerHTML = table
      
  }
  




showData()




// delete 



function deleteData(i){
  productData.splice(i, 1)
  localStorage.product = JSON.stringify(productData)
  showData()
}