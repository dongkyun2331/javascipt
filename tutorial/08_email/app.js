const dimm = document.querySelector('.dimm')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')
const inputs = document.querySelectorAll('input')

const userName = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')

// const textarea = document.querySelectorAll('textarea')
console.log(inputs)

window.onload = function () {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault()

      if (userName.value == '' || email.value == '' || message.value == '') {
        alert('이름,이메일,내용을 확인하세요')
        return
      }

      dimm.classList.add('active')

      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0
      // these IDs from the previous steps
      emailjs.sendForm('service_bg4ecm9', 'template_um672h7', this).then(
        function () {
          console.log('SUCCESS!')
          modal.classList.add('active')
        },
        function (error) {
          console.log('FAILED...', error)
        }
      )
    })

  closeBtn.addEventListener('click', function () {
    modal.classList.remove('active')
    dimm.classList.remove('active')

    inputs.forEach((item) => (item.value = ''))
    message.value = ''
    // textarea.forEach((item) => (item.value = ''))
  })
}
