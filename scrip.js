Swal.fire({
  title: 'hi there!,this is simple sum calculator.',
  width: 600,
  padding: '3em',
  background: '#fff ',
  backdrop: `
    rgba(0,0,0,0.4)
    url("http://pa1.narvii.com/6677/bfa14b9fe32d2cf956083a230e0eab3628510475_00.gif")
    left top
    no-repeat
  `
})




function add() {
  
    const cal = document.getElementById('cal')
    let OperatorA = cal['operatorA']
    let OperatorB = cal['operatorB']
    result = parseInt(OperatorA.value) + parseInt(OperatorB.value)
   if (isNaN(result)) 
    
    Swal.fire({
      icon: 'error',
      title: 'Oops ... there are empty spaces',
      text: 'try again',
    })
  
  document.getElementById('result').innerHTML = `The result: ${result}`
}

