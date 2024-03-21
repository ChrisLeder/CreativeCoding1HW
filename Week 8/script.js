const Name = document.getElementById('Name')
const Email = document.getElementById('Email')
const Terms of Agreement = document.getElementById('termsOfAgreement')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('More', (e) => {
    let messages = []
    if (Name.value ===''  || Name.value ==null) {
        messages.push('Name is Required')
        <span> Name is Required. </span>
    }
    if (Email.value ==='' || Email.value==null)
        messages.push('Email is required')
        <span> Email is Required. </span>
        if (termsOfAgreement.value ==='yes') {
            messages.push('Thank You for your Interest. Someone will contact you.')
            <span> Terms of Agreement is Required. </span>
        }
        else{
            message.push('Thank you for your interest. You will not be contacted.')
            if (termsOfAgreement.value ==='No') {
                messages.push(Thank you for your Interest.)
                <span> Thank you for your Interest. </span>
            }
        }
    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})