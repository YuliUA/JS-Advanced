let userModule = {
    people: ['Jack', 'Lily', 'Tom', 'Sam'],
    execute: function () {
        this.addPeople();
        this.delPeople();
        this.restart();
    },
    addPeople: function () {
        // adding names to array 'people' 
        $('#addName').on('click', () => {
            let name = $('#newName').val()
            this.people.push(name)
            this.restart()
            $('#newName').val('')
        })
    },
    delPeople: function (e) {
        //remove from people array
        $('ul').on('click', 'span', function (e) {
            let del = e.target.closest('li')
            let index = $('ul').find('li').index(del)
            userModule.people.splice(index, 1)//у цих двох випадках this не доступається до об'єкта
            userModule.restart();
        })
    },
    restart: function () {
        //rewrite ul list
        $('ul').html('')
        for (let i = 0; i < this.people.length; i++) {
            let item = $(`<li>${this.people[i]} <span>x</span></li>`)
            $('ul').append(item)
        }
    }
}
userModule.execute();


