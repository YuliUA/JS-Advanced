
class UserText {
    constructor() {
        this.txt = document.querySelector('#enterTxt').value;
        this.txtLength = this.txt.length;
        this.lastSymbol = this.txt.slice('')[this.txtLength-1]
        this.checkTxt = function () {
            var firstLetter = this.txt.slice(' ')[0].toUpperCase();
            var newTxt = firstLetter + this.txt.substring(1, this.txtLength)
            return newTxt
        },
            this.dotEnd = function () {
                if(this.lastSymbol!=='.' && this.lastSymbol!=='!' && this.lastSymbol!=='?'){
                    return this.checkTxt()+'.'
                }else{
                    return this.checkTxt()
                }
            },
            this.placeholder = function(){
                var placeholder = document.createElement('div')
                document.querySelector('.showUserTxt').appendChild(placeholder)
                placeholder.innerHTML = 'Your text will be here...'
                placeholder.classList.add('placeholder')
                return placeholder
            }
    }
}
var userText = new UserText()
userText.placeholder()
document.querySelector('#enterTxt').addEventListener('blur', () => {
    var userText = new UserText()
    document.querySelector('.placeholder').style.opacity = 0
    document.querySelector('.showUserTxt').innerHTML += `${userText.dotEnd()} `
    console.log(userText.dotEnd())
})