
function getData (name1, name2, edge) {
  var temp
  console.log(edge)
  if (edge < 5) {
    $.ajax({
      type: 'post',
      async: false,
      crossDomain: true,
      url: 'http://115.159.34.252:8088/bi/api/getData',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      },
      data: {name_1: name1, name_2: name2, edge: edge},
      success: function (res) {
        temp = res
        console.log(res)
      },
      error: function (res) {
        console.log('A Something wrong!')
      }
    })
    var displayArea = document.getElementById('graph')
    displayArea.style.background = 'white'
    displayArea.style.border = '2px solid gray'
    return temp
  } else {
    $.ajax({
      type: 'post',
      async: false,
      crossDomain: true,
      url: 'http://115.159.34.252:8088/bi/api/getData',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      },
      data: {name_1: name1, name_2: name2, edge: 4},
      success: function (res) {
        temp = res
        console.log(res)
      },
      error: function (res) {
        console.log('A Something wrong!')
      }
    })
    var displayArea = document.getElementById('graph')
    displayArea.style.background = 'white'
    displayArea.style.border = '2px solid gray'
    return temp
  }
}

export {getData}
