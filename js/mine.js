function thankyou_message() {
    var form = document.querySelector('.gform');
    var thankyouMessage = document.querySelector('.thankyou_message');

    if (form.value != null || form.value != empty) {
        thankyouMessage.style.display == "block";
    } else {
        thankyouMessage.style.display == "none";
    }
    // if(thankyouMessage.style.display == 'none') {
    //     thankyouMessage.style.display == 'block';
    // }else {
    //     thankyouMessage.style.display == 'none';
    // }
}
// var form = document.getElementsByTagName('form')
// if (form.value != null) {
//     function thankyou_message() {
//         var thankyou_message = document.querySelector('thankyou_message')
//         thankyou_message.style.display == block;
//     }
// }